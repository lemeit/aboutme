/* The homepage uses the original logo path, with a static no-JS fallback. */
(() => {
  const svg=document.querySelector('.home-monogram');if(!svg)return;
  const motion=matchMedia('(prefers-reduced-motion: reduce)');if(motion.matches)return;
  const ink=svg.querySelector('#trazo'),nib=svg.querySelector('#pluma'),length=ink.getTotalLength(),ns='http://www.w3.org/2000/svg';
  const samples=document.createElementNS(ns,'g');samples.classList.add('monogram-samples');svg.prepend(samples);
  const dots=[];
  for(let i=0;i<=42;i++){const p=ink.getPointAtLength(length*i/42),dot=document.createElementNS(ns,'circle');dot.setAttribute('cx',p.x);dot.setAttribute('cy',p.y);dot.setAttribute('r',2.6);samples.append(dot);dots.push(dot);}
  const pen=document.createElementNS(ns,'circle');pen.classList.add('monogram-pen');pen.setAttribute('r',5.5);svg.append(pen);
  let progress=0,last=null,raf=null;
  function finish(){cancelAnimationFrame(raf);ink.style.removeProperty('stroke-dasharray');ink.style.removeProperty('stroke-dashoffset');nib.style.removeProperty('opacity');samples.remove();pen.remove();svg.dataset.state='complete';}
  function draw(){ink.style.strokeDashoffset=length*(1-progress);const p=ink.getPointAtLength(length*progress);pen.setAttribute('cx',p.x);pen.setAttribute('cy',p.y);dots.forEach((dot,i)=>dot.style.opacity=i/42<=progress?'0':'1');nib.style.opacity=String(Math.max(0,Math.min(1,(progress-.94)/.06)));}
  function frame(time){if(last!==null)progress=Math.min(1,progress+Math.max(0,time-last)/7000);last=time;draw();if(progress>=1)finish();else raf=requestAnimationFrame(frame);}
  ink.style.strokeDasharray=length+' '+length;svg.dataset.state='drawing';draw();raf=requestAnimationFrame(frame);
  motion.addEventListener('change',event=>{if(event.matches)finish();});
  document.addEventListener('visibilitychange',()=>{last=null;});
})();
