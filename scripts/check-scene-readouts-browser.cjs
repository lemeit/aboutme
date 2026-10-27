const {chromium}=require('playwright'),fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert/strict');
const root=path.resolve(process.argv[2]),source=path.resolve(__dirname,'..');
(async()=>{
 const server=http.createServer((req,res)=>{let f=path.join(root,decodeURIComponent(req.url.split('?')[0]));if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');if(!fs.existsSync(f)){res.writeHead(404);return res.end();}res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml'})[path.extname(f)]||'application/octet-stream');fs.createReadStream(f).pipe(res);});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=process.env.THERMAL_BASE_URL||'http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({channel:'chrome',headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']}),page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));await page.route('**/cloudflareinsights.com/**',r=>r.fulfill({status:204,body:''}));
 try{
  const inventory=JSON.parse(fs.readFileSync(path.join(source,'data/seres_book_chapters.json'),'utf8')),slugs=inventory.filter(x=>x.sim&&fs.readFileSync(path.join(source,'static/simus/seres-termicos',x.sim),'utf8').includes('window.thermalReadout'));
  slugs.push({url:'/projects/simus/bestiario/visualizacion/'});let native=0;
  for(const entry of slugs){
   await page.goto(base+entry.url);const hosts=await page.locator('.sim-native[data-readout] .sim-native-host').all();
   for(const host of hosts){
    await host.evaluate(e=>e.scrollIntoView({block:'start'}));await page.waitForTimeout(100);const section=host.locator('..'),panel=section.locator('.thermal-ledger');assert.equal(await panel.count(),1,entry.url+' mounted table');
    const api=()=>host.evaluate(e=>e.sceneAPI.readoutPanel.control.count);if(await panel.locator('[data-readout-pause]').isEnabled()){await panel.locator('[data-readout-pause]').click();const frozen=await api();await page.waitForTimeout(180);assert.equal(await api(),frozen,entry.url+' paused');
    await panel.locator('[data-readout-step]').click();assert((await api())>frozen,entry.url+' manual callback');}
    assert(await panel.locator('tbody tr').count()>0,entry.url+' actual values');assert(!/NaN|undefined|Infinity/.test(await panel.innerText()),entry.url+' finite values');
    const coordinates=panel.locator('input');if(await coordinates.count()){const first=coordinates.first();await first.fill('1');await first.press('Tab');assert.equal(await first.inputValue(),'1');}
    await page.setViewportSize({width:320,height:700});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),entry.url+' mobile width');await page.setViewportSize({width:1440,height:1000});native++;
   }
  }
  const files=fs.readdirSync(path.join(source,'static/simus/seres-termicos')).filter(x=>x.endsWith('.html')&&fs.readFileSync(path.join(source,'static/simus/seres-termicos',x),'utf8').includes('window.thermalReadout'));
  for(const file of files){await page.goto(base+'/simus/seres-termicos/'+file);const drawer=page.locator('.thermal-readout-drawer');assert.equal(await drawer.count(),1,file);await drawer.locator('summary').click();assert(await drawer.locator('table').isVisible(),file+' table visible');}
  assert.deepEqual(errors,[]);console.log(JSON.stringify({nativeScenes:native,standalone:files.length,pause:'OK',manualFrame:'OK',tables:'OK',mobile:'OK',runtimeErrors:0}));
 }finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);process.exit(1)});
