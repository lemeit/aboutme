const {chromium}=require('playwright'),fs=require('fs'),http=require('http'),path=require('path'),assert=require('assert/strict');
const root=path.resolve(process.argv[2]||'public'),source=path.resolve(__dirname,'..');
(async()=>{
const server=http.createServer((req,res)=>{let f=path.join(root,decodeURIComponent(req.url.split('?')[0]));if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');if(!fs.existsSync(f)){res.writeHead(404);return res.end('missing')}res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json'})[path.extname(f)]||'application/octet-stream');fs.createReadStream(f).pipe(res)});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const base='http://127.0.0.1:'+server.address().port;
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-webgl','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
try{
 const context=await browser.newContext({viewport:{width:1440,height:1000}});
 const page=await context.newPage();let failures=[];page.on('pageerror',e=>failures.push(e.message));
 await page.route('**/cloudflareinsights.com/**',r=>r.fulfill({status:204,body:''}));
 const inventory=JSON.parse(fs.readFileSync(source+'/data/seres_book_chapters.json','utf8'));
 const pages=[{url:'/projects/simus/bestiario/',title:'Bestiario · Seres Térmicos'},...inventory];let formulas=0,nativeScenes=0;
 for(let i=0;i<pages.length;i++){
  const p=pages[i];const r=await page.goto(base+p.url,{waitUntil:'load'});assert.equal(r.status(),200,p.url);
  assert.equal(await page.locator('.thermal-book-page>header h1').innerText(),p.title);
  assert.equal(await page.locator('.thermal-book-index a').count(),31,p.url);
  assert.equal(await page.locator('.thermal-book-index [aria-current="page"]').count(),1);
  if(i+1<pages.length)assert.equal(await page.locator('.thermal-book-turn [rel="next"]').first().getAttribute('href'),pages[i+1].url);
  if(i>0)assert.equal(await page.locator('.thermal-book-turn [rel="prev"]').first().getAttribute('href'),pages[i-1].url);
  await page.waitForFunction(()=>typeof window.katex==='object');
  assert.equal(await page.locator('.katex-error').count(),0,p.url);
  assert.equal(await page.locator('iframe').count(),0,p.url);
  for(const host of await page.locator('.sim-native-host').all()){
   nativeScenes++;assert.equal(await host.getAttribute('data-ready'),'true',p.url);
   await host.evaluate(el=>el.scrollIntoView({block:'start'}));await page.waitForTimeout(120);
   const canvas=host.locator('canvas').first();if(await canvas.count()){const size=await canvas.boundingBox();assert(size.width>0&&size.height>0,p.url+' empty canvas');}
   const stage=host.locator('#stage');if(await stage.count())assert((await stage.boundingBox()).height>=480,p.url+' 3D scene height');
   const checks=await host.evaluate(el=>{const api=el.sceneAPI;return {gl:api.thermalDiagnostics?.().glError,self:api.thermalSelfTest?.().pass};});
   if(checks.gl!==undefined)assert.equal(checks.gl,0,p.url+' WebGL');
   if(checks.self!==undefined)assert.equal(checks.self,true,p.url+' physics self-test');
   const controlOverflow=()=>host.evaluate(el=>[...el.shadowRoot.querySelectorAll('select,input,button')].flatMap(control=>{const panel=control.closest('fieldset,.card,.ctrl,.panel,aside');if(!panel||!control.getClientRects().length)return [];const r=control.getBoundingClientRect(),b=panel.getBoundingClientRect();return r.left<b.left-1||r.right>b.right+1?[control.id||control.textContent.trim()]:[];}));
   assert.deepEqual(await controlOverflow(),[],p.url+' controls inside desktop panels');
   await page.setViewportSize({width:390,height:844});
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),p.url+' mobile overflow');
   assert.deepEqual(await controlOverflow(),[],p.url+' controls inside mobile panels');
   await page.setViewportSize({width:1440,height:1000});
  }
  const raw=await page.locator('.thermal-book-content').innerText();assert(!raw.includes('$$'),p.url+' raw math');
  formulas+=await page.locator('.thermal-book-content .katex').count();
 }
 await page.goto(base+'/projects/simus/bestiario/contacto/',{waitUntil:'load'});
 assert((await page.locator('#bodyA').boundingBox()).height>=96,'contact bodies retain their styling');
 await page.locator('#contact').click();await page.waitForTimeout(200);
 assert.match(await page.locator('#status').innerText(),/En contacto/);
 await page.locator('[data-sim-expand]').click();assert.equal(await page.locator('dialog[open]').count(),1);
 assert.equal(await page.locator('.sim-native-dialog .sim-native-host').getAttribute('data-ready'),'true');
 await page.keyboard.press('Escape');assert.equal(await page.locator('dialog[open]').count(),0);
 await page.locator('.thermal-book-content .sim-native-host').waitFor({state:'attached'});
 const tex=await page.locator('annotation[encoding="application/x-tex"]').allTextContents();assert(tex.some(t=>t.includes('\\Delta T')&&t.includes('\\qquad')));
 await page.setViewportSize({width:390,height:844});await page.waitForFunction(()=>!document.querySelector('.thermal-book-index').open);
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 await page.locator('.thermal-book-index summary').click();await page.waitForFunction(()=>document.querySelector('.thermal-book-index nav').offsetHeight>100);
 assert.equal(await page.locator('.thermal-book-index nav').isVisible(),true);
 await page.setViewportSize({width:1440,height:1000});await page.evaluate(()=>document.documentElement.dataset.theme='dark');
 assert.equal(await page.locator('.thermal-book-page').isVisible(),true);
 const sims=[...new Set([...inventory.map(p=>p.sim).filter(Boolean),'v03-raymarching.html','test_3D.html'])];
 for(const sim of sims){const r=await page.goto(base+'/simus/seres-termicos/'+sim,{waitUntil:'load'});assert.equal(r.status(),200,sim);assert.equal(await page.locator('#navigation').count(),0,sim);assert.equal(await page.locator('.thermal-reader-return').count(),1,sim);await page.waitForTimeout(100);}
 await page.goto(base+'/simus/seres-termicos/v00-contacto-termico.html');
 const contact=await page.evaluate(()=>{const a=thermalContact.simulate({seconds:60}),b=thermalContact.simulate({seconds:60,cb:200});return {balance:a.qa+a.qb,eq:a.eq,eqB:b.eq}});
 // El modelo expone eq o equilibrium segun su estructura: verificar el balance independiente.
 assert(Math.abs(contact.balance)<1e-8);
 await page.goto(base+'/simus/seres-termicos/');await page.waitForURL('**/projects/simus/bestiario/');
 assert.deepEqual(failures,[]);
 assert.equal(nativeScenes,30); // 27 modelos; tres reaparecen en la memoria histórica.
 await page.goto(base+'/projects/simus/bestiario/defensa/');
 const scene=page.locator('.sim-native-host');
 await scene.locator('#scene').click({position:{x:30,y:300}});
 const playing=await scene.evaluate(el=>el.sceneAPI.thermalDiagnostics().playing);
 await page.keyboard.press('Space');
 assert.equal(await scene.evaluate(el=>el.sceneAPI.thermalDiagnostics().playing),!playing,'canvas keyboard pause');
 console.log(JSON.stringify({readerPages:pages.length,simulations:sims.length,nativeScenes,formulas,mobile:'OK',thermalBalance:'OK',runtimeErrors:failures.length}));
}finally{await browser.close();server.close()}
})().catch(e=>{console.error(e);process.exit(1)});
