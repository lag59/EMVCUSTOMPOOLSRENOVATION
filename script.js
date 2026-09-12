const menu=document.querySelector('.menu-button'),nav=document.querySelector('#nav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
document.querySelector('#year').textContent=new Date().getFullYear();

const translations={
	en:{
		nav:['Home','Custom Pools','Pavers','Restorations','Outdoor Living','Gallery','About','Contact'],
		headerEstimate:'Get a free estimate',
		headerMenu:'Menu',
		heroLabel:'Custom Pools • Pavers • Restorations',
		heroTitle:'Outdoor<br>living<br>built better.',
		heroText:'Custom pools, pavers, and restoration services designed around your home and built for a lifetime of enjoyment.',
		heroButton:'Get a free estimate',
		viewProjects:'View our projects',
		serviceStrip:['Custom Pools','Pavers & Decks','Pool Restorations','Outdoor Living'],
		serviceSub:['Design & Construction','Patios, Walkways & More','Repair · Resurface · Upgrade','Fire Pits, Kitchens & More'],
		footerCta:'Get a free estimate',
		footerCredit:'You like this page?'
	},
	es:{
		nav:['Inicio','Piscinas Personalizadas','Pavers','Restauraciones','Vida Exterior','Galería','Nosotros','Contacto'],
		headerEstimate:'Solicita una cotización gratis',
		headerMenu:'Menú',
		heroLabel:'Piscinas Personalizadas • Pavers • Restauraciones',
		heroTitle:'Exterior<br>viviendo<br>mejor construido.',
		heroText:'Piscinas personalizadas, pavers y servicios de restauración diseñados para tu hogar y construidos para disfrutar por muchos años.',
		heroButton:'Solicita una cotización',
		viewProjects:'Ver nuestros proyectos',
		serviceStrip:['Piscinas Personalizadas','Pavers y Decks','Restauraciones de Piscina','Vida Exterior'],
		serviceSub:['Diseño y Construcción','Patios, Pasillos y Más','Reparación · Revestimiento · Actualización','Fogatas, Cocinas y Más'],
		footerCta:'Solicita una cotización',
		footerCredit:'¿Te gusta esta página?'
	}
};

const appState={lang:'en'};
const applyTranslations=(lang)=>{
	const t=translations[lang] || translations.en;
	const navLinks=document.querySelectorAll('.header nav a');
	navLinks.forEach((link,index)=>{
		if(t.nav[index]) link.textContent=t.nav[index];
	});
	const estimateLink=document.querySelector('.estimate');
	if(estimateLink) estimateLink.textContent=t.headerEstimate;
	const menuButton=document.querySelector('.menu-button .sr-only');
	if(menuButton) menuButton.textContent=t.headerMenu;
	const heroLabel=document.querySelector('.hero-copy .overline.light');
	if(heroLabel) heroLabel.innerHTML=t.heroLabel.replace(/ • /g,' <i></i> ');
	const heroTitle=document.querySelector('.hero-copy h1');
	if(heroTitle) heroTitle.innerHTML=t.heroTitle;
	const heroText=document.querySelector('.hero-copy p:not(.overline)');
	if(heroText) heroText.textContent=t.heroText;
	const heroButton=document.querySelector('.hero .button.blue');
	if(heroButton) heroButton.innerHTML=`${t.heroButton} <span>→</span>`;
	const galleryButton=document.querySelector('.hero .button.clear');
	if(galleryButton) galleryButton.textContent=t.viewProjects;
	const stripLinks=document.querySelectorAll('.service-strip a strong');
	stripLinks.forEach((el,index)=>{
		if(t.serviceStrip[index]) el.textContent=t.serviceStrip[index];
	});
	const stripSmall=document.querySelectorAll('.service-strip a small');
	stripSmall.forEach((el,index)=>{
		if(t.serviceSub[index]) el.textContent=t.serviceSub[index];
	});
	const footerCredit=document.querySelector('.site-credit');
	if(footerCredit) footerCredit.innerHTML=`${t.footerCredit} <span>→</span>`;
	document.documentElement.lang=lang;
	document.querySelectorAll('.lang-btn').forEach(btn=>{
		btn.classList.toggle('active',btn.dataset.lang===lang);
	});
};

document.querySelectorAll('.lang-btn').forEach(btn=>{
	btn.addEventListener('click',()=>{
		appState.lang=btn.dataset.lang;
		applyTranslations(appState.lang);
	});
});

const estimateForm=document.getElementById('estimateForm');
estimateForm?.addEventListener('submit',e=>{
	e.preventDefault();
	const formData=new FormData(estimateForm);
	const name=(formData.get('name')||'').toString().trim();
	const email=(formData.get('email')||'').toString().trim();
	const phone=(formData.get('phone')||'').toString().trim();
	const projectType=(formData.get('projectType')||'General project').toString().trim();
	const timeline=(formData.get('timeline')||'Not specified').toString().trim();
	const budget=(formData.get('budget')||'Not specified').toString().trim();
	const message=(formData.get('message')||'').toString().trim();
	const formStatus=estimateForm.querySelector('.form-status');
	const subject=encodeURIComponent(`Free Estimate Request - ${projectType}`);
	const body=encodeURIComponent(
		`Name: ${name}\n`+
		`Email: ${email}\n`+
		`Phone: ${phone}\n`+
		`Project Type: ${projectType}\n`+
		`Timeline: ${timeline}\n`+
		`Budget: ${budget}\n\n`+
		`Project Details:\n${message}`
	);
	window.location.href=`mailto:emvpools007@gmail.com?subject=${subject}&body=${body}`;
	if(formStatus){formStatus.textContent='Your email app is opening with your estimate details.';}
	estimateForm.reset();
});

const imageSources=[
	['assets/pool-bubblers-and-sheer-descent-02.jpg','Water Features'],['assets/pool-hq-02.jpg','Water Features'],['assets/pool-water-feature-jets-installation-01.jpg','Pool Water Features'],['assets/pool-wall-water-features-01.jpg','Pool Wall Features'],['assets/project-1.jpg','Pavers & Patios'],['assets/project-2.jpg','Outdoor Living'],
	['assets/pool-hq-01.jpg','Custom Pools'],['assets/polishedpoolconstruction.png','Pool Construction'],['assets/emvpool spa.png','Pool & Spa'],['assets/emvpool whole backyard.png','Whole Backyard'],['assets/emvwholebackyard.png','Backyard Living'],['assets/evmpoolview.png','Pool Views'],
	['assets/Pool_Website_HQ_01.jpg','Pool Design'],['assets/Pool_Website_HQ_02.jpg','Pool Installation'],['assets/Pool_Website_HQ_03.jpg','Outdoor Pool'],
	['assets/EMV_Braced_Gunite_Pool_Enhanced_HQ.jpg','Gunite Pools'],['assets/EMV_Completed_Backyard_Pool_Fountains_Enhanced_HQ.jpg','Backyard Pools'],['assets/EMV_Completed_Backyard_Pool_Wide_Enhanced_HQ.jpg','Backyard Pool'],['assets/EMV_Completed_Modern_Rectangular_Pool_Enhanced_HQ.jpg','Modern Pools'],['assets/EMV_Freeform_Pool_Rebar_and_Forming_Enhanced_HQ.jpg','Pool Forming'],['assets/EMV_Freeform_Pool_Shell_Enhanced_HQ.jpg','Freeform Pools'],['assets/EMV_Gunite_Pool_Construction_Enhanced_HQ.jpg','Gunite Construction'],['assets/EMV_Luxury_Patio_Pool_Shell_Enhanced_HQ.jpg','Luxury Pools'],['assets/EMV_Overhead_Pool_and_Spa_Shell_Enhanced_HQ.jpg','Pool & Spa'],['assets/EMV_Pool_Construction_Gallery_Enhanced_HQ.jpg','Pool Construction'],['assets/EMV_Pool_Deck_Rebar_Preparation_Enhanced_HQ.jpg','Pool Decks'],['assets/EMV_Pool_Excavation_and_Forming_Enhanced_HQ.jpg','Pool Excavation'],['assets/EMV_Raised_Spa_Construction_Enhanced_HQ.jpg','Raised Spas'],['assets/EMV_Rectangular_Pool_Shell_Enhanced_HQ.jpg','Rectangular Pools'],['assets/EMV_Reinforced_Spa_Plumbing_Enhanced_HQ.jpg','Spa Plumbing'],['assets/EMV_Stone_Veneer_and_Coping_Enhanced_HQ.jpg','Stonework']
];

function shuffleArray(list){
	const shuffled=[...list];
	for(let i=shuffled.length-1;i>0;i--){
		const j=Math.floor(Math.random()*(i+1));
		[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
	}
	return shuffled;
}

const windowEl=document.querySelector('.gallery-window'),track=document.querySelector('.gallery-track'),dotsWrap=document.querySelector('.dots'),pause=document.querySelector('.pause');
track.innerHTML=shuffleArray(imageSources).map(([src,title])=>`<figure><img src="${src}" alt="${title}"></figure>`).join('');
const slides=[...track.querySelectorAll('figure')];
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
