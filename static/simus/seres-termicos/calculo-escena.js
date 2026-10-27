/* Observe an existing model. A manual advance runs one original animation
   callback; it does not replace its numerical solver or invent measurements. */
(() => {
  const fmt=v=>typeof v==='number'?new Intl.NumberFormat('es-AR',{maximumSignificantDigits:8}).format(v):String(v??'—');
  function controller(request,cancel){
    let paused=false,serial=0,clock=performance.now(),wall=clock,count=0,changed=()=>{};
    const queue=new Map();
    function execute(e,time,manual=false){
      e.native=null;if(paused&&!manual)return;
      queue.delete(e.id);
      if(!manual){clock+=Math.max(0,time-wall);wall=time;}
      e.fn(clock);count++;changed();
    }
    const schedule=e=>{e.native=request(time=>execute(e,time));};
    const api={
      request(fn){const e={id:++serial,fn,native:null};queue.set(e.id,e);if(!paused)schedule(e);return e.id;},
      cancel(id){const e=queue.get(id);if(e?.native)cancel(e.native);queue.delete(id);},
      pause(value=true){paused=value;wall=performance.now();for(const e of queue.values()){if(e.native){cancel(e.native);e.native=null;}if(!paused)schedule(e);}changed();},
      step(){api.pause();clock+=100;const pending=[...queue.values()];for(const e of pending)execute(e,clock,true);},
      onChange(fn){changed=fn;},get paused(){return paused;},get count(){return count;}
    };return api;
  }
  function mount(section,source,control){
    const labels={mass:'Masa (kg)',c:'Calor específico (J/(kg·K))',power:'Potencia (W)',t0:'Temperatura inicial (°C)',q:'Calor recibido (J)',capacity:'Capacidad térmica (J/K)',temperature:'Temperatura (°C)',delta:'Cambio de temperatura (K)',heatRate:'Potencia térmica recibida (W)',workRate:'Potencia de trabajo (W)',w:'Trabajo realizado (J)',u:'Variación de energía interna (J)',a0:'Temperatura inicial A (°C)',b0:'Temperatura inicial B (°C)',ca:'Capacidad A (J/K)',cb:'Capacidad B (J/K)',g:'Conductancia (W/K)',a:'Temperatura A (°C)',b:'Temperatura B (°C)',eq:'Temperatura de equilibrio (°C)',sa:'Cambio de entropía A (J/K)',sb:'Cambio de entropía B (J/K)',total:'Cambio de entropía total (J/K)',production:'Producción de entropía (W/K)',qa:'Calor recibido por A (J)',qb:'Calor recibido por B (J)',entropy:'Entropía (J/K)',energy:'Energía respecto de la referencia (J)',left:'Extremo izquierdo (°C)',right:'Extremo derecho (°C)',length:'Longitud (m)',k:'Conductividad (W/(m·K))',area:'Área (m²)',gradient:'Gradiente (K/m)',flux:'Densidad de flujo (W/m²)',alpha:'Difusividad (m²/s)',min:'Temperatura mínima (°C)',max:'Temperatura máxima (°C)',mean:'Temperatura media (°C)'};
    const panel=document.createElement('section');panel.className='thermal-ledger';panel.setAttribute('aria-label','Leer los valores del modelo');
    panel.innerHTML='<h3>Leer los valores del modelo</h3><p>Datos de esta ejecución. El avance manual ejecuta un cuadro del programa original: puede incluir varios subpasos, nacimientos o intercambios. No equivale necesariamente a un paso de Euler.</p><div class="thermal-ledger-controls"><button type="button" data-readout-pause>Pausar para leer</button><button type="button" data-readout-step>Avanzar un cuadro</button></div><p data-readout-status></p><div class="thermal-ledger-controls" data-coordinates></div><p data-readout-note></p><div class="thermal-ledger-scroll"><table><thead><tr><th>Magnitud</th><th>Antes del cuadro manual</th><th>Estado actual</th><th>Cambio</th></tr></thead><tbody data-readout-values></tbody></table></div><p>La tabla observa valores almacenados; no calcula el color final del píxel. En un volumen, la imagen combina múltiples vóxeles, luces y capas. Los índices son posiciones de la malla, no distancias en metros.</p>';
    section.append(panel);
    const $=s=>panel.querySelector(s),inputs=[],cell=[0,0,0];let before=null,coordinates='';
    labels.meanError='Cambio de la media (K)';labels.excessEnergy='Indicador de energía sobre la referencia';
    function read(){
      const rows=Object.fromEntries(Object.entries(source.values?.()||{}).map(([k,v])=>[source.labels?.[k]||labels[k]||k,v])),size=source.size?.();
      if(size){
        if(coordinates!==size.join(',')){
          coordinates=size.join(',');$('[data-coordinates]').replaceChildren();inputs.length=0;
          size.forEach((n,k)=>{cell[k]=Math.min(n-1,Math.max(0,cell[k]||Math.floor(n/2)));const label=document.createElement('label');label.textContent=['Columna i','Fila j','Capa k'][k];const input=document.createElement('input');input.type='number';input.min=0;input.max=n-1;input.value=cell[k];input.addEventListener('change',()=>{cell[k]=Math.max(0,Math.min(n-1,Math.round(Number(input.value)||0)));input.value=cell[k];before=null;refresh();});label.append(input);$('[data-coordinates]').append(label);inputs.push(input);});
        }
        const a=source.field(),[nx,ny=1,nz=1]=size,[x,y=0,z=0]=cell;
        const at=(i,j,k)=>a[i+nx*(j+ny*k)];
        rows['Celda ('+cell.slice(0,size.length).join(', ')+')']=at(x,y,z);
        [['i',x,nx],['j',y,ny],['k',z,nz]].slice(0,size.length).forEach(([name,v,n],axis)=>{for(const d of [-1,1])if(v+d>=0&&v+d<n){const c=[x,y,z];c[axis]+=d;rows['Vecino '+name+(d<0?' −':' +')]=at(...c);}});
      }return rows;
    }
    function refresh(){
      const rows=read(),tbody=$('[data-readout-values]');tbody.replaceChildren();
      for(const [label,value] of Object.entries(rows)){const tr=document.createElement('tr');const old=before?.[label],delta=typeof old==='number'&&typeof value==='number'?value-old:null;for(const v of [label,old??'—',value,delta??'—']){const td=document.createElement('td');td.textContent=fmt(v);tr.append(td);}tbody.append(tr);}
      $('[data-readout-pause]').textContent=control.paused?'Continuar':'Pausar para leer';
      $('[data-readout-status]').textContent=source.static?'Prueba estática: no hay evolución temporal':(control.paused?'Pausado':'En ejecución')+' · '+control.count+' cuadros observados';
      $('[data-readout-note]').textContent=source.note||'';
    }
    $('[data-readout-pause]').onclick=()=>{if(control.paused)source.enable?.();before=null;control.pause(!control.paused);refresh();};
    $('[data-readout-step]').onclick=()=>{control.pause();before=read();source.enable?.();control.step();refresh();};
    if(source.static){$('[data-readout-step]').disabled=true;$('[data-readout-pause]').disabled=true;}
    control.onChange(()=>{});setInterval(refresh,600);refresh();
    return {read,refresh,control};
  }
  window.ThermalSceneReadout={controller,mount};
  // Native scenes provide a scoped controller; standalone HTML uses this one.
  if(!document.currentScript?.hasAttribute('data-native')){
    const control=controller(window.requestAnimationFrame.bind(window),window.cancelAnimationFrame.bind(window));
    window.requestAnimationFrame=control.request;window.cancelAnimationFrame=control.cancel;
    window.addEventListener('DOMContentLoaded',()=>{if(window.thermalReadout){const drawer=document.createElement('details');drawer.className='thermal-readout-drawer';const summary=document.createElement('summary');summary.textContent='Leer valores y avanzar';drawer.append(summary);document.body.append(drawer);mount(drawer,window.thermalReadout,control);}});
  }
})();
