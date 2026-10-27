// Visual evolution and balances of the eight introductory scenes.
const {chromium}=require('playwright');
const fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert/strict');
const root=path.resolve(process.argv[2]||'public');
(async()=>{
  const server=http.createServer((req,res)=>{
    let file=path.join(root,req.url.split('?')[0]);
    if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');
    if(!fs.existsSync(file)){res.writeHead(404);return res.end();}
    res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml'})[path.extname(file)]||'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const base='http://127.0.0.1:'+server.address().port;
  const browser=await chromium.launch({channel:'chrome',headless:true});
  try{
    const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    await page.route('**/cloudflareinsights.com/**',route=>route.fulfill({status:204,body:''}));
    await page.clock.install();
    const snapshot=host=>host.evaluate(el=>el.sceneAPI.thermalCourse?.snapshot()||el.sceneAPI.thermalContact.snapshot());
    const slugs=['contacto','calor-capacidad','primera-ley','entropia','conduccion','difusion-linea','difusion-superficie','difusion-volumen'];
    for(const slug of slugs){
      await page.goto(base+'/projects/simus/bestiario/'+slug+'/');
      const host=page.locator('.sim-native-host');
      await host.evaluate(el=>el.scrollIntoView({block:'start'}));
      await page.clock.runFor(100);
      const before=await snapshot(host),canvas=host.locator(slug==='contacto'?'#transferScene':'#scene');
      const initial=await canvas.screenshot();
      await host.locator(slug==='contacto'?'#contact':'#start').click();
      await page.clock.runFor(8000);
      const after=await snapshot(host);
      assert(after.time>5,slug+' advances');
      if(after.field){
        assert.equal(before.params.pattern,'split');
        assert(Math.abs(before.current.mean-50)<1e-9,slug+' initial two halves');
        assert(after.field.every(Number.isFinite));
        assert(Math.max(...after.field)<Math.max(...before.field),slug+' spreads');
        assert(Math.abs(after.current.meanError)<1e-5,slug+' conservation');
      }
      if(after.id===1)assert(Math.abs(after.current.q-after.params.power*after.time)<1e-7);
      if(after.id===2)assert(Math.abs(after.current.u-after.current.q+after.current.w)<1e-7);
      if(after.balance!==undefined)assert(Math.abs(after.balance)<1e-8);
      assert(!initial.equals(await canvas.screenshot()),slug+' visible evolution');
      await page.setViewportSize({width:390,height:844});
      await page.clock.runFor(120);
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),slug+' mobile overflow');
      await page.setViewportSize({width:1440,height:1000});
      if(after.field){
        await host.locator('#reset').click();
        await host.locator('#initial-pattern').selectOption('hot');
        const hot=await snapshot(host);
        assert(hot.current.mean>20&&hot.current.mean<50,slug+' original initial condition preserved');
        await host.locator('#start').click();await page.clock.runFor(2000);
        assert(Math.abs((await snapshot(host)).current.meanError)<1e-5);
      }
    }
    assert.deepEqual(errors,[]);
    console.log(JSON.stringify({scenes:slugs.length,initialConditions:2,visibleEvolution:'OK',energyBalances:'OK',mobile:'OK',runtimeErrors:0}));
  }finally{await browser.close();server.close();}
})().catch(error=>{console.error(error);process.exit(1);});
