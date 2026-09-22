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
		paversKicker:'Beyond the pool',
		paversTitle:'Pavers Designed<br>Around Your Pool',
		paversText:'From pool decks and patios to walkways and complete outdoor transformations, EMV creates beautiful, durable hardscapes that complement your pool and your home.',
		paversButton:'Explore pavers & outdoor living',
		restorationKicker:'Bring it back to beautiful',
		restorationTitle:'Pool Restorations<br>Built to Last.',
		restorationText:'From repairs and resurfacing to tile, coping, plumbing, and upgrades, EMV restores your pool so it looks better, works better, and lasts longer.',
		restorationButton:'Talk to our restoration team',
		galleryKicker:'Our work',
		galleryTitle:'Featured Projects',
		galleryLink:'View full gallery',
		fullGalleryKicker:'The full collection',
		fullGalleryTitle:'Project Gallery',
		fullGalleryLink:'Start your project',
		differenceKicker:'The EMV difference',
		differenceTitle:'Quality. Craftsmanship. Lasting Value.',
		differenceText:'We specialize in creating and restoring outdoor spaces that bring families together. From custom pools to pavers and complete restorations, our focus is on quality, durability, and customer satisfaction.',
		differenceButton:'Learn more about EMV',
		outdoorKicker:'Complete outdoor living',
		outdoorTitle:'Built Around the Way You Live.',
		outdoorText:'Pool construction, tile, coping, plaster, decks, retaining walls, water features, slides, spas and restoration—planned as one cohesive outdoor space.',
		estimateKicker:'Free estimate',
		estimateTitle:'Tell us about your project.',
		estimateText:'Share a few details and our team will reach out to talk through your pool, paver, or restoration needs.',
		formFields:['Name','Email','Phone','Project type','Timeline','Budget range','Project details'],
		placeholders:{name:'Your full name', email:'you@example.com', phone:'(919) 555-0101', message:'Tell us about your ideas, goals, current condition, and anything you\'d like to include.'},
		selectOptions:{projectType:['Select a service','Custom Pool','Pavers & Decks','Pool Restoration','Outdoor Living','Other'], timeline:['ASAP','Within 1-3 months','Within 3-6 months','Just exploring'], budget:['Under $25k','$25k - $50k','$50k - $100k','$100k - $200k','$200k+','Prefer not to say']},
		submitButton:'Request estimate',
		footerCredit:'You like this page?',
		footerLinks:['TikTok','Instagram','Facebook'],
		contactLabels:['Call or Text Us','Email Us','Visit Our Location'],
		skipped:'May be hidden by browser'
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
		paversKicker:'Más allá de la piscina',
		paversTitle:'Pavers Diseñados<br>Alrededor de Tu Piscina',
		paversText:'Desde decks de piscina y patios hasta pasillos y transformaciones completas del exterior, EMV crea elementos duraderos y hermosos que complementan tu piscina y tu hogar.',
		paversButton:'Explora pavers y vida exterior',
		restorationKicker:'Devuélvelo a su belleza',
		restorationTitle:'Restauraciones de Piscina<br>Construidas para Durar.',
		restorationText:'Desde reparaciones y revestimientos hasta azulejos, cope, plomería y mejoras, EMV restaura tu piscina para que se vea mejor, funcione mejor y dure más.',
		restorationButton:'Habla con nuestro equipo',
		galleryKicker:'Nuestro trabajo',
		galleryTitle:'Proyectos Destacados',
		galleryLink:'Ver galería completa',
		fullGalleryKicker:'La colección completa',
		fullGalleryTitle:'Galería de Proyectos',
		fullGalleryLink:'Inicia tu proyecto',
		differenceKicker:'La diferencia EMV',
		differenceTitle:'Calidad. Artesanía. Valor Duradero.',
		differenceText:'Nos especializamos en crear y restaurar espacios exteriores que unen a las familias. Desde piscinas personalizadas hasta pavers y restauraciones completas, nuestra prioridad es la calidad, la durabilidad y la satisfacción del cliente.',
		differenceButton:'Más sobre EMV',
		outdoorKicker:'Vida exterior completa',
		outdoorTitle:'Diseñado para Tu Estilo de Vida.',
		outdoorText:'Construcción de piscinas, azulejos, cope, estuco, decks, muros de contención, características de agua, toboganes, spas y restauración, todo planificado como un espacio exterior cohesivo.',
		estimateKicker:'Cotización gratis',
		estimateTitle:'Cuéntenos sobre su proyecto.',
		estimateText:'Comparta algunos detalles y nuestro equipo se pondrá en contacto para hablar sobre su piscina, paver o necesidad de restauración.',
		formFields:['Nombre','Correo electrónico','Teléfono','Tipo de proyecto','Plazo','Rango de presupuesto','Detalles del proyecto'],
		placeholders:{name:'Su nombre completo', email:'tu@correo.com', phone:'(919) 555-0101', message:'Cuéntenos sobre sus ideas, objetivos, estado actual y cualquier detalle que quiera incluir.'},
		selectOptions:{projectType:['Seleccione un servicio','Piscina Personalizada','Pavers y Decks','Restauración de Piscina','Vida Exterior','Otro'], timeline:['Lo antes posible','Dentro de 1-3 meses','Dentro de 3-6 meses','Solo estoy explorando'], budget:['Menos de $25k','$25k - $50k','$50k - $100k','$100k - $200k','$200k+','Prefiero no decir']},
		submitButton:'Solicitar cotización',
		footerCredit:'¿Te gusta esta página?',
		footerLinks:['TikTok','Instagram','Facebook'],
		contactLabels:['Llámanos o envíanos un mensaje','Envíanos un correo','Visítanos'],
		skipped:'Puede estar oculto por el navegador'
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
	const paversKicker=document.querySelector('.pavers-copy .overline');
	if(paversKicker) paversKicker.textContent=t.paversKicker;
	const paversTitle=document.querySelector('.pavers-copy h2');
	if(paversTitle) paversTitle.innerHTML=t.paversTitle;
	const paversText=document.querySelector('.pavers-copy > p:not(.overline)');
	if(paversText) paversText.textContent=t.paversText;
	const paversButton=document.querySelector('.pavers-copy .button');
	if(paversButton) paversButton.innerHTML=`${t.paversButton} <span>→</span>`;
	const restorationKicker=document.querySelector('.restoration-copy .overline');
	if(restorationKicker) restorationKicker.textContent=t.restorationKicker;
	const restorationTitle=document.querySelector('.restoration-copy h2');
	if(restorationTitle) restorationTitle.innerHTML=t.restorationTitle;
	const restorationText=document.querySelector('.restoration-copy > p:not(.overline)');
	if(restorationText) restorationText.textContent=t.restorationText;
	const restorationButton=document.querySelector('.restoration-copy .button');
	if(restorationButton) restorationButton.innerHTML=`${t.restorationButton} <span>→</span>`;
	const galleryKicker=document.querySelector('.gallery .gallery-heading .overline');
	if(galleryKicker) galleryKicker.textContent=t.galleryKicker;
	const galleryTitle=document.querySelector('.gallery .gallery-heading h2');
	if(galleryTitle) galleryTitle.textContent=t.galleryTitle;
	const galleryLink=document.querySelector('.gallery .gallery-heading a');
	if(galleryLink) galleryLink.textContent=`${t.galleryLink} →`;
	const fullGalleryKicker=document.querySelector('.full-gallery .gallery-heading .overline');
	if(fullGalleryKicker) fullGalleryKicker.textContent=t.fullGalleryKicker;
	const fullGalleryTitle=document.querySelector('.full-gallery .gallery-heading h2');
	if(fullGalleryTitle) fullGalleryTitle.textContent=t.fullGalleryTitle;
	const fullGalleryLink=document.querySelector('.full-gallery .gallery-heading a');
	if(fullGalleryLink) fullGalleryLink.textContent=`${t.fullGalleryLink} →`;
	const differenceKicker=document.querySelector('.difference .overline.light');
	if(differenceKicker) differenceKicker.textContent=t.differenceKicker;
	const differenceTitle=document.querySelector('.difference h2');
	if(differenceTitle) differenceTitle.textContent=t.differenceTitle;
	const differenceText=document.querySelector('.difference p:not(.overline)');
	if(differenceText) differenceText.textContent=t.differenceText;
	const differenceButton=document.querySelector('.difference .button');
	if(differenceButton) differenceButton.innerHTML=`${t.differenceButton} <span>→</span>`;
	const outdoorKicker=document.querySelector('.outdoor-copy .overline');
	if(outdoorKicker) outdoorKicker.textContent=t.outdoorKicker;
	const outdoorTitle=document.querySelector('.outdoor-copy h2');
	if(outdoorTitle) outdoorTitle.textContent=t.outdoorTitle;
	const outdoorText=document.querySelector('.outdoor-copy > p:last-of-type');
	if(outdoorText) outdoorText.textContent=t.outdoorText;
	const estimateKicker=document.querySelector('.estimate-intro .overline');
	if(estimateKicker) estimateKicker.textContent=t.estimateKicker;
	const estimateTitle=document.querySelector('.estimate-intro h2');
	if(estimateTitle) estimateTitle.textContent=t.estimateTitle;
	const estimateText=document.querySelector('.estimate-intro p:not(.overline)');
	if(estimateText) estimateText.textContent=t.estimateText;
	const formLabels=[...document.querySelectorAll('.estimate-form label > span')];
	formLabels.forEach((el,index)=>{
		if(t.formFields[index]) el.textContent=t.formFields[index];
	});
	const nameField=document.querySelector('input[name="name"]');
	if(nameField) nameField.placeholder=t.placeholders.name;
	const emailField=document.querySelector('input[name="email"]');
	if(emailField) emailField.placeholder=t.placeholders.email;
	const phoneField=document.querySelector('input[name="phone"]');
	if(phoneField) phoneField.placeholder=t.placeholders.phone;
	const messageField=document.querySelector('textarea[name="message"]');
	if(messageField) messageField.placeholder=t.placeholders.message;
	const projectTypeField=document.querySelector('select[name="projectType"]');
	if(projectTypeField){
		projectTypeField.innerHTML=t.selectOptions.projectType.map((value,index)=>`<option value="${index===0?'':value}">${value}</option>`).join('');
		projectTypeField.value='';
	}
	const timelineField=document.querySelector('select[name="timeline"]');
	if(timelineField){
		timelineField.innerHTML=t.selectOptions.timeline.map(v=>`<option>${v}</option>`).join('');
	}
	const budgetField=document.querySelector('select[name="budget"]');
	if(budgetField){
		budgetField.innerHTML=t.selectOptions.budget.map(v=>`<option>${v}</option>`).join('');
	}
	const estimateSubmitButton=document.querySelector('.estimate-form .button.blue');
	if(estimateSubmitButton) estimateSubmitButton.textContent=t.submitButton;
	const footerCredit=document.querySelector('.site-credit');
	if(footerCredit) footerCredit.innerHTML=`${t.footerCredit} <span>→</span>`;
	const footerLinks=document.querySelectorAll('.footer-social a');
	footerLinks.forEach((link,index)=>{
		if(t.footerLinks[index]){
			const span=link.querySelector('span');
			if(span) span.textContent=span.textContent=== 'f' ? 'f' : span.textContent;
			link.childNodes[link.childNodes.length-1].nodeValue = ` ${t.footerLinks[index]}`;
		}
	});
	const contactLabels=document.querySelectorAll('.contact-grid a small');
	contactLabels.forEach((el,index)=>{
		if(t.contactLabels[index]) el.textContent=t.contactLabels[index];
	});
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
	['assets/organized/01_Web_Ready_All/IMG_3915.jpg','Custom Pools'],
	['assets/organized/01_Web_Ready_All/IMG_8476.jpg','Pool Finish'],
	['assets/organized/01_Web_Ready_All/IMG_7576.jpg','Water Features'],
	['assets/organized/01_Web_Ready_All/IMG_8060.jpg','Pool & Spa'],
	['assets/organized/01_Web_Ready_All/IMG_8478.jpg','Pavers & Patios'],
	['assets/organized/01_Web_Ready_All/IMG_8638.jpg','Stonework'],
	['assets/organized/01_Web_Ready_All/IMG_7569.jpg','Outdoor Living'],
	['assets/organized/01_Web_Ready_All/IMG_2986.jpg','Backyard Living'],
	['assets/organized/01_Web_Ready_All/IMG_8436.jpg','Construction Progress'],
	['assets/organized/01_Web_Ready_All/IMG_8061.jpg','Pool Deck'],
	['assets/organized/01_Web_Ready_All/IMG_3291.jpg','Pool Design'],
	['assets/organized/01_Web_Ready_All/IMG_4343.jpg','Retaining Walls'],
	['assets/organized/01_Web_Ready_All/IMG_4345.jpg','Pool Features'],
	['assets/organized/01_Web_Ready_All/IMG_4346.jpg','Pool Details'],
	['assets/organized/01_Web_Ready_All/IMG_8626.jpg','Travertine Deck'],
	['assets/organized/01_Web_Ready_All/IMG_8627.jpg','Pool Construction'],
	['assets/organized/01_Web_Ready_All/IMG_8642.jpg','Custom Finish'],
	['assets/organized/01_Web_Ready_All/IMG_8718.jpg','Outdoor Projects'],
	['assets/organized/04_Finished_Pool_Highlights/IMG_3915.jpg','Finished Pool'],
	['assets/organized/04_Finished_Pool_Highlights/IMG_7569.jpg','Highlight Project'],
	['assets/organized/04_Finished_Pool_Highlights/IMG_8060.jpg','Beautiful Finish'],
	['assets/organized/04_Finished_Pool_Highlights/IMG_8476.jpg','Modern Pool'],
	['assets/organized/04_Finished_Pool_Highlights/IMG_8638.jpg','Pool Restoration'],
	['assets/organized/03_Before_After_Selected/Pair_01_Before_After.jpg','Before & After']
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
const galleryFilterState={active:'all'};
const setGalleryFilter=(category='all')=>{
	galleryFilterState.active=category;

document.querySelectorAll('.gallery-filter-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.category===category));
	document.querySelectorAll('.example-card').forEach(card=>{
		const match = category === 'all' || card.dataset.category === category;
		card.classList.toggle('hidden', !match);
	});
};

document.querySelectorAll('.gallery-filter-btn').forEach(button=>{
	button.addEventListener('click',()=>{
		setGalleryFilter(button.dataset.category || 'all');
	});
});

document.querySelectorAll('.category-card').forEach(card=>{
	card.addEventListener('click',event=>{
		event.preventDefault();
		const category = card.dataset.category || 'all';
		setGalleryFilter(category);
		document.getElementById('full-gallery')?.scrollIntoView({ behavior:'smooth', block:'start' });
	});
});

const imageSources=[
	['assets/organized/01_Web_Ready_All/IMG_3915.jpg','Custom Pools'],
	['assets/organized/01_Web_Ready_All/IMG_8476.jpg','Pool Finish'],
	['assets/organized/01_Web_Ready_All/IMG_7576.jpg','Water Features'],
	['assets/organized/01_Web_Ready_All/IMG_8060.jpg','Pool & Spa'],
	['assets/organized/01_Web_Ready_All/IMG_8478.jpg','Pavers & Patios'],
	['assets/organized/01_Web_Ready_All/IMG_8638.jpg','Stonework'],
	['assets/organized/01_Web_Ready_All/IMG_7569.jpg','Outdoor Living'],
	['assets/organized/01_Web_Ready_All/IMG_2986.jpg','Backyard Living'],
	['assets/organized/01_Web_Ready_All/IMG_8436.jpg','Construction Progress'],
	['assets/organized/01_Web_Ready_All/IMG_8061.jpg','Pool Deck'],
	['assets/organized/01_Web_Ready_All/IMG_3291.jpg','Pool Design'],
	['assets/organized/01_Web_Ready_All/IMG_4343.jpg','Retaining Walls'],
	['assets/organized/01_Web_Ready_All/IMG_4345.jpg','Pool Features'],
	['assets/organized/01_Web_Ready_All/IMG_4346.jpg','Pool Details'],
	['assets/organized/01_Web_Ready_All/IMG_8626.jpg','Travertine Deck'],
	['assets/organized/01_Web_Ready_All/IMG_8627.jpg','Pool Construction'],
	['assets/organized/01_Web_Ready_All/IMG_8642.jpg','Custom Finish'],
	['assets/organized/01_Web_Ready_All/IMG_8718.jpg','Outdoor Projects'],
	['assets/organized/04_Finished_Pool_Highlights/IMG_3915.jpg','Finished Pool'],
	['assets/organized/04_Finished_Pool_Highlights/IMG_7569.jpg','Highlight Project'],
	['assets/organized/04_Finished_Pool_Highlights/IMG_8060.jpg','Beautiful Finish'],
	['assets/organized/04_Finished_Pool_Highlights/IMG_8476.jpg','Modern Pool'],
	['assets/organized/04_Finished_Pool_Highlights/IMG_8638.jpg','Pool Restoration'],
	['assets/organized/03_Before_After_Selected/Pair_01_Before_After.jpg','Before & After']
];

function shuffleArray(list){
	const shuffled=[...list];
	for(let i=shuffled.length-1;i>0;i--){
		const j=Math.floor(Math.random()*(i+1));
		[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
	}
	return shuffled;
}

const sliderTrack = track;
if (sliderTrack) {
	sliderTrack.innerHTML = shuffleArray(imageSources).map(([src,title]) => `<figure><img src="${src}" alt="${title}"></figure>`).join('');
}
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
setGalleryFilter('all');

const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('#nav a')];
addEventListener('scroll',()=>{const active=sections.filter(s=>s.getBoundingClientRect().top<160).at(-1)?.id||'home';links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${active}`))},{passive:true});
