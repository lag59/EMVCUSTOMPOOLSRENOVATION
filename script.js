const pageKey=location.pathname.split('/').pop().replace(/\.html?$/i,'')||'index';
const seoPages={
	index:{title:'Custom Pools & Outdoor Living | EMV Custom Pools | Wake Forest, NC',description:'EMV Custom Pools & Restoration designs and builds custom pools, hardscapes, renovations, and complete outdoor living spaces in Wake Forest and the Triangle.'},
	'custom-pools':{title:'Custom Pool Design & Construction | EMV Custom Pools | Wake Forest, NC',description:'Design and build a custom pool made for your home and lifestyle. EMV creates pools, spas, tanning ledges, water features, decking, and finished outdoor spaces.'},
	hardscapes:{title:'Pool Decks, Pavers & Hardscapes | EMV Custom Pools | Wake Forest, NC',description:'EMV creates travertine pool decks, paver patios, natural stone, coping, retaining walls, steps, walkways, and complete hardscape spaces.'},
	renovations:{title:'Pool Renovations & Restoration | EMV Custom Pools | Wake Forest, NC',description:'Transform an outdated pool with resurfacing, replastering, tile, coping, decking, equipment, lighting, water features, and complete backyard renovations.'},
	'outdoor-living':{title:'Outdoor Living Design & Construction | EMV Custom Pools | Wake Forest, NC',description:'Create a complete backyard destination with EMV outdoor kitchens, patios, fire features, lounge areas, lighting, water features, pools, and entertaining spaces.'},
	gallery:{title:'Pool, Hardscape & Renovation Portfolio | EMV Custom Pools',description:'Explore EMV project photos featuring custom pools, construction, decks, plumbing, renovations, resurfacing, tile, coping, retaining walls, and transformations.'},
	about:{title:'Our Story | EMV Custom Pools & Restoration | Wake Forest, NC',description:'Learn how EMV Custom Pools & Restoration combines thoughtful design, quality materials, clear communication, and craftsmanship to build lasting outdoor spaces.'},
	consultation:{title:'Request a Pool & Outdoor Living Consultation | EMV Custom Pools',description:'Tell EMV about your backyard, pool, hardscape, renovation, or outdoor living project and request a consultation with our team.'},
	'social-connect':{title:'Connect With EMV | EMV Custom Pools & Restoration',description:'Connect with EMV Custom Pools & Restoration on Instagram, Facebook, WhatsApp, and our digital contact card.'}
};
const seo=seoPages[pageKey]||{title:'EMV Custom Pools & Restoration | Wake Forest, NC',description:'EMV Custom Pools & Restoration builds custom pools, hardscapes, renovations, and outdoor living spaces in Wake Forest and the Triangle.'};
document.title=seo.title;
const setMeta=(name,content,property=false)=>{let el=document.querySelector(`${property?'meta[property':'meta[name'}="${name}"]`);if(!el){el=document.createElement('meta');el.setAttribute(property?'property':'name',name);document.head.append(el)}el.setAttribute('content',content)};
setMeta('description',seo.description);setMeta('og:title',seo.title,true);setMeta('og:description',seo.description,true);setMeta('og:type','website',true);setMeta('og:image','assets/logo/EMVCUSTOMPOOLSsquare.png',true);setMeta('twitter:card','summary_large_image');setMeta('twitter:title',seo.title);setMeta('twitter:description',seo.description);
const businessSchema={"@context":"https://schema.org","@type":"LocalBusiness","@id":"#emv-custom-pools","name":"EMV Custom Pools & Restoration","description":seo.description,"telephone":"+1-919-208-7070","email":"emvpools007@gmail.com","image":"assets/logo/EMVCUSTOMPOOLSsquare.png","address":{"@type":"PostalAddress","streetAddress":"2521 Rolesville Rd","addressLocality":"Wake Forest","addressRegion":"NC","postalCode":"27587","addressCountry":"US"},"areaServed":["Wake Forest","Raleigh","Rolesville","North Carolina"],"url":location.href,"serviceType":["Custom pool construction","Pool renovations","Hardscapes","Outdoor living"]};
const schemaScript=document.createElement('script');schemaScript.type='application/ld+json';schemaScript.textContent=JSON.stringify(businessSchema);document.head.append(schemaScript);
document.querySelectorAll('.contact-grid').forEach(grid=>{if(grid.querySelector('.whatsapp-link'))return;const link=document.createElement('a');link.className='whatsapp-link';link.href='https://wa.me/19192087070?text=Hello%20EMV%2C%20I%27d%20like%20to%20discuss%20a%20backyard%20project.';link.target='_blank';link.rel='noopener noreferrer';link.innerHTML='<b aria-hidden="true">◉</b><span><strong>WhatsApp</strong><small>Message Us</small></span>';grid.append(link)});
document.querySelectorAll('.footer-social a').forEach(link=>{if(link.textContent.toLowerCase().includes('tiktok')){link.href='https://www.tiktok.com/@pools.builder';link.target='_blank';link.rel='noopener noreferrer'}});

const menu=document.querySelector('.menu-button'),nav=document.querySelector('#nav');
if(nav){
	const socialLinks=[...nav.querySelectorAll('a[href="social-connect.html"]')];
	socialLinks.slice(1).forEach(link=>link.remove());
	if(socialLinks.length===0){
	const socialLink=document.createElement('a');
	socialLink.href='social-connect.html';
	socialLink.dataset.i18n='navSocial';
	socialLink.textContent='Connect';
	const consultationLink=nav.querySelector('.nav-cta');
	if(consultationLink) nav.insertBefore(socialLink,consultationLink); else nav.append(socialLink);
	}
}
if(menu&&nav) menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
if(nav) nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');if(menu)menu.setAttribute('aria-expanded','false')}));
const year=document.querySelector('#year');
if(year) year.textContent=String(new Date().getFullYear());
document.querySelectorAll('video[data-low-volume]').forEach(video=>{video.volume=.15;video.addEventListener('volumechange',()=>{if(!video.muted)video.volume=.15})});
const showcaseVideo=document.querySelector('video[data-video-playlist]');
if(showcaseVideo){
	const playlist=['assets/VIDEOS/copy_07BC608B-EE10-4DE0-950A-C0382CABEE38.MOV','assets/VIDEOS/copy_1479579D-7682-48EA-97FE-ED831D05635C.MOV','assets/VIDEOS/copy_BFFB4A9F-3235-4D95-962D-079E98E799BC.MOV'];
	let playlistIndex=0;
	showcaseVideo.addEventListener('ended',()=>{playlistIndex=(playlistIndex+1)%playlist.length;showcaseVideo.src=playlist[playlistIndex];showcaseVideo.load();const playback=showcaseVideo.play();if(playback&&playback.catch)playback.catch(()=>{});});
}

const translations={
	en:{
		navHome:'Home',navPools:'Custom Pools',navHardscapes:'Hardscapes',navRenovations:'Renovations',navOutdoor:'Outdoor Living',navPortfolio:'Portfolio',navStory:'Our Story',navSocial:'Connect',navConsultation:'Request a Consultation',
		headerEstimate:'Get a free estimate',headerMenu:'Menu',
		heroLabel:'Custom Pools <i></i> Hardscapes <i></i> Outdoor Living',heroTitle:'Custom Pools.<br>Timeless Outdoor Spaces.<br>Built Around You.',heroText:'EMV Custom Pools & Restoration designs and builds custom pools, hardscapes, renovations, and complete outdoor living spaces with craftsmanship that transforms your backyard.',heroButton:'Request a consultation',viewProjects:'View our projects',
		servicePools:'Custom Pools',servicePavers:'Pavers & Decks',serviceRestorations:'Pool Restorations',serviceOutdoor:'Outdoor Living',servicePoolsSub:'Design & Construction',servicePaversSub:'Patios, Walkways & More',serviceRestorationsSub:'Repair · Resurface · Upgrade',serviceOutdoorSub:'Fire Pits, Kitchens & More',footerCredit:'You like this page?',
		galleryLabel:'Our work',galleryTitle:'Featured Projects',galleryLink:'View full gallery →',folderCustomPool:'Custom Pool',folderConstruction:'Construction',folderDeck:'DECK',folderExtra:'Extra',folderGrading:'Grading site for construction',folderPlaster:'PLASTER',folderPlumming:'Plumming',folderRebar:'Rebar',folderRenovation:'RENOVATION',folderResurfacing:'Resurfacing',folderRetainingWalls:'RETAINING WALLS',folderShotcreteShell:'SHORTCRETE_SHELL',folderTileAndCoping:'TILE AND COPING',folderTransformation:'TRANSFORMATION',estimateLabel:'Free estimate',estimateTitle:'Tell us about your project.',estimateText:'Share a few details and our team will reach out to talk through your pool, paver, or restoration needs.',nameLabel:'Name',emailLabel:'Email',phoneLabel:'Phone',projectTypeLabel:'Project type',timelineLabel:'Timeline',budgetLabel:'Budget range',detailsLabel:'Project details',requestEstimate:'Request estimate',
		galleryHeroLabel:'Our work',galleryHeroTitle:'Project<br>Gallery',galleryHeroText:'Explore the craftsmanship behind EMV pools, hardscapes, water features and outdoor living spaces.',galleryIntroLabel:'Built for your backyard',galleryIntroTitle:'Ideas worth diving into.',galleryIntroText:'Every project starts with a clear plan and ends with an outdoor space made for real life. Browse examples of our construction, finishing and restoration work below.',galleryCollectionLabel:'Browse the collection',galleryCollectionTitle:'Featured projects',startProject:'Start your project',readyLabel:'Ready when you are',readyTitle:"Let's build something beautiful.",
		aboutHeroLabel:'The EMV difference',aboutHeroTitle:'Built on<br>craftsmanship.',aboutHeroText:'Thoughtful design, honest communication and durable construction for the places where life happens.',aboutStoryLabel:'Who we are',aboutStoryTitle:'Outdoor spaces made personal.',aboutStoryText1:'EMV Custom Pools & Restoration creates and restores outdoor spaces throughout Wake Forest and the surrounding Triangle. We bring pool construction, hardscaping and restoration together so your project is planned as one cohesive space—not a collection of disconnected pieces.',aboutStoryText2:'From the first conversation through the final finish, our goal is simple: deliver quality work, clear expectations and a result your family can enjoy for years.',talkTeam:'Talk with our team',guidesLabel:'What guides us',guidesTitle:'Quality you can see. Service you can feel.',craftTitle:'Craftsmanship',craftText:'Every surface, edge and finish matters. We take pride in the details that make a project feel complete.',communicationTitle:'Clear communication',communicationText:'You deserve to know what is happening, what comes next and how your investment is being used.',valueTitle:'Lasting value',valueText:'We build with durable materials and practical solutions that look beautiful and perform for the long term.',whatWeDo:'What we do',wholeBackyard:'One team for the whole backyard.',servicesPool:'Custom pool construction',servicesPoolText:'Design, excavation, plumbing, shotcrete and finishing.',servicesOutdoor:'Pavers & outdoor living',servicesOutdoorText:'Decks, patios, walkways and spaces built around your home.',servicesRestore:'Pool restoration',servicesRestoreText:'Repairs, resurfacing, tile, coping, upgrades and more.',letsStart:'Let’s get started',visionTitle:'Have a vision for your backyard?',visionText:'Tell us what you are imagining and we will help you take the next step.',requestEstimate:'Request an estimate'
	},
	es:{
		navHome:'Inicio',navPools:'Piscinas Personalizadas',navHardscapes:'Hardscapes',navRenovations:'Renovaciones',navOutdoor:'Vida Exterior',navPortfolio:'Portafolio',navStory:'Nuestra Historia',navConsultation:'Solicita una Consulta',headerEstimate:'Solicita una cotización gratis',headerMenu:'Menú',heroLabel:'Piscinas Personalizadas <i></i> Hardscapes <i></i> Renovaciones',heroTitle:'Exterior<br>viviendo<br>mejor construido.',heroText:'Piscinas personalizadas, hardscapes y restauraciones diseñadas para tu hogar y construidas para disfrutar por muchos años.',heroButton:'Solicita una consulta',viewProjects:'Ver nuestros proyectos',servicePools:'Piscinas Personalizadas',servicePavers:'Hardscapes',serviceRestorations:'Renovaciones',serviceOutdoor:'Vida Exterior',servicePoolsSub:'Diseño y Construcción',servicePaversSub:'Piedra, patios y superficies',serviceRestorationsSub:'Reparar · Renovar · Actualizar',serviceOutdoorSub:'Cocinas, fogatas y más',footerCredit:'¿Te gusta esta página?',galleryLabel:'Nuestro trabajo',galleryTitle:'Proyectos destacados',galleryLink:'Ver portafolio completo →',folderCustomPool:'Piscinas personalizadas',folderConstruction:'Construcción',folderDeck:'Deck',folderExtra:'Extras',folderGrading:'Nivelación para construcción',folderPlaster:'Acabado de plaster',folderPlumming:'Plomería',folderRebar:'Varilla y refuerzo',folderRenovation:'Renovación',folderResurfacing:'Recubrimiento',folderRetainingWalls:'Muros de contención',folderShotcreteShell:'Casco de shotcrete',folderTileAndCoping:'Azulejos y bordes',folderTransformation:'Transformación',estimateLabel:'Cotización gratis',estimateTitle:'Cuéntanos sobre tu proyecto.',estimateText:'Comparte algunos detalles y nuestro equipo se comunicará contigo para hablar sobre tu piscina, hardscape o renovación.',nameLabel:'Nombre',emailLabel:'Correo electrónico',phoneLabel:'Teléfono',projectTypeLabel:'Tipo de proyecto',timelineLabel:'Plazo',budgetLabel:'Rango de presupuesto',detailsLabel:'Detalles del proyecto',requestEstimate:'Solicita una cotización',galleryHeroLabel:'Nuestro trabajo',galleryHeroTitle:'Galería<br>de proyectos',galleryHeroText:'Conoce la calidad detrás de las piscinas, espacios exteriores, fuentes y áreas de convivencia de EMV.',galleryIntroLabel:'Diseñado para tu patio',galleryIntroTitle:'Ideas que inspiran.',galleryIntroText:'Cada proyecto comienza con un plan claro y termina con un espacio exterior hecho para la vida real. Mira ejemplos de nuestro trabajo.',galleryCollectionLabel:'Explora la colección',galleryCollectionTitle:'Proyectos destacados',startProject:'Comienza tu proyecto',readyLabel:'Cuando estés listo',readyTitle:'Construyamos algo hermoso.',aboutHeroLabel:'La diferencia EMV',aboutHeroTitle:'Construido con<br>experiencia.',aboutHeroText:'Diseño pensado, comunicación clara y construcción duradera para los lugares donde sucede la vida.',aboutStoryLabel:'Quiénes somos',aboutStoryTitle:'Espacios exteriores hechos para ti.',aboutStoryText1:'EMV Custom Pools & Restoration crea y restaura espacios exteriores en Wake Forest y el Triángulo. Unimos la construcción de piscinas, los hardscapes y la restauración para que tu proyecto se planifique como un espacio completo.',aboutStoryText2:'Desde la primera conversación hasta el acabado final, nuestro objetivo es simple: ofrecer trabajo de calidad, expectativas claras y un resultado que tu familia disfrute por años.',talkTeam:'Habla con nuestro equipo',guidesLabel:'Lo que nos guía',guidesTitle:'Calidad que ves. Servicio que sientes.',craftTitle:'Experiencia',craftText:'Cada superficie, borde y acabado importa. Nos enorgullecen los detalles que hacen que un proyecto se sienta completo.',communicationTitle:'Comunicación clara',communicationText:'Mereces saber qué está sucediendo, qué sigue y cómo se está utilizando tu inversión.',valueTitle:'Valor duradero',valueText:'Construimos con materiales duraderos y soluciones prácticas que se ven hermosas y funcionan a largo plazo.',whatWeDo:'Lo que hacemos',wholeBackyard:'Un solo equipo para todo tu patio.',servicesPool:'Construcción de piscinas',servicesPoolText:'Diseño, excavación, plomería, shotcrete y acabados.',servicesOutdoor:'Hardscapes y vida exterior',servicesOutdoorText:'Decks, patios, pasillos y espacios diseñados para tu hogar.',servicesRestore:'Renovación de piscinas',servicesRestoreText:'Reparaciones, recubrimientos, azulejos, bordes y mejoras.',letsStart:'Comencemos',visionTitle:'¿Tienes una visión para tu patio?',visionText:'Cuéntanos qué imaginas y te ayudaremos a dar el siguiente paso.'
	}
};

const appState={lang:localStorage.getItem('emv-language')||'en'};
const applyTranslations=(lang)=>{
	const t=translations[lang] || translations.en;
	document.querySelectorAll('[data-i18n]').forEach(el=>{const value=t[el.dataset.i18n];if(value==null)return;const attr=el.dataset.i18nAttr;if(attr)el.setAttribute(attr,value);else el.innerHTML=value;});
	document.documentElement.lang=lang;
	document.querySelectorAll('.lang-btn').forEach(btn=>{
		btn.classList.toggle('active',btn.dataset.lang===lang);
	});
	localStorage.setItem('emv-language',lang);
};

document.querySelectorAll('.lang-btn').forEach(btn=>{
	btn.addEventListener('click',()=>{
		appState.lang=btn.dataset.lang;
		applyTranslations(appState.lang);
	});
});
applyTranslations(appState.lang);

const estimateForm=document.getElementById('estimateForm');
if(estimateForm) estimateForm.addEventListener('submit',e=>{
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
	window.location.href=`mailto:emvpools007@gmail.com?cc=admin%40mdmsolutionlab.com&subject=${subject}&body=${body}`;
	if(formStatus){formStatus.textContent='Your email app is opening with your estimate details.';}
	estimateForm.reset();
});

const consultationForm=document.getElementById('consultationForm');
if(consultationForm) consultationForm.addEventListener('submit',e=>{
	e.preventDefault();
	const formData=new FormData(consultationForm);
	const value=name=>(formData.get(name)||'Not specified').toString().trim();
	const firstName=value('firstName'),lastName=value('lastName'),phone=value('phone'),email=value('email'),address=value('address'),projectType=value('projectType'),budget=value('budget'),timeline=value('timeline'),message=value('message');
	const inspiration=Array.prototype.map.call(consultationForm.elements.inspiration.files,file=>file.name).join(', ')||'None uploaded';
	const backyard=Array.prototype.map.call(consultationForm.elements.backyard.files,file=>file.name).join(', ')||'None uploaded';
	const subject=encodeURIComponent(`Consultation Request - ${projectType}`);
	const body=encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nProject Address / City: ${address}\nProject Type: ${projectType}\nEstimated Budget: ${budget}\nDesired Start Time: ${timeline}\n\nProject Details:\n${message}\n\nInspiration Photos: ${inspiration}\nBackyard Photos: ${backyard}`);
	window.location.href=`mailto:emvpools007@gmail.com?cc=admin%40mdmsolutionlab.com&subject=${subject}&body=${body}`;
	const status=consultationForm.querySelector('.form-status');
	if(status)status.textContent='Your email app is opening with your consultation details.';
});

const imageSources=[
	['assets/Custom Pool/81005317928__20C879D9-C3C2-4F40-9027-52E24132108C.fullsizerender.jpg','Custom Pool'],['assets/Custom Pool/Completed_Projects_01_PRO.jpg','Completed Project'],['assets/Custom Pool/emvpool spa.png','Pool & Spa'],['assets/Custom Pool/emvpool whole backyard.png','Whole Backyard'],['assets/Custom Pool/emvwholebackyard.png','Backyard Living'],['assets/Custom Pool/EMV_Completed_Backyard_Pool_Fountains_Enhanced_HQ.jpg','Backyard Pool'],['assets/Custom Pool/EMV_Completed_Backyard_Pool_Wide_Enhanced_HQ.jpg','Completed Pool'],['assets/Custom Pool/EMV_Completed_Modern_Rectangular_Pool_Enhanced_HQ.jpg','Modern Pool'],['assets/Custom Pool/EMV_Pool_Construction_Gallery_Enhanced_HQ.jpg','Pool Construction'],['assets/Custom Pool/evmpoolview.png','Pool View'],['assets/Custom Pool/IMG_1684.PNG','Custom Pool'],['assets/Custom Pool/IMG_1685.PNG','Custom Pool'],['assets/Custom Pool/IMG_20260702_185526243_HDR.jpg','Custom Pool'],['assets/Custom Pool/IMG_3915.JPG','Completed Pool'],['assets/Custom Pool/new-pool-construction-retaining-wall-01.jpg','Pool with Retaining Wall'],['assets/Custom Pool/polishedpoolconstruction.png','Pool Construction'],['assets/Custom Pool/pool-and-raised-spa-overview-03.jpg','Pool & Raised Spa'],['assets/Custom Pool/pool-bubblers-and-sheer-descent-02.jpg','Pool Water Feature'],['assets/Custom Pool/pool-hq-01.jpg','Custom Pool & Spa'],['assets/Custom Pool/Pool_Website_HQ_01.jpg','Pool Design'],['assets/Custom Pool/Pool_Website_HQ_02.jpg','Pool Installation'],['assets/Custom Pool/Pool_Website_HQ_03.jpg','Outdoor Pool'],['assets/Custom Pool/POOOL.jpg','Custom Pool'],['assets/Custom Pool/project-1.jpg','Custom Pool'],['assets/Custom Pool/project-2.jpg','Outdoor Living'],['assets/Custom Pool/project-4.png','Pool Restoration'],['assets/Custom Pool/project-5.jpg','Custom Pool'],['assets/Custom Pool/raised-spa-detail-02.jpg','Raised Spa'],['assets/Custom Pool/raised-spa-pool-installation-01.jpg','Raised Spa Installation'],['assets/Custom Pool/website_professional_07.jpg','Completed Project'],['assets/Custom Pool/website_professional_08.jpg','Completed Project'],['assets/Custom Pool/website_professional_10.jpg','Completed Project']
];

const galleryCatalog={
	custom:[
		['assets/Custom Pool/81005317928__20C879D9-C3C2-4F40-9027-52E24132108C.fullsizerender.jpg','Custom pool project'],['assets/Custom Pool/Completed_Projects_01_PRO.jpg','Completed project'],['assets/Custom Pool/emvpool spa.png','Pool and spa'],['assets/Custom Pool/emvpool whole backyard.png','Whole backyard'],['assets/Custom Pool/emvwholebackyard.png','Backyard living'],['assets/Custom Pool/EMV_Completed_Backyard_Pool_Fountains_Enhanced_HQ.jpg','Backyard pool with fountains'],['assets/Custom Pool/EMV_Completed_Backyard_Pool_Wide_Enhanced_HQ.jpg','Completed backyard pool'],['assets/Custom Pool/EMV_Completed_Modern_Rectangular_Pool_Enhanced_HQ.jpg','Modern rectangular pool'],['assets/Custom Pool/EMV_Pool_Construction_Gallery_Enhanced_HQ.jpg','Pool construction'],['assets/Custom Pool/evmpoolview.png','Pool view'],['assets/Custom Pool/IMG_1684.PNG','Pool project detail'],['assets/Custom Pool/IMG_1685.PNG','Pool project detail'],['assets/Custom Pool/IMG_20260702_185526243_HDR.jpg','Pool project detail'],['assets/Custom Pool/IMG_3915.JPG','Completed pool'],['assets/Custom Pool/new-pool-construction-retaining-wall-01.jpg','Pool with retaining wall'],['assets/Custom Pool/polishedpoolconstruction.png','Pool construction'],['assets/Custom Pool/pool-and-raised-spa-overview-03.jpg','Pool and raised spa'],['assets/Custom Pool/pool-bubblers-and-sheer-descent-02.jpg','Pool water feature'],['assets/Custom Pool/pool-hq-01.jpg','Custom pool and spa'],['assets/Custom Pool/Pool_Website_HQ_01.jpg','Pool design'],['assets/Custom Pool/Pool_Website_HQ_02.jpg','Pool installation'],['assets/Custom Pool/Pool_Website_HQ_03.jpg','Outdoor pool'],['assets/Custom Pool/POOOL.jpg','Pool project'],['assets/Custom Pool/project-1.jpg','Paver patio'],['assets/Custom Pool/project-2.jpg','Outdoor living project'],['assets/Custom Pool/project-4.png','Pool restoration'],['assets/Custom Pool/project-5.jpg','Pool project'],['assets/Custom Pool/raised-spa-detail-02.jpg','Raised spa detail'],['assets/Custom Pool/raised-spa-pool-installation-01.jpg','Raised spa installation'],['assets/Custom Pool/website_professional_07.jpg','Completed project'],['assets/Custom Pool/website_professional_08.jpg','Completed project'],['assets/Custom Pool/website_professional_10.jpg','Completed project']
	],
	construction:[
		['assets/Construction/dji_fly_20260814_073130_0338_1786663124042_photo.jpg','Aerial construction view'],['assets/Construction/dji_fly_20260818_152002_0357_1787080123122_photo.jpg','Aerial construction view'],['assets/Construction/EMV_Braced_Gunite_Pool_Enhanced_HQ.jpg','Braced gunite pool'],['assets/Construction/EMV_Freeform_Pool_Shell_Enhanced_HQ.jpg','Freeform pool shell'],['assets/Construction/EMV_Gunite_Pool_Construction_Enhanced_HQ.jpg','Gunite pool construction'],['assets/Construction/EMV_Luxury_Patio_Pool_Shell_Enhanced_HQ.jpg','Luxury patio pool shell'],['assets/Construction/EMV_Overhead_Pool_and_Spa_Shell_Enhanced_HQ.jpg','Pool and spa shell'],['assets/Construction/EMV_Rectangular_Pool_Shell_Enhanced_HQ.jpg','Rectangular pool shell'],['assets/Construction/Form and dig .jpg','Pool forming'],['assets/Construction/new-pool-construction-modern-home-01.jpg','New pool construction'],['assets/Construction/new-pool-construction-modern-home-02.jpg','New pool construction'],['assets/Construction/new-pool-construction-raised-spa-01.jpg','Raised spa construction'],['assets/Construction/new-pool-construction-raised-wall-02.jpg','Raised wall construction'],['assets/Construction/new-pool-construction-raised-wall-03.jpg','Raised wall construction'],['assets/Construction/Pool_Construction_01_PRO.jpg','Pool construction'],['assets/Construction/Pool_Construction_02_PRO.jpg','Pool construction'],['assets/Construction/Pool_Construction_03_PRO.jpg','Pool construction'],['assets/Construction/Pool_Construction_04_PRO.jpg','Pool construction'],['assets/Construction/Pool_Construction_05_PRO.jpg','Pool construction'],['assets/Construction/Pool_Construction_06_PRO.jpg','Pool construction'],['assets/Construction/Pool_Construction_07_PRO.jpg','Pool construction'],['assets/Construction/Pool_Construction_08_PRO.jpg','Pool construction'],['assets/Construction/Pool_Construction_09_PRO.jpg','Pool construction'],['assets/Construction/Retaining walls shotcrete .jpg','Retaining wall shotcrete'],['assets/Construction/Retaining walls, steps and pool .jpg','Retaining walls and steps'],['assets/Construction/Shotcrete (1).jpg','Shotcrete shell'],['assets/Construction/Shotcrete (2).jpg','Shotcrete shell'],['assets/Construction/Shotcrete .jpg','Shotcrete shell'],['assets/Construction/Untitled design (1).png','Pool construction detail'],['assets/Construction/Untitled design (2).png','Pool construction detail'],['assets/Construction/Untitled design (3).png','Pool construction detail'],['assets/Construction/website_professional_01.jpg','Pool construction project'],['assets/Construction/website_professional_02.jpg','Pool construction project'],['assets/Construction/website_professional_03.jpg','Pool construction project'],['assets/Construction/website_professional_04.jpg','Pool construction project'],['assets/Construction/website_professional_09.jpg','Pool construction project']
	],
	features:[
		['assets/Construction/pool-bubblers-and-waterfall-wall-01.jpg','Bubblers and waterfall wall'],['assets/Construction/pool-hq-02.jpg','Pool water feature'],['assets/Construction/pool-wall-water-features-01.jpg','Pool wall water feature'],['assets/Construction/pool-water-feature-jets-installation-01.jpg','Water feature jets'],['assets/Construction/Pavers_and_Patios_01_PRO.jpg','Pavers and patio'],['assets/Construction/Pool_and_Spa_01_PRO.jpg','Pool and spa outdoor living'],['assets/Extra/Glass tile .jpg','Glass tile detail'],['assets/Extra/Handrails install.PNG','Handrail installation'],['assets/Extra/IMG_0770.PNG','Outdoor feature'],['assets/Extra/Slide install .jpg','Pool slide installation'],['assets/Grading site for construction/Grading and start travertine deck .jpg','Travertine deck construction'],['assets/Grading site for construction/Untitled design (6).png','Sitework and grading'],['assets/TILE AND COPING/Travertine deck and pools finished .jpg','Finished travertine deck']
	],
	plumbing:[
		['assets/Plumming/EMV_Reinforced_Spa_Plumbing_Enhanced_HQ.jpg','Reinforced spa plumbing'],['assets/Plumming/Form, rebar and long plumbing .jpg','Pool plumbing installation'],['assets/Plumming/Pool_Plumbing_01_PRO.jpg','Pool plumbing'],['assets/Plumming/Pool_Plumbing_03_PRO.jpg','Pool plumbing'],['assets/Plumming/Pool_Plumbing_04_PRO.jpg','Pool plumbing'],['assets/Plumming/Untitled design (4).png','Plumbing detail'],['assets/Plumming/Untitled design (5).png','Plumbing detail'],['assets/Plumming/Untitled design.png','Plumbing detail'],['assets/Rebar/EMV_Freeform_Pool_Rebar_and_Forming_Enhanced_HQ.jpg','Pool rebar and forming'],['assets/Rebar/EMV_Pool_Deck_Rebar_Preparation_Enhanced_HQ.jpg','Pool deck rebar'],['assets/Rebar/Form, rebar, plumbing.jpg','Rebar and plumbing']
	],
	finishes:[
		['assets/Resurfacing/EMV_Raised_Spa_Construction_Enhanced_HQ.jpg','Raised spa finish'],['assets/Resurfacing/EMV_Stone_Veneer_and_Coping_Enhanced_HQ.jpg','Stone veneer and coping'],['assets/Resurfacing/pool-resurfacing-interior-finish-01.jpg','Pool resurfacing finish'],['assets/Resurfacing/Pool_Restoration_01_PRO.jpg','Pool restoration'],['assets/Resurfacing/Renovations .jpg','Pool renovation'],['assets/Resurfacing/Tile, coping and splitface .PNG','Tile, coping and splitface'],['assets/TILE AND COPING/Tile_and_Coping_01_PRO.jpg','Tile and coping']
	],
	deck:[['assets/DECK/Concrete Sub decks .jpg','Concrete subdecks'],['assets/DECK/Deck_Construction_01_PRO.jpg','Deck construction'],['assets/DECK/EMV_Pool_Deck_Rebar_Preparation.jpg','Pool deck rebar'],['assets/DECK/Grading and start travertine deck .jpg','Travertine deck'],['assets/DECK/Tile, coping, splitface and deck .jpg','Tile, coping and deck']],
	extra:[['assets/Extra/Glass tile .jpg','Glass tile'],['assets/Extra/Handrails install.PNG','Handrail installation'],['assets/Extra/IMG_0770.PNG','Project detail'],['assets/Extra/IMG_3619.jpg','Project detail'],['assets/Extra/Slide install .jpg','Slide installation']],
	grading:[['assets/Grading site for construction/EMV_Pool_Excavation_and_Forming_Enhanced_HQ.jpg','Pool excavation'],['assets/Grading site for construction/Grading and start travertine deck .jpg','Grading and deck'],['assets/Grading site for construction/Remove forms and backfill.jpg','Backfill work'],['assets/Grading site for construction/Remove the forms and backfill .jpg','Backfill work'],['assets/Grading site for construction/Untitled design (6).png','Sitework and grading']],
	plaster:[['assets/PLASTER/Plaster .jpg','Pool plaster finish']],
	plumming:[['assets/Plumming/EMV_Pool_Forming_Rebar_Long_Plumbing.jpg','Pool forming and plumbing'],['assets/Plumming/EMV_Reinforced_Spa_Plumbing_Enhanced_HQ.jpg','Reinforced spa plumbing'],['assets/Plumming/Form, rebar and long plumbing .jpg','Long plumbing'],['assets/Plumming/Form, rebar, plumbing.jpg','Pool plumbing'],['assets/Plumming/Pool_Plumbing_01_PRO.jpg','Pool plumbing'],['assets/Plumming/Pool_Plumbing_03_PRO.jpg','Pool plumbing'],['assets/Plumming/Pool_Plumbing_04_PRO.jpg','Pool plumbing'],['assets/Plumming/Untitled design (4).png','Plumbing detail'],['assets/Plumming/Untitled design (5).png','Plumbing detail'],['assets/Plumming/Untitled design.png','Plumbing detail']],
	rebar:[['assets/Rebar/EMV_Freeform_Pool_Rebar_and_Forming_Enhanced_HQ.jpg','Pool rebar and forming'],['assets/Rebar/EMV_Freeform_Pool_Rebar_Forming_Plumbing.jpg','Rebar and plumbing'],['assets/Rebar/EMV_Pool_Deck_Rebar_Preparation_Enhanced_HQ.jpg','Pool deck rebar'],['assets/Rebar/EMV_Pool_Forming_Excavation_Rebar.jpg','Excavation and rebar'],['assets/Rebar/Form, rebar, plumbing.jpg','Rebar and plumbing']],
	renovation:[['assets/RENOVATION/IMG_7838.jpg','Pool renovation'],['assets/RENOVATION/IMG_8436.jpg','Pool renovation'],['assets/RENOVATION/IMG_8575.jpg','Pool renovation'],['assets/RENOVATION/Renovations (1).jpg','Pool renovation'],['assets/RENOVATION/Renovations .jpg','Pool renovation']],
	resurfacing:[['assets/Resurfacing/EMV_Raised_Spa_Construction_Enhanced_HQ.jpg','Raised spa finish'],['assets/Resurfacing/EMV_Stone_Veneer_and_Coping_Enhanced_HQ.jpg','Stone veneer and coping'],['assets/Resurfacing/pool-resurfacing-interior-finish-01.jpg','Pool resurfacing'],['assets/Resurfacing/Pool_Restoration_01_PRO.jpg','Pool restoration'],['assets/Resurfacing/Renovations .jpg','Renovation'],['assets/Resurfacing/Tile, coping and splitface .PNG','Tile, coping and splitface']],
	retainingWalls:[['assets/RETAINING WALLS/Retaining walls shotcrete .jpg','Retaining wall shotcrete'],['assets/RETAINING WALLS/Retaining walls, steps and pool .jpg','Retaining walls and steps']],
	shotcreteShell:[['assets/SHORTCRETE_SHELL/Retaining walls shotcrete .jpg','Shotcrete retaining wall'],['assets/SHORTCRETE_SHELL/Shotcrete (1).jpg','Shotcrete shell'],['assets/SHORTCRETE_SHELL/Shotcrete (2).jpg','Shotcrete shell'],['assets/SHORTCRETE_SHELL/Shotcrete .jpg','Shotcrete shell']],
	tileAndCoping:[['assets/TILE AND COPING/Coping and splitface.jpg','Coping and splitface'],['assets/TILE AND COPING/EMV_Raised_Spa_Tile_and_Coping_Installation.jpg','Raised spa tile and coping'],['assets/TILE AND COPING/EMV_Stone_Veneer_and_Pool_Coping_Detail.jpg','Stone veneer and coping'],['assets/TILE AND COPING/Glass tile (1).jpg','Glass tile'],['assets/TILE AND COPING/Glass tile .jpg','Glass tile'],['assets/TILE AND COPING/Tile, coping and splitface .jpg','Tile and coping'],['assets/TILE AND COPING/Tile_and_Coping_01_PRO.jpg','Tile and coping']],
	transformation:[['assets/TRANSFORMATION/2EMV_Pool_Before_After_02.jpg','Pool transformation'],['assets/TRANSFORMATION/3EMV_Travertine_Pool_Before_After.jpg','Travertine transformation'],['assets/TRANSFORMATION/EMV_Pool_Before_After.jpg','Pool before and after']]
};

document.querySelectorAll('[data-gallery-category]').forEach(section=>{
	const items=galleryCatalog[section.dataset.galleryCategory]||[];
	const grid=section.querySelector('[data-gallery-grid]');
	const count=section.querySelector('[data-gallery-count]');
	if(count) count.textContent=`${items.length} projects`;
	if(grid) grid.innerHTML=items.map(([src,title])=>`<figure tabindex="0"><img loading="lazy" src="${src}" alt="${title}"><figcaption>${title}</figcaption></figure>`).join('');
});

const mdmFeed=document.querySelector('[data-mdm-feed]');
if(mdmFeed){
	const feedTrack=mdmFeed.querySelector('[data-mdm-feed-track]');
	const feedStatus=mdmFeed.querySelector('[data-mdm-feed-status]');
	const feedPrev=mdmFeed.querySelector('[data-mdm-prev]'),feedNext=mdmFeed.querySelector('[data-mdm-next]');
	let feedIndex=0,feedTimer,feedItems=[];
	const feedVisible=()=>innerWidth<=560?1:innerWidth<=850?2:3;
	const moveFeed=(next,restart=true)=>{if(!feedItems.length)return;const max=Math.max(0,feedItems.length-feedVisible());feedIndex=Math.max(0,Math.min(next,max));const card=feedTrack.querySelector('.mdm-feed-card');const gap=16;const width=card?card.getBoundingClientRect().width:0;feedTrack.style.transform=`translateX(-${feedIndex*(width+gap)}px)`;if(restart)startFeed()};
	const startFeed=()=>{clearInterval(feedTimer);if(!document.hidden&&feedItems.length>feedVisible())feedTimer=setInterval(()=>moveFeed(feedIndex>=feedItems.length-feedVisible()?0:feedIndex+1,false),4500)};
	const renderFeed=(items)=>{feedItems=items;feedTrack.textContent='';items.forEach((item,index)=>{const card=document.createElement('article');card.className='mdm-feed-card';const image=document.createElement('img');image.src=item.thumbnailUrl||item.imageUrl;image.alt=item.alt||item.title||'EMV Custom Pools social post';image.loading=index<3?'eager':'lazy';image.decoding='async';card.append(image);if(item.title){const title=document.createElement('p');title.textContent=item.title;card.append(title)}if(item.sourceUrl){const link=document.createElement('a');link.href=item.sourceUrl;link.target='_blank';link.rel='noopener noreferrer';link.textContent='View post →';card.append(link)}feedTrack.append(card)});if(feedStatus)feedStatus.textContent=items.length?'':'No approved social posts are available yet.';moveFeed(0,false);startFeed()};
	if(feedPrev)feedPrev.addEventListener('click',()=>moveFeed(feedIndex-1));
	if(feedNext)feedNext.addEventListener('click',()=>moveFeed(feedIndex+1));
	mdmFeed.addEventListener('mouseenter',()=>clearInterval(feedTimer));mdmFeed.addEventListener('mouseleave',startFeed);
	addEventListener('resize',()=>moveFeed(feedIndex,false));document.addEventListener('visibilitychange',startFeed);
	fetch('/.netlify/functions/mdm-gallery?limit=12',{headers:{Accept:'application/json'}}).then(response=>{if(!response.ok)throw new Error('Feed unavailable');return response.json()}).then(payload=>renderFeed(Array.isArray(payload.items)?payload.items:[])).catch(()=>{if(feedStatus)feedStatus.textContent='The latest social posts will appear here after the feed is connected.'});
}

function shuffleArray(list){
	const shuffled=[...list];
	for(let i=shuffled.length-1;i>0;i--){
		const j=Math.floor(Math.random()*(i+1));
		[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
	}
	return shuffled;
}

const windowEl=document.querySelector('.gallery-window'),track=document.querySelector('.gallery-track'),dotsWrap=document.querySelector('.dots'),pause=document.querySelector('.pause');
if(windowEl&&track&&dotsWrap){
	track.innerHTML=shuffleArray(imageSources).map(([src,title])=>`<figure><img loading="lazy" decoding="async" src="${src}" alt="${title}"></figure>`).join('');
	const slides=[...track.querySelectorAll('figure')];
	let index=0,timer,touchStart=0,isPaused=false;
	slides.slice(0,4).forEach(slide=>{const clone=slide.cloneNode(true);clone.classList.add('gallery-clone');track.append(clone)});
	slides.forEach((_,i)=>{const dot=document.createElement('button');dot.type='button';dot.setAttribute('aria-label',`Show project ${i+1}`);dot.addEventListener('click',()=>show(i));dotsWrap.append(dot)});
	const dots=[...dotsWrap.children];
	function visible(){return innerWidth<=560?1:innerWidth<=850?2:4}
	function show(next,restart=true){const max=slides.length-1;index=next>max?0:next<0?max:next;const width=slides.length?slides[0].getBoundingClientRect().width:0;track.style.transform=`translateX(-${index*(width+12.8)}px)`;slides.forEach((slide,i)=>slide.classList.toggle('is-visible',i>=index&&i<index+visible()));dots.forEach((d,i)=>d.classList.toggle('active',i===index));if(restart)start()}
	function start(){clearInterval(timer);if(!isPaused)timer=setInterval(()=>{const max=Math.max(0,slides.length-visible());show(index>=max?0:index+1,false)},2500)}
	const previous=document.querySelector('.prev'),nextButton=document.querySelector('.next');
	if(previous) previous.addEventListener('click',()=>show(index-1));
	if(nextButton) nextButton.addEventListener('click',()=>show(index+1));
	if(pause) pause.addEventListener('click',()=>{isPaused=!isPaused;pause.textContent=isPaused?'▶ Play':'Ⅱ Pause';pause.setAttribute('aria-pressed',String(isPaused));start()});
	windowEl.addEventListener('touchstart',e=>touchStart=e.changedTouches[0].screenX,{passive:true});windowEl.addEventListener('touchend',e=>{const distance=e.changedTouches[0].screenX-touchStart;if(Math.abs(distance)>45)show(index+(distance<0?1:-1))},{passive:true});
	addEventListener('resize',()=>show(index,false));document.addEventListener('visibilitychange',()=>document.hidden?clearInterval(timer):start());show(0,false);start();
}

const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('#nav a')];
addEventListener('scroll',()=>{const visibleSections=sections.filter(s=>s.getBoundingClientRect().top<160);const lastSection=visibleSections[visibleSections.length-1];const active=lastSection?lastSection.id:'home';links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${active}`))},{passive:true});
