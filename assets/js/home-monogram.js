/* A prescribed logo curve drives a damped pen:
   m r'' = k(target-r) - c r', m=1, k=144, c=18.
   Semi-implicit Euler at <=1/120 s; the luminous trail records the pen's
   actual positions. The letter is designed, not an emergent physical shape. */
(() => {
  const svg=document.querySelector('.home-monogram');if(!svg)return;
  const motion=matchMedia('(prefers-reduced-motion: reduce)');if(motion.matches)return;
  const ink=svg.querySelector('#trazo'),nib=svg.querySelector('#pluma'),length=ink.getTotalLength(),ns='http://www.w3.org/2000/svg';
  const layer=document.createElementNS(ns,'g');layer.classList.add('monogram-dynamics');svg.append(layer);
  function node(tag,cls,attrs={}){const el=document.createElementNS(ns,tag);el.setAttribute('class',cls);for(const [k,v] of Object.entries(attrs))el.setAttribute(k,v);layer.append(el);return el;}
  const dots=[];
  for(let i=0;i<=42;i++){const p=ink.getPointAtLength(length*i/42);dots.push(node('circle','monogram-sample',{cx:p.x,cy:p.y,r:2.6}));}
  const glow=node('polyline','monogram-glow'),trail=node('polyline','monogram-trail'),spring=node('line','monogram-spring'),targetDot=node('circle','monogram-target',{r:3.5}),halo=node('circle','monogram-halo',{r:12}),pen=node('circle','monogram-pen',{r:4.5});
  const start=ink.getPointAtLength(0);let x=start.x,y=start.y,vx=0,vy=0,t=0,last=null,raf=null,sampled=-1,points=[];
  function reset(){x=start.x;y=start.y;vx=vy=0;points=[];sampled=-1;}
  function step(dt){t+=dt;if(t>=12){t-=12;reset();}const p=ink.getPointAtLength(length*Math.min(1,t/8));vx+=(144*(p.x-x)-18*vx)*dt;vy+=(144*(p.y-y)-18*vy)*dt;x+=vx*dt;y+=vy*dt;}
  function draw(){
    const progress=Math.min(1,t/8),p=ink.getPointAtLength(length*progress),fade=t<10.2?1:(12-t)/1.8,settled=Math.max(0,Math.min(1,(t-8)/.7));
    if(t-sampled>=1/60){points.push(x.toFixed(2)+','+y.toFixed(2));sampled=t;}
    const line=points.join(' ');trail.setAttribute('points',line);glow.setAttribute('points',line);
    layer.style.opacity=String(fade);ink.style.opacity=String(.10+.9*settled*fade);nib.style.opacity=String(settled*fade);
    dots.forEach((dot,i)=>dot.style.opacity=i/42<=progress?'0':'.3');
    for(const el of [pen,halo]){el.setAttribute('cx',x);el.setAttribute('cy',y);el.style.opacity=String(1-settled);}
    targetDot.setAttribute('cx',p.x);targetDot.setAttribute('cy',p.y);targetDot.style.opacity=String(1-settled);
    spring.setAttribute('x1',x);spring.setAttribute('y1',y);spring.setAttribute('x2',p.x);spring.setAttribute('y2',p.y);spring.style.opacity=String(1-settled);
    glow.style.opacity=String(.25+.06*Math.sin(t*3));svg.dataset.state=t<8?'drawing':t<10.2?'glowing':'fading';
  }
  function frame(time){const dt=last===null?0:Math.min(.05,Math.max(0,(time-last)/1000));last=time;const n=Math.max(1,Math.ceil(dt*120));for(let i=0;i<n;i++)step(dt/n);draw();raf=requestAnimationFrame(frame);}
  function stop(){cancelAnimationFrame(raf);layer.remove();ink.style.removeProperty('opacity');nib.style.removeProperty('opacity');svg.dataset.state='static';}
  draw();raf=requestAnimationFrame(frame);
  motion.addEventListener('change',event=>{if(event.matches)stop();});
  document.addEventListener('visibilitychange',()=>{last=null;if(document.hidden)cancelAnimationFrame(raf);else if(!motion.matches&&layer.isConnected)raf=requestAnimationFrame(frame);});
})();
