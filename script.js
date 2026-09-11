const menu=document.querySelector('.menu-button'),nav=document.querySelector('#nav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
document.querySelector('#year').textContent=new Date().getFullYear();

const windowEl=document.querySelector('.gallery-window'),track=document.querySelector('.gallery-track'),slides=[...document.querySelectorAll('.gallery figure')],dotsWrap=document.querySelector('.dots'),pause=document.querySelector('.pause');
let index=0,timer,touchStart=0,isPaused=false;
slides.slice(0,4).forEach(slide=>{const clone=slide.cloneNode(true);clone.classList.add('gallery-clone');track.append(clone)});
slides.forEach((_,i)=>{const dot=document.createElement('button');dot.type='button';dot.setAttribute('aria-label',`Show project ${i+1}`);dot.addEventListener('click',()=>show(i));dotsWrap.append(dot)});
const dots=[...dotsWrap.children];
function visible(){return innerWidth<=560?1:innerWidth<=850?2:4}
function show(next,restart=true){const max=slides.length-1;index=next>max?0:next<0?max:next;const width=slides[0]?.getBoundingClientRect().width||0;track.style.transform=`translateX(-${index*(width+12.8)}px)`;slides.forEach((slide,i)=>slide.classList.toggle('is-visible',i>=index&&i<index+visible()));dots.forEach((d,i)=>d.classList.toggle('active',i===index));if(restart)start()}
function start(){clearInterval(timer);if(!isPaused)timer=setInterval(()=>{const max=Math.max(0,slides.length-visible());show(index>=max?0:index+1,false)},2500)}
document.querySelector('.prev')?.addEventListener('click',()=>show(index-1));document.querySelector('.next')?.addEventListener('click',()=>show(index+1));
pause?.addEventListener('click',()=>{isPaused=!isPaused;pause.textContent=isPaused?'▶ Play':'Ⅱ Pause';pause.setAttribute('aria-pressed',String(isPaused));start()});
windowEl?.addEventListener('touchstart',e=>touchStart=e.changedTouches[0].screenX,{passive:true});windowEl?.addEventListener('touchend',e=>{const distance=e.changedTouches[0].screenX-touchStart;if(Math.abs(distance)>45)show(index+(distance<0?1:-1))},{passive:true});
addEventListener('resize',()=>show(index,false));document.addEventListener('visibilitychange',()=>document.hidden?clearInterval(timer):start());show(0,false);start();

const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('#nav a')];
addEventListener('scroll',()=>{const active=sections.filter(s=>s.getBoundingClientRect().top<160).at(-1)?.id||'home';links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${active}`))},{passive:true});
