const {chromium}=require('playwright'),fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert/strict');
const root=path.resolve(process.argv[2]);
(async()=>{
 const server=http.createServer((req,res)=>{let f=path.join(root,decodeURIComponent(req.url.split('?')[0]));if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');if(!fs.existsSync(f)){res.writeHead(404);return res.end();}res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.woff2':'font/woff2','.svg':'image/svg+xml'})[path.extname(f)]||'application/octet-stream');fs.createReadStream(f).pipe(res);});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=process.env.PROJECTS_BASE_URL||'http://127.0.0.1:'+server.address().port,browser=await chromium.launch({channel:'chrome',headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1360,height:900}}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route('**/cloudflareinsights.com/**',r=>r.fulfill({status:204,body:''}));
  const expected=['aq-saladillo','ema-saladillo','wq-saladillo','eureka-ai','dvba-gis','simus'];
  for(const lang of ['','en/','zh/']){
   await page.goto(base+'/'+lang+'projects/');const cards=page.locator('article.post-entry');assert.equal(await cards.count(),6,lang+' visible project count');
   const links=await cards.locator('.entry-link').evaluateAll(es=>es.map(e=>new URL(e.href).pathname.replace(/^\/(en|zh)\//,'/').split('/').filter(Boolean).at(-1)));assert.deepEqual(links,expected,lang+' project order');
   for(const card of await cards.all())assert(/2026.*Luciano Lamaita/.test(await card.locator('.entry-footer').innerText()),lang+' date and author');
   await page.goto(base+'/'+lang+'projects/simus/');assert.equal(await page.locator('.post-content h2').count(),1,lang+' one heading');assert.equal(await page.locator('.post-content h2 a:not(.anchor)').getAttribute('href'),'/'+lang+'projects/simus/bestiario/');
   for(const slug of ['wq-saladillo','aq-saladillo','seres-placeholder']){
    const target=slug==='seres-placeholder'?'simus/bestiario':slug;await page.goto(base+'/'+lang+'projects/'+target+'/');assert.equal(await page.locator('.i18n_list').count(),0,lang+' no duplicate translation menu');assert.equal(await page.locator('.lang-menu a').count(),3,lang+' header language switcher');assert(/2026.*Luciano Lamaita/.test(await page.locator('.post-meta').first().innerText()),lang+' page metadata');
   }
   await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),lang+' mobile layout');await page.setViewportSize({width:1360,height:900});
   if(lang)for(const sim of ['v06-ciclovida','v07-3d','v08-espaciotiempo']){await page.goto(base+'/'+lang+'projects/simus/bestiario/'+sim+'/');await page.waitForFunction(()=>typeof window.katex==='object');assert.equal(await page.locator('.katex-error').count(),0,lang+sim+' formulas');assert.equal(await page.locator('.i18n_list').count(),0);}
  }
  await page.goto(base+'/projects/simus/bestiario/versiones/');assert(/2026.*Luciano Lamaita/.test(await page.locator('.post-meta').innerText()),'narrative metadata');assert.deepEqual(errors,[]);
  console.log(JSON.stringify({languages:3,projectOrder:'OK',dateAndAuthor:'OK',singleLanguageMenu:'OK',simulationIndex:'OK',mobile:'OK',runtimeErrors:0}));
 }finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);process.exit(1)});
