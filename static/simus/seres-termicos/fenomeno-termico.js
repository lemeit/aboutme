/* Read-only presentation of the state calculated by the introductory models.
   Moving chevrons indicate transfer direction, never microscopic particles. */
(() => {
  const fmt=(x,n=1)=>new Intl.NumberFormat('es-AR',{maximumFractionDigits:n}).format(Math.abs(x)<1e-9?0:x);
  const color=t=>{const f=Math.max(0,Math.min(1,(t-20)/60));return `rgb(${Math.round(255*f)},${Math.round(150-63*f)},${Math.round(136-102*f)})`;};
  function draw({canvas,id,dimension=0,state,params={},value,slices=[0,0,0]}){
    const width=700,height=id===0?180:dimension===3?610:dimension?470:410;
    const d=Math.min(devicePixelRatio||1,2),c=canvas.getContext('2d');
    canvas.width=width*d;canvas.height=height*d;canvas.style.aspectRatio=width+'/'+height;canvas.style.width='100%';canvas.style.display='block';
    c.setTransform(d,0,0,d,0,0);
    const css=getComputedStyle(canvas),ink=css.getPropertyValue('--text').trim()||'#2A211A',muted=css.getPropertyValue('--dim').trim()||'#6B5C4E',soft=css.getPropertyValue('--soft').trim()||'#F0EBE2',accent=css.getPropertyValue('--a').trim()||'#9B3D00',other=css.getPropertyValue('--b').trim()||'#007A70';
    const minFont=11*700/Math.max(280,canvas.clientWidth);
    const text=(label,x,y,size=18,fill=ink)=>{c.font=Math.max(size,minFont)+'px system-ui';c.textAlign='center';c.fillStyle=fill;if(size<=19&&c.measureText(label).width>660)return;c.fillText(label,x,y);};
    function arrow(x1,x2,y,power,scale=100){
      if(Math.abs(power)<1e-9){c.strokeStyle=muted;c.lineWidth=1;c.beginPath();c.moveTo(x1,y);c.lineTo(x2,y);c.stroke();return;}
      const direction=Math.sign(power),left=Math.min(x1,x2),span=Math.abs(x2-x1),phase=matchMedia('(prefers-reduced-motion: reduce)').matches?0:(state.time*.45)%1;
      c.strokeStyle=accent;c.globalAlpha=.35+.65*Math.min(1,Math.abs(power)/scale);c.lineWidth=3;
      for(let i=0;i<5;i++){const fraction=(i/5+phase/5)%1,x=left+(direction>0?fraction:1-fraction)*span;c.beginPath();c.moveTo(x-direction*8,y-7);c.lineTo(x,y);c.lineTo(x-direction*8,y+7);c.stroke();}c.globalAlpha=1;
    }
    function thermometer(x,y,t,label){
      c.fillStyle=soft;c.fillRect(x-12,y,24,140);c.fillStyle=color(t);c.fillRect(x-12,y+140*(1-Math.max(0,Math.min(100,t))/100),24,140*Math.max(0,Math.min(100,t))/100);
      c.strokeStyle=muted;c.lineWidth=1;c.strokeRect(x-12,y,24,140);
      for(let k=0;k<=100;k+=20){const yy=y+140*(1-k/100);c.beginPath();c.moveTo(x+13,yy);c.lineTo(x+20,yy);c.stroke();text(String(k),x+39,yy+5,14,muted);}
      text(label,x,y-15,18);text(fmt(t)+' °C',x,y+170,22);
    }
    function legend(y){for(let i=0;i<180;i++){c.fillStyle=color(20+60*i/179);c.fillRect(260+i,y,1.5,12);}text('20 °C',220,y+12,16,muted);text('80 °C',480,y+12,16,muted);}
    if(id===0){
      text('Diferencia de temperatura: '+fmt(Math.abs(value.a-value.b))+' °C',350,28,22);
      arrow(80,620,70,value.power,300);
      text(Math.abs(value.power)<1e-9?'Sin transferencia neta':(value.power>0?'A → B':'B → A')+' · '+fmt(Math.abs(value.power))+' J por segundo',350,110,20);
      text('A: '+(value.qa>0?'+':'')+fmt(value.qa)+' J     ·     B: '+(value.qb>0?'+':'')+fmt(value.qb)+' J',350,145,18);
      text('Flechas: sentido del calor; velocidad ilustrativa.',350,176,16,muted);
    }else if(id===1){
      c.fillStyle=soft;c.fillRect(50,90,140,150);text('Fuente',120,130,22);text(fmt(params.power)+' W',120,175,24);
      arrow(205,380,165,params.power,100);
      c.fillStyle=color(value.temperature);c.fillRect(400,90,155,150);text('Cuerpo',477,130,22,'#fff');text(fmt(value.temperature)+' °C',477,180,25,'#fff');
      thermometer(610,75,value.temperature,'T');
      text('Calor recibido: '+fmt(value.q)+' J',350,320,24);
      text('Desde 20 °C: aumento de '+fmt(value.delta)+' °C',350,355,21);
      text('El color y el termómetro siguen la temperatura calculada.',350,390,17,muted);
    }else if(id===2){
      c.fillStyle=soft;c.fillRect(240,65,220,230);text('Sistema cerrado',350,95,22);
      const bound=Math.max(100,Math.abs(params.heatRate-params.workRate)*30),level=Math.min(1,Math.abs(value.u)/bound),zero=190;
      c.fillStyle=value.u>=0?accent:other;c.globalAlpha=.7;c.fillRect(285,value.u>=0?zero-70*level:zero,130,70*level);c.globalAlpha=1;
      c.strokeStyle=muted;c.beginPath();c.moveTo(275,zero);c.lineTo(425,zero);c.stroke();text('0 (inicio)',350,zero+22,16,muted);
      text((value.u>0?'+':'')+fmt(value.u)+' J',350,270,24);
      arrow(35,220,145,params.heatRate);arrow(480,665,145,params.workRate);
      text('Calor',120,98,22);text(fmt(params.heatRate)+' W',120,205,22);
      text('Trabajo',575,98,22);text(fmt(params.workRate)+' W',575,205,22);
      text('Q '+(value.q>=0?'+':'')+fmt(value.q)+' J     −     W '+(value.w>=0?'+':'')+fmt(value.w)+' J',350,340,22);
      text('El nivel indica ΔU respecto del inicio, no energía absoluta.',350,380,17,muted);
    }else if(id===3){
      thermometer(110,65,value.a,'Cuerpo A');thermometer(570,65,value.b,'Cuerpo B');
      arrow(205,470,145,value.power,300);text(Math.abs(value.power)<1e-9?'Sin flujo neto':fmt(Math.abs(value.power))+' W',350,110,22);
      text('Equilibrio previsto: '+fmt(value.eq)+' °C',350,295,23);
      text('ΔS del conjunto: +'+fmt(value.total,4)+' J/K',350,342,22);
      text('El calor fluye del cuerpo más caliente al más frío.',350,385,18,muted);
    }else if(id===5){
      text('Reservorio izquierdo',130,40,20);text('Reservorio derecho',570,40,20);
      text(params.left+' °C',130,80,26);text(params.right+' °C',570,80,26);
      for(let i=0;i<200;i++){c.fillStyle=color(value.at(i/199));c.fillRect(70+i*2.8,115,3.2,75);}
      text('x = 0 m',100,220,18);text('x = 1 m',600,220,18);
      arrow(85,615,265,value.power,6);
      text('Atraviesan la barra: '+fmt(Math.abs(value.power),3)+' J por segundo',350,320,23);
      text('Temperaturas constantes · flujo sostenido por los reservorios',350,363,18);
      text('Flechas: sentido del calor; velocidad ilustrativa.',350,399,16,muted);
    }else if(dimension){
      const s=state.diff,n=s.n,initial=state.initial,current=s.field;
      const cell=(field,x,y=0,z=0)=>field[s.index(x,y,z)];
      text('Estado inicial · t = 0 s',180,35,23);text('Estado actual · t = '+fmt(state.time)+' s',520,35,23);
      if(dimension===1){
        for(const [field,x0] of [[initial,35],[current,375]])for(let x=0;x<n;x++){c.fillStyle=color(field[x]);c.fillRect(x0+290*x/n,100,290/n+1,95);}
        text('0 m               1 m',180,230,18);text('0 m               1 m',520,230,18);
        const probe=Math.floor(n*.3),p=375+290*(probe+.5)/n;c.strokeStyle=ink;c.beginPath();c.moveTo(p,85);c.lineTo(p,210);c.stroke();
        text('Termómetro fijo: '+fmt(current[probe])+' °C',350,295,23);
      }else if(dimension===2){
        for(const [field,x0] of [[initial,65],[current,405]])for(let y=0;y<n;y++)for(let x=0;x<n;x++){c.fillStyle=color(cell(field,x,y));c.fillRect(x0+230*x/n,65+230*(n-1-y)/n,230/n+1,230/n+1);}
        for(const x0 of [65,405]){c.strokeStyle=muted;c.strokeRect(x0,65,230,230);c.setLineDash([5,4]);c.beginPath();c.moveTo(x0,180);c.lineTo(x0+230,180);c.stroke();c.setLineDash([]);text('x: 0 → 1 m · corte central',x0+115,325,18);}
      }else{
        // Both views project the same voxels and use the same fixed colour scale.
        for(const [field,cx] of [[initial,180],[current,520]])for(let z=n-1;z>=0;z--)for(let y=n-1;y>=0;y--)for(let x=0;x<n;x++){
          const t=cell(field,x,y,z),excess=Math.abs(t-20);if(excess<.5)continue;
          c.globalAlpha=.12+.65*Math.min(1,excess/60);c.fillStyle=color(t);c.fillRect(cx+(x-y)*8-3,215+(x+y-n)*4-z*8-3,7,7);
        }c.globalAlpha=1;text('Proyección de las celdas · se omite el fondo uniforme',350,305,18,muted);
        for(const [axis,x0,idx] of [['XY',55,slices[2]],['XZ',285,slices[1]],['YZ',515,slices[0]]]){
          for(let j=0;j<n;j++)for(let i=0;i<n;i++){const xyz=axis==='XY'?[i,j,idx]:axis==='XZ'?[i,idx,j]:[idx,i,j];c.fillStyle=color(cell(current,...xyz));c.fillRect(x0+i*130/n,335+(n-1-j)*130/n,130/n+1,130/n+1);}
          text(axis+' · corte '+idx,x0+65,495,18);
        }
      }
      const footer=dimension===3?535:365;legend(footer);
      text('Mínima '+fmt(value.min)+' °C · máxima '+fmt(value.max)+' °C · media '+fmt(value.mean,3)+' °C',350,footer+55,19);
      text('Misma escala en ambas vistas · recinto aislado',350,footer+90,17,muted);
    }
    canvas.dataset.sceneTime=String(state.time);canvas.dataset.sceneKind=dimension?'diffusion-'+dimension:'energy-'+id;
    canvas.setAttribute('aria-label',dimension?'Comparación del campo térmico inicial y actual a '+fmt(state.time)+' segundos. Temperatura mínima '+fmt(value.min)+' y máxima '+fmt(value.max)+' grados Celsius.':'Representación del intercambio de energía a '+fmt(state.time)+' segundos. Las flechas indican su sentido.');
  }
  window.ThermalPhenomenon={draw};
})();
