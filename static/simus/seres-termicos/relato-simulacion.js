/* Native scenes share the document, with scoped styles and engine DOM queries.
   The source HTML remains the single source for the standalone version. */
(() => {
  if (window.mountThermalScene) return;
  window.mountThermalScene = (id, run) => {
    const host = document.getElementById(id), section = host.closest('.sim-native');
    const shadow = host.attachShadow({mode: 'open'});
    shadow.append(host.querySelector('template').content.cloneNode(true));
    const root = shadow.querySelector('.sim-root'), body = shadow.querySelector('.sim-body');
    let fixedScene = false;
    shadow.querySelectorAll('style').forEach(style => {
      fixedScene ||= /position\s*:\s*fixed/.test(style.textContent);
      style.textContent = style.textContent
        .replace(/:root\b/g, '.sim-root').replace(/(?<![.\w#-])body\b/g, '.sim-body')
        .replace(/(?<![.\w#-])html\b/g, '.sim-root')
        .replace(/position\s*:\s*fixed/g, 'position:absolute')
        .replace(/(\d+(?:\.\d+)?)vh\b/g, 'calc(var(--scene-height) * $1 / 100)')
        .replace(/(\d+(?:\.\d+)?)vw\b/g, 'calc(var(--scene-width) * $1 / 100)');
    });
    root.classList.toggle('scene-fixed', fixedScene);
    const style = document.createElement('style');
    style.textContent = `
      :host{display:block;min-width:0;container-type:inline-size}
      .sim-root{position:relative;isolation:isolate;min-width:0;max-width:100%}
      .sim-body{position:relative;min-height:0!important;height:auto;overflow:visible!important}
      .scene-fixed .sim-body{min-height:var(--scene-height)!important}
      .sim-body>main{padding:0;max-width:none;margin:0}
      .sim-body:has(>main){display:block!important}
      .sim-body>main:has(>#stage){height:auto;min-height:0;align-items:start}
      #stage{height:var(--scene-height)!important;min-height:480px!important;position:sticky;top:var(--site-header-height,0px)}
      #stage>#scene{height:100%;min-height:0}
      .sim-body>header,.sim-body>main>header,.sim-body>footer,
      .sim-body>main>footer,.book-study-links,.story-links,.route,
      .sim-body>main>.intro,.sim-body>.title,.sim-body>.quote{display:none!important}
      h1{font-size:1.1rem!important}
      .anim{opacity:1!important;animation:none!important}
      canvas{max-width:100%}
      fieldset{min-inline-size:0;max-width:100%}
      select{min-width:0;max-width:100%;box-sizing:border-box}
      input{min-width:0;max-width:100%;box-sizing:border-box}
      fieldset select{display:block;width:100%}
      .sim-body>main>.layout{grid-template-columns:minmax(0,1fr)}
      .sim-body>main>.layout>aside{min-width:0}
      @container(min-width:760px){.sim-body>main>.layout{grid-template-columns:minmax(0,1fr) 260px}}
      @container(max-width:760px){.sim-body>main:has(>#stage){grid-template-columns:1fr}#stage{position:relative}}
      @container(max-width:600px){.below,.metrics{grid-template-columns:1fr!important}.card{padding:12px!important}#cronica{display:none}#panel{max-width:calc(100% - 24px);left:12px;right:12px;bottom:12px}#info{max-width:55%;font-size:12px}#stats{font-size:11px;right:8px}}
    `;
    shadow.append(style);
    // Canvas clicks must focus the scene so its keyboard shortcuts stay local.
    shadow.querySelectorAll('canvas').forEach(canvas => {
      if(!canvas.hasAttribute('tabindex'))canvas.tabIndex=0;
      canvas.addEventListener('pointerdown',()=>canvas.focus({preventScroll:true}));
    });
    const resizeListeners = new Set();
    let sceneWidth=Math.max(1,host.clientWidth);
    const viewport = {get width(){return host.clientWidth||sceneWidth;},get height(){return Math.max(480, Math.min(720, innerHeight * .8));},get left(){return host.getBoundingClientRect().left;},get top(){return host.getBoundingClientRect().top;}};
    function resize(){if(host.clientWidth<=0)return;sceneWidth=host.clientWidth;root.style.setProperty('--scene-width',sceneWidth+'px');root.style.setProperty('--scene-height',viewport.height+'px');resizeListeners.forEach(fn=>fn(new Event('resize')));}
    resize();new ResizeObserver(resize).observe(host);
    const localDocument = {
      body, documentElement: root, get hidden(){return document.hidden;},
      getElementById: name => shadow.getElementById(name),
      querySelector: selector => shadow.querySelector(selector),
      querySelectorAll: selector => shadow.querySelectorAll(selector),
      createElement: document.createElement.bind(document),
      createElementNS: document.createElementNS.bind(document),
      addEventListener: (type,fn,opts) => type==='visibilitychange' ? document.addEventListener(type,fn,opts) : shadow.addEventListener(type,fn,opts)
    };
    const listen = (type,fn,opts) => {
      if(type==='resize')resizeListeners.add(fn);
      else if(type==='keydown'||type==='keyup')shadow.addEventListener(type,fn,opts);
      else window.addEventListener(type,fn,opts);
    };
    const localWindow = {addEventListener:listen};
    host.sceneAPI = localWindow;
    let visible = true, serial = 0;
    const frames = new Map();
    function schedule(entry){entry.native=requestAnimationFrame(time=>{entry.native=null;if(!visible)return;frames.delete(entry.id);entry.fn(time);});}
    const requestFrame = fn => {const entry={id:++serial,fn,native:null};frames.set(entry.id,entry);if(visible)schedule(entry);return entry.id;};
    const cancelFrame = id => {const e=frames.get(id);if(e?.native)cancelAnimationFrame(e.native);frames.delete(id);};
    const readoutControl=section.dataset.readout==='true'?window.ThermalSceneReadout?.controller(requestFrame,cancelFrame):null;
    new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)frames.forEach(e=>{if(!e.native)schedule(e);});},{rootMargin:'100px'}).observe(section);
    try {
      run(localDocument,localWindow,listen,readoutControl?.request||requestFrame,readoutControl?.cancel||cancelFrame,viewport,{search:''});
      if(localWindow.thermalEvidence&&window.ThermalFieldLedger)window.ThermalFieldLedger.mount(section,localWindow.thermalEvidence);
      if(localWindow.thermalReadout&&readoutControl)localWindow.readoutPanel=window.ThermalSceneReadout.mount(section,localWindow.thermalReadout,readoutControl);
      host.dataset.ready='true';
    } catch(error) {
      host.dataset.ready='error';console.error('Simulation '+id,error);
      const p=document.createElement('p');p.textContent='No se pudo iniciar esta experiencia. Podés abrirla por separado con el enlace de arriba.';section.append(p);
    }
    function theme(){root.dataset.theme=document.documentElement.dataset.theme||'light';resize();}
    theme();new MutationObserver(theme).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
    const expand=section.querySelector('[data-sim-expand]');
    const dialog=document.createElement('dialog');
    dialog.className='sim-native-dialog';dialog.setAttribute('aria-label',section.getAttribute('aria-label'));
    document.body.append(dialog);
    let placeholder=null;
    function restore(){if(!placeholder)return;placeholder.replaceWith(section);placeholder=null;expand.setAttribute('aria-expanded','false');expand.textContent='Ampliar simulación';resize();expand.focus({preventScroll:true});}
    dialog.addEventListener('close',restore);
    expand.addEventListener('click',()=>{
      if(dialog.open){dialog.close();return;}
      placeholder=document.createComment('simulation position');section.replaceWith(placeholder);dialog.append(section);dialog.showModal();
      expand.setAttribute('aria-expanded','true');expand.textContent='Volver al relato';resize();
    });
  };
})();
