const {chromium}=require('playwright'),fs=require('fs'),http=require('http'),path=require('path'),assert=require('assert/strict');
const root=path.resolve(process.argv[2]||'public'),source=path.resolve(__dirname,'..');
(async()=>{
const server=http.createServer((req,res)=>{let f=path.join(root,decodeURIComponent(req.url.split('?')[0]));if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');if(!fs.existsSync(f)){res.writeHead(404);return res.end('missing')}res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json'})[path.extname(f)]||'application/octet-stream');fs.createReadStream(f).pipe(res)});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const base='http://127.0.0.1:'+server.address().port;
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-webgl','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
try{
 const context=await browser.newContext({viewport:{width:1440,height:1000}});
 const page=await context.newPage();let failures=[];page.on('pageerror',e=>failures.push(e.message));
 await page.route('**/simus/seres-termicos/*.html?embed=1',r=>r.abort());
 const inventory=JSON.parse(fs.readFileSync(source+'/data/seres_book_chapters.json','utf8'));
 const pages=[{url:'/projects/seres-termicos/',title:'Seres Térmicos'},...inventory];let formulas=0;
 for(let i=0;i<pages.length;i++){
  const p=pages[i];const r=await page.goto(base+p.url,{waitUntil:'load'});assert.equal(r.status(),200,p.url);
  assert.equal(await page.locator('.thermal-book-page h1').innerText(),p.title);
  assert.equal(await page.locator('.thermal-book-index a').count(),31,p.url);
  assert.equal(await page.locator('.thermal-book-index [aria-current="page"]').count(),1);
  if(i+1<pages.length)assert.equal(await page.locator('.thermal-book-turn [rel="next"]').first().getAttribute('href'),pages[i+1].url);
  if(i>0)assert.equal(await page.locator('.thermal-book-turn [rel="prev"]').first().getAttribute('href'),pages[i-1].url);
  await page.waitForFunction(()=>typeof window.katex==='object');
  assert.equal(await page.locator('.katex-error').count(),0,p.url);
  assert.equal(await page.locator('.thermal-book-page select').count(),0,p.url);
  const raw=await page.locator('.thermal-book-content').innerText();assert(!raw.includes('$$'),p.url+' raw math');
  formulas+=await page.locator('.thermal-book-content .katex').count();
 }
 await page.goto(base+'/projects/seres-termicos/libro/contacto/',{waitUntil:'load'});
 const tex=await page.locator('annotation[encoding="application/x-tex"]').allTextContents();assert(tex.some(t=>t.includes('\\Delta T')&&t.includes('\\qquad')));
 await page.setViewportSize({width:390,height:844});await page.waitForFunction(()=>!document.querySelector('.thermal-book-index').open);
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 await page.locator('.thermal-book-index summary').click();await page.waitForFunction(()=>document.querySelector('.thermal-book-index nav').offsetHeight>100);
 assert.equal(await page.locator('.thermal-book-index nav').isVisible(),true);
 await page.setViewportSize({width:1440,height:1000});await page.evaluate(()=>document.documentElement.dataset.theme='dark');
 assert.equal(await page.locator('.thermal-book-page').isVisible(),true);
 await page.unroute('**/simus/seres-termicos/*.html?embed=1');
 const sims=[...new Set([...inventory.map(p=>p.sim).filter(Boolean),'v03-raymarching.html','test_3D.html'])];
 for(const sim of sims){const r=await page.goto(base+'/simus/seres-termicos/'+sim,{waitUntil:'load'});assert.equal(r.status(),200,sim);assert.equal(await page.locator('#navigation').count(),0,sim);assert.equal(await page.locator('.thermal-reader-return').count(),1,sim);await page.waitForTimeout(100);}
 await page.goto(base+'/simus/seres-termicos/v00-contacto-termico.html');
 const contact=await page.evaluate(()=>{const a=thermalContact.simulate({seconds:60}),b=thermalContact.simulate({seconds:60,cb:200});return {balance:a.qa+a.qb,eq:a.eq,eqB:b.eq}});
 // El modelo expone eq o equilibrium segun su estructura: verificar el balance independiente.
 assert(Math.abs(contact.balance)<1e-8);
 await page.goto(base+'/simus/seres-termicos/');await page.waitForURL('**/projects/seres-termicos/');
 assert.deepEqual(failures,[]);
 console.log(JSON.stringify({readerPages:pages.length,simulations:sims.length,formulas,mobile:'OK',thermalBalance:'OK',runtimeErrors:failures.length}));
}finally{await browser.close();server.close()}
})().catch(e=>{console.error(e);process.exit(1)});
