// The explanatory table must agree with the actual stored step and image.
const {chromium}=require('playwright');
const fs=require('fs'),http=require('http'),path=require('path'),assert=require('assert/strict');
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
  const base=process.env.THERMAL_BASE_URL||'http://127.0.0.1:'+server.address().port;
  const browser=await chromium.launch({channel:'chrome',headless:true});
  const cases=[['campo-fuentes','v01-campo.html'],['gradiente','v02-gradiente.html'],['reaccion-difusion','v04-grayscott.html'],['ondas','v05-fhn.html']];
  try{
    const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    await page.route('**/cloudflareinsights.com/**',route=>route.fulfill({status:204,body:''}));
    for(const [slug,file] of cases){
      await page.goto(base+'/projects/seres-termicos/libro/'+slug+'/');
      const host=page.locator('.sim-native-host');
      await host.evaluate(el=>el.scrollIntoView({block:'start'}));
      await page.waitForFunction(()=>document.querySelector('.sim-native-host').sceneAPI?.thermalEvidence?.getTrace());
      await page.locator('[data-pause]').click();
      const before=await host.evaluate(el=>el.sceneAPI.thermalEvidence.getTrace().step);
      await page.locator('[data-step]').click();
      const trace=await host.evaluate(el=>el.sceneAPI.thermalEvidence.getTrace());
      assert.equal(trace.step,before+1,slug+' exactly one step');
      assert.equal(await host.evaluate(el=>el.sceneAPI.thermalEvidence.playing),false);
      for(const residual of Object.values(trace.residual))assert(Math.abs(residual)<1e-7,slug+' reconstructed value');
      if(trace.sourceInput){
        const predicted=trace.sources.reduce((value,s)=>Math.fround(value+s.value),trace.sourceInput.values.theta.center);
        assert.equal(predicted,trace.before.values.theta.center,slug+' gaussian injection');
      }
      if(slug!=='gradiente'){
        const pixel=await host.evaluate((el,t)=>{const canvas=el.shadowRoot.querySelector('#c'),scale=t.kind==='field'?4:1;return Array.from(canvas.getContext('2d').getImageData(t.after.x*scale,t.after.y*scale,1,1).data).slice(0,3);},trace);
        assert.deepEqual(pixel,trace.rgb,slug+' exact displayed RGB');
      }
      const unchanged=await host.evaluate(el=>{
        const api=el.sceneAPI.thermalEvidence,canvas=el.shadowRoot.querySelector('#c'),before=canvas.toDataURL();
        api.setCell(1,1);return canvas.toDataURL()===before;
      });
      assert(unchanged,slug+' selecting a cell only observes');
      await page.locator('[data-step]').click();
      for(const width of [320,390,1440]){
        await page.setViewportSize({width,height:900});
        assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),slug+' width '+width);
      }
      await page.locator('[data-sim-expand]').click();
      await page.locator('[data-step]').click();
      assert.equal(await page.locator('dialog[open] .thermal-ledger').count(),1,slug+' expanded ledger');
      await page.keyboard.press('Escape');
      await page.locator('.thermal-book-content .thermal-ledger').waitFor();
      assert.equal(await page.locator('.katex-error').count(),0,slug+' equations');
      await page.goto(base+'/simus/seres-termicos/'+file);
      const standalone=await page.evaluate(()=>{const api=window.thermalEvidence;api.setPlaying(false);const before=api.getTrace()?.step||0;api.step();return {before,trace:api.getTrace()};});
      assert.equal(standalone.trace.step,standalone.before+1,slug+' standalone');
      for(const residual of Object.values(standalone.trace.residual))assert(Math.abs(residual)<1e-7);
    }
    assert.deepEqual(errors,[]);
    console.log(JSON.stringify({models:cases.length,singleStep:'OK',numericalReconstruction:'OK',pixelRGB:'OK',cellSelection:'read-only',mobile:'OK',expanded:'OK',standalone:'OK',runtimeErrors:0}));
  }finally{await browser.close();server.close();}
})().catch(error=>{console.error(error);process.exit(1);});
