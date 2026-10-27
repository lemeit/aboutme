/* Observe the real buffers before and after a numerical step; never feed the
   explanatory calculation back into the simulation. */
(() => {
  const number=(v,digits=8)=>typeof v!=='number'?'—':v!==0&&Math.abs(v)<1e-5?v.toExponential(5).replace('.',','):new Intl.NumberFormat('es-AR',{maximumSignificantDigits:digits}).format(v);
  function create(config){
    let cell=null,pending=null,last=null,sourceInput=null,stepNumber=0,history=[],sources=[];
    const api={playing:true};
    const read=()=>{
      const fields=config.fields();
      if(!cell){const p=config.probe?.(fields)||[Math.floor(config.nx/2),Math.floor(config.ny/2)];setCell(...p);}
      const [x,y]=cell,at=(a,i,j)=>a[((j+config.ny)%config.ny)*config.nx+(i+config.nx)%config.nx],values={};
      for(const [name,a] of Object.entries(fields)){
        const center=at(a,x,y),north=at(a,x,y-1),south=at(a,x,y+1),west=at(a,x-1,y),east=at(a,x+1,y);
        values[name]={center,north,south,west,east,lap:north+south+west+east-4*center,grid:[-1,0,1].flatMap(dy=>[-1,0,1].map(dx=>at(a,x+dx,y+dy)))};
      }
      return {x,y,values};
    };
    function setCell(x,y){const lo=config.periodic?0:1;cell=[Math.max(lo,Math.min(config.nx-1-lo,Math.round(x))),Math.max(lo,Math.min(config.ny-1-lo,Math.round(y)))];pending=last=sourceInput=null;history=[];}
    api.start=()=>{sourceInput=read();sources=[];};
    api.before=params=>{if(config.kind==='field')sources=[];pending={before:read(),params:{...params},sourceInput,sources};sourceInput=null;};
    api.source=({x,y,amplitude,sigma,cutoff,rounded})=>{
      if(!pending&&!sourceInput)return;
      const [i,j]=cell,cx=rounded?Math.round(x):x|0,cy=rounded?Math.round(y):y|0,r=Math.ceil(sigma*cutoff);
      const included=i>=Math.max(1,cx-r)&&i<Math.min(config.nx-1,cx+r+1)&&j>=Math.max(1,cy-r)&&j<Math.min(config.ny-1,cy+r+1);
      const d2=(i-x)*(i-x)+(j-y)*(j-y),value=included?amplitude*Math.exp(-d2*(1/(2*sigma*sigma))):0;
      sources.push({x,y,amplitude,sigma,value});
    };
    api.stage=()=>{if(pending)pending.stage=read();};
    api.after=()=>{
      if(!pending)return;
      const after=read(),p=pending.params,b=pending.before.values,rows=[],predicted={};
      const row=(label,values)=>rows.push({label,values});
      row(config.kind==='gradient'?'θ* (entrada de la difusión)':'Valor antes del paso',Object.fromEntries(Object.entries(b).map(([k,v])=>[k,v.center])));
      row('Laplaciano discreto',Object.fromEntries(Object.entries(b).map(([k,v])=>[k,v.lap])));
      if(config.kind==='field'){
        const t=b.theta.center,diff=p.r*b.theta.lap,relax=(p.damp-1)*(t+diff),effectiveSource=after.values.theta.center-pending.stage.values.theta.center;
        row('Difusión: r · L',{theta:diff});row('Relajación: (d − 1)(θ + rL)',{theta:relax});row('Después de difusión y relajación (Float32)',{theta:pending.stage.values.theta.center});row('Suma de gaussianas antes del redondeo',{theta:pending.sources.reduce((sum,s)=>sum+s.value,0)});row('Aporte efectivo guardado de las fuentes',{theta:effectiveSource});
        predicted.theta=pending.sources.reduce((value,s)=>Math.fround(value+s.value),Math.fround((t+diff)*p.damp));
      }else if(config.kind==='gradient'){
        const t=b.theta.center,diff=p.r*b.theta.lap,relax=-p.lambda*t;
        if(pending.sourceInput){row('Campo antes de inyectar',{theta:pending.sourceInput.values.theta.center});row('Aporte previo de las fuentes',{theta:t-pending.sourceInput.values.theta.center});row('θ* reconstruido desde las fuentes',{theta:pending.sources.reduce((value,s)=>Math.fround(value+s.value),pending.sourceInput.values.theta.center)});}
        row('Difusión: r · L',{theta:diff});row('Relajación: −λθ*',{theta:relax});row('Gradiente X del resultado',{theta:(after.values.theta.east-after.values.theta.west)/2});row('Gradiente Y del resultado',{theta:(after.values.theta.south-after.values.theta.north)/2});predicted.theta=Math.fround(t+diff+relax);
      }else{
        const u=b.u.center,v=b.v.center;
        if(config.kind==='gray'){
          const reaction=u*v*v,du=p.du*b.u.lap-reaction+p.f*(1-u),dv=p.dv*b.v.lap+reaction-(p.f+p.k)*v;
          row('Difusión',{u:p.du*b.u.lap,v:p.dv*b.v.lap});row('Reacción: ∓uv²',{u:-reaction,v:reaction});row('Alimentación / retirada',{u:p.f*(1-u),v:-(p.f+p.k)*v});row('Incremento Δt · derivada',{u:p.dt*du,v:p.dt*dv});row('Resultado sin recortar',{u:u+p.dt*du,v:v+p.dt*dv});
          predicted.u=Math.fround(Math.max(0,Math.min(1,u+p.dt*du)));predicted.v=Math.fround(Math.max(0,Math.min(1,v+p.dt*dv)));
        }else{
          const diffusion=p.du*b.u.lap,activation=u-u*u*u/3-v,recovery=p.eps*(u+p.beta-p.gamma*v);
          const du=diffusion+u-(u*u*u)/3-v;
          row('Difusión',{u:diffusion,v:0});row('Activación / recuperación',{u:activation,v:recovery});row('Incremento Δt · derivada',{u:p.dt*du,v:p.dt*recovery});predicted.u=Math.fround(u+p.dt*du);predicted.v=Math.fround(v+p.dt*recovery);
        }
      }
      const centers=Object.fromEntries(Object.entries(after.values).map(([k,v])=>[k,v.center]));
      row('Resultado reconstruido (Float32)',predicted);row('Resultado guardado por el motor',centers);
      const residual=Object.fromEntries(Object.keys(predicted).map(k=>[k,centers[k]-predicted[k]]));row('Diferencia motor − reconstrucción',residual);
      const rgb=Array.from(new Uint8ClampedArray(config.color(centers)));
      last={kind:config.kind,step:++stepNumber,...pending,after,rows,predicted,residual,rgb,colorInput:config.colorInput(centers),display:config.display};
      history.push({step:stepNumber,values:centers,rgb});history=history.slice(-8);pending=null;
    };
    api.reset=()=>{cell=pending=last=sourceInput=null;history=[];sources=[];stepNumber=0;};
    api.setCell=setCell;api.getTrace=()=>last;api.getHistory=()=>history.slice();api.getCell=()=>{if(!cell)read();return cell.slice();};api.getConfig=()=>({nx:config.nx,ny:config.ny,periodic:config.periodic,kind:config.kind});
    api.setPlaying=value=>{api.playing=Boolean(value);};api.step=()=>{api.playing=false;config.advance();};
    return api;
  }
  function mount(section,api){
    if(section.querySelector('.thermal-ledger'))return;
    const root=document.createElement('section');root.className='thermal-ledger';root.setAttribute('aria-label','Del cálculo al color');
    root.innerHTML='<h3>Del cálculo al color</h3><p>Los valores se leen de la celda elegida antes y después de una actualización real. Pausá para relacionar la tabla con la imagen.</p><div class="thermal-ledger-controls"><button type="button" data-pause>Pausar para leer</button><button type="button" data-step>Avanzar un paso</button><label>Columna i <input type="number" data-x></label><label>Fila j <input type="number" data-y></label><button type="button" data-cell>Examinar celda</button></div><p data-position class="thermal-ledger-status" aria-live="polite"></p><div class="thermal-ledger-grids"><div><h4>Vecinos antes del paso</h4><div data-neighbors></div></div><div><h4>Color del resultado</h4><div class="thermal-ledger-color"><span data-swatch role="img"></span><span data-color></span></div><p data-mapping></p></div></div><h4>Una actualización, término por término</h4><div class="thermal-ledger-scroll"><table data-terms></table></div><p>Los valores se redondean para leerlos. El resultado se compara con el número realmente guardado en Float32; en Gray–Scott también se muestra el recorte a [0, 1].</p><details><summary>Últimos ocho pasos de esta celda</summary><div class="thermal-ledger-scroll"><table data-history></table></div></details>';
    section.append(root);
    const host=section.querySelector('.sim-native-host'),sceneRoot=host.shadowRoot.querySelector('.sim-root'),canvas=host.shadowRoot.querySelector('#c');
    const marker=document.createElement('span');marker.setAttribute('aria-hidden','true');marker.style.cssText='position:absolute;width:12px;height:12px;box-sizing:border-box;border:2px solid white;outline:1px solid black;border-radius:50%;pointer-events:none;z-index:20;transform:translate(-50%,-50%)';sceneRoot.append(marker);
    const markerNote=document.createElement('p');markerNote.textContent='El círculo señala la celda examinada en la imagen. Cambiar la celda observa otro punto; no modifica el modelo.';root.querySelector('[data-position]').after(markerNote);
    const sourceDetails=document.createElement('details');sourceDetails.innerHTML='<summary>Fuentes evaluadas en este paso</summary><div class="thermal-ledger-scroll"><table data-sources></table></div>';root.append(sourceDetails);
    const paramsLine=document.createElement('p');paramsLine.className='thermal-ledger-status';root.querySelector('[data-position]').after(paramsLine);
    const $=s=>root.querySelector(s),cfg=api.getConfig(),[x,y]=api.getCell(),lo=cfg.periodic?0:1;
    function locate(){const [x,y]=api.getCell(),r=canvas.getBoundingClientRect(),b=sceneRoot.getBoundingClientRect();marker.style.left=(r.left-b.left+(x+.5)/cfg.nx*r.width)+'px';marker.style.top=(r.top-b.top+(y+.5)/cfg.ny*r.height)+'px';}
    new ResizeObserver(locate).observe(canvas);locate();
    for(const [sel,value,max] of [['[data-x]',x,cfg.nx-1-lo],['[data-y]',y,cfg.ny-1-lo]]){const input=$(sel);input.value=value;input.min=lo;input.max=max;input.step=1;}
    function table(target,headers,rows){const t=$(target);t.replaceChildren();const head=document.createElement('thead'),tr=document.createElement('tr');for(const h of headers){const th=document.createElement('th');th.scope='col';th.textContent=h;tr.append(th);}head.append(tr);t.append(head);const body=document.createElement('tbody');for(const values of rows){const row=document.createElement('tr');values.forEach((value,index)=>{const el=document.createElement(index===0?'th':'td');if(index===0)el.scope='row';el.textContent=value;row.append(el);});body.append(row);}t.append(body);}
    let shownTrace,shownPlaying,shownCell=x+','+y;
    function refresh(){
      locate();const activeCell=api.getCell(),activeKey=activeCell.join(',');if(activeKey!==shownCell){$('[data-x]').value=activeCell[0];$('[data-y]').value=activeCell[1];shownCell=activeKey;}
      $('[data-pause]').textContent=api.playing?'Pausar para leer':'Continuar';
      const trace=api.getTrace();if(trace===shownTrace&&api.playing===shownPlaying)return;shownTrace=trace;shownPlaying=api.playing;
      if(!trace){sourceDetails.hidden=true;paramsLine.textContent='';$('[data-position]').textContent='Avanzá un paso para registrar una actualización de esta celda.';$('[data-neighbors]').replaceChildren();$('[data-terms]').replaceChildren();$('[data-color]').textContent='Sin actualización registrada';$('[data-swatch]').style.background='transparent';$('[data-mapping]').textContent='';$('[data-history]').replaceChildren();return;}
      const names=Object.keys(trace.before.values),label=k=>k==='theta'?'θ':k;
      locate();
      const cellKey=trace.before.x+','+trace.before.y;if(cellKey!==shownCell){$('[data-x]').value=trace.before.x;$('[data-y]').value=trace.before.y;shownCell=cellKey;}
      sourceDetails.hidden=!trace.sources.length;
      if(trace.sources.length)table('[data-sources]',['Fuente','x','y','Amplitud usada','σ','Aporte en la celda'],trace.sources.map((s,i)=>[i+1,number(s.x,6),number(s.y,6),number(s.amplitude,6),number(s.sigma,6),number(s.value)]));
      $('[data-position]').textContent='Celda ('+trace.before.x+', '+trace.before.y+') · paso '+trace.step+' del cálculo · '+(api.playing?'tabla en vivo':'pausado');
      paramsLine.textContent='Parámetros usados: '+Object.entries(trace.params).map(([key,value])=>key+' = '+number(value)).join(' · ');
      const values=trace.before.values;
      const neighbors=Array.from({length:3},(_,r)=>[String((trace.before.y+r-1+cfg.ny)%cfg.ny),...Array.from({length:3},(_,c)=>names.map(k=>label(k)+' = '+number(values[k].grid[r*3+c],5)).join(' · '))]);
      table('[data-neighbors]',['j / i',...[-1,0,1].map(dx=>(trace.before.x+dx+cfg.nx)%cfg.nx)],neighbors);
      table('[data-terms]',['Término',...names.map(label)],trace.rows.map(row=>[row.label,...names.map(k=>number(row.values[k]))]));
      $('[data-swatch]').style.background='rgb('+trace.rgb.join(',')+')';$('[data-swatch]').setAttribute('aria-label','Color RGB '+trace.rgb.join(', '));$('[data-color]').textContent='RGB ('+trace.rgb.join(', ')+')';$('[data-mapping]').textContent=trace.display+' Entrada del mapa: '+number(trace.colorInput)+'.'+(trace.kind==='gradient'?' La muestra es del campo base, antes de superponer los agentes.':'');
      table('[data-history]',['Paso',...names.map(label),'RGB'],api.getHistory().map(row=>[row.step,...names.map(k=>number(row.values[k],6)),row.rgb.join(', ')]));
    }
    $('[data-pause]').addEventListener('click',()=>{api.setPlaying(!api.playing);refresh();});
    $('[data-step]').addEventListener('click',()=>{api.step();refresh();});
    $('[data-cell]').addEventListener('click',()=>{const x=Number($('[data-x]').value),y=Number($('[data-y]').value);if(!Number.isFinite(x)||!Number.isFinite(y))return;api.setCell(x,y);const cell=api.getCell();$('[data-x]').value=cell[0];$('[data-y]').value=cell[1];locate();refresh();});
    refresh();const timer=setInterval(()=>{if(!section.isConnected){clearInterval(timer);return;}refresh();},400);
  }
  window.ThermalFieldLedger={create,mount};
})();
