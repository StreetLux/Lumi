const body = document.body;
const loader = document.querySelector('.page-loader');
const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const revealEls = document.querySelectorAll('.reveal');
const counters = document.querySelectorAll('[data-counter]');
const form = document.querySelector('[data-form]');
const formNote = document.querySelector('[data-form-note]');
const scrollProgress = document.querySelector('[data-scroll-progress]');
const cursorGlow = document.querySelector('[data-cursor-glow]');
const transitionLayer = document.querySelector('.page-transition');
const menuAccordions = document.querySelectorAll('.menu-accordion');

const langButtons = document.querySelectorAll('[data-lang]');
let currentLang = 'eng';

const translations = {
  eng: {
    htmlLang: 'en',
    title: 'LUMI Restaurant — Events & Dining',
    description: 'LUMI Restaurant in Batumi for panoramic dining, private events, live music, cuisine, cocktails, and WhatsApp reservations.',
    nav: ['SPACE', 'CUISINE', 'LIVE MUSIC', 'MENU', 'CONTACT US'],
    contactCta: 'CONTACT US',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    heroEyebrow: 'LUMI Restaurant · Batumi · 11th floor',
    heroTitle: 'LUMI Restaurant: The Perfect Venue for Your Event',
    heroText: 'Panoramic views, cuisine, live music, and full support for birthdays, weddings, private meetings, and special evenings in Batumi.',
    heroButtons: ['Book Your Event', 'View Menu', 'Explore Gallery'],
    capacityLabel: 'Capacity',
    capacityStrong: '200 guests',
    capacityText: 'Restaurant capacity, conference room, panoramic views, and event support.',
    spacesEyebrow: 'Space for every format',
    spacesTitle: 'From intimate meetings to large-scale events, LUMI is ready for any occasion.',
    stats: ['Guests · restaurant capacity', 'Guests · conference room', 'Panoramic city view'],
    featureTitle: 'Modern interior, flexible layout, and service for every occasion.',
    featureText: 'Panoramic seating, warm lighting, private event support, and fast WhatsApp reservations for guests.',
    featureList: ['Wedding and birthday celebrations', 'Conference/private room support', 'Fast WhatsApp reservations'],
    cuisineEyebrow: 'Signature cuisine',
    cuisineTitle: 'Every dish, drink, and detail adds special meaning to your event.',
    cuisineCards: [
      ['Chef’s menu', 'Signature dishes with a modern Georgian-European direction.'],
      ['Banquet menu', 'For groups, celebrations, banquets, and private events.'],
      ['Cocktail bar', 'Classic and signature drinks with strong visual presentation.']
    ],
    galleryEyebrow: 'Gallery',
    galleryTitle: 'Restaurant interiors, food, bar, and event atmosphere.',
    galleryItems: ['Interior', 'Cuisine', 'Bar', 'Events', 'Pizza', 'Georgian', 'Fresh', 'Khachapuri'],
    eventsEyebrow: 'Live music & events',
    eventsTitle: 'Live Music — The Soul of the Evening',
    eventsText: 'Weekly performances from 9:30 PM to 12:00 AM create a warm atmosphere and unforgettable emotions for guests.',
    eventsList: ['Live music nights', 'Private decoration', 'Photo & video support', 'Personalized event manager'],
    menuEyebrow: 'Restaurant menu',
    menuTitle: 'Choose a section and open the menu instantly.',
    menuCards: [
      ['01 · Kitchen', 'Chef’s signature dishes', 'Modern Georgian-European cuisine, beautiful plating, and dishes built for both dinner guests and event tables.'],
      ['02 · Bar', 'Signature cocktails', 'Signature cocktails, classic drinks, draft beverages, and wine served with the right presentation.'],
      ['03 · Groups', 'Event & banquet dining', 'Menus for birthdays, weddings, corporate dinners, private celebrations, and live music evenings.']
    ],
    contactEyebrow: 'Contact us',
    contactTitle: 'Book your event today',
    contactText: 'Contact LUMI to discuss the date, number of guests, menu, decor, live music, and event details.',
    formLabels: ['Name', 'Event type', 'Message'],
    formPlaceholders: ['Your name', 'Date, guests, special wishes'],
    eventOptions: ['Choose event', 'Birthday', 'Wedding', 'Corporate dinner', 'Private party'],
    formButton: 'Send WhatsApp Request',
    openingWhatsapp: 'Opening WhatsApp...',
    preparedWhatsapp: 'Request prepared in WhatsApp.',
    footer: '© 2026 LUMI. Restaurant · events · panoramic dining · Batumi.',
    backTop: 'Back to top',
    whatsappMessage: ({ name, eventType, message }) => `Hi, my name is ${name}. Request type: ${eventType}. Details: ${message}`
  },
  rus: {
    htmlLang: 'ru',
    title: 'LUMI Restaurant — ресторан и мероприятия',
    description: 'LUMI Restaurant в Батуми: панорамный ресторан, мероприятия, живая музыка, кухня, коктейли и бронирование через WhatsApp.',
    nav: ['ПРОСТРАНСТВО', 'КУХНЯ', 'ЖИВАЯ МУЗЫКА', 'МЕНЮ', 'СВЯЗАТЬСЯ'],
    contactCta: 'СВЯЗАТЬСЯ',
    menuOpen: 'Открыть меню',
    menuClose: 'Закрыть меню',
    heroEyebrow: 'LUMI Restaurant · Батуми · 11 этаж',
    heroTitle: 'LUMI Restaurant: идеальное место для вашего события',
    heroText: 'Панорамные виды, кухня, живая музыка и поддержка для дней рождения, свадеб, встреч и особенных вечеров в Батуми.',
    heroButtons: ['Забронировать событие', 'Посмотреть меню', 'Открыть галерею'],
    capacityLabel: 'Вместимость',
    capacityStrong: '200 гостей',
    capacityText: 'Зал ресторана, конференц-комната, панорамный вид и помощь с организацией события.',
    spacesEyebrow: 'Пространство для любого формата',
    spacesTitle: 'От камерных встреч до больших событий — LUMI готов к любому поводу.',
    stats: ['Гостей · вместимость ресторана', 'Гостей · конференц-комната', 'Панорамный вид на город'],
    featureTitle: 'Современный интерьер, гибкая рассадка и сервис для любого события.',
    featureText: 'Панорамные места, тёплый свет, поддержка частных событий и быстрое бронирование через WhatsApp.',
    featureList: ['Свадьбы и дни рождения', 'Конференц-зал и private room', 'Быстрое бронирование в WhatsApp'],
    cuisineEyebrow: 'Фирменная кухня',
    cuisineTitle: 'Каждое блюдо, напиток и деталь делают событие особенным.',
    cuisineCards: [
      ['Меню от шефа', 'Фирменные блюда в современном грузино-европейском стиле.'],
      ['Банкетное меню', 'Для компаний, праздников, банкетов и частных событий.'],
      ['Коктейльный бар', 'Классические и авторские напитки с красивой подачей.']
    ],
    galleryEyebrow: 'Галерея',
    galleryTitle: 'Интерьер, кухня, бар и атмосфера мероприятий.',
    galleryItems: ['Интерьер', 'Кухня', 'Бар', 'Мероприятия', 'Пицца', 'Грузинское', 'Свежие блюда', 'Хачапури'],
    eventsEyebrow: 'Живая музыка и события',
    eventsTitle: 'Живая музыка — душа вечера',
    eventsText: 'Выступления с 21:30 до 00:00 создают тёплую атмосферу и запоминающиеся эмоции для гостей.',
    eventsList: ['Вечера живой музыки', 'Индивидуальный декор', 'Фото и видео поддержка', 'Персональный event-менеджер'],
    menuEyebrow: 'Меню ресторана',
    menuTitle: 'Выберите секцию и откройте меню мгновенно.',
    menuCards: [
      ['01 · Кухня', 'Фирменные блюда от шефа', 'Современная грузино-европейская кухня, красивая подача и блюда для ужина или event-стола.'],
      ['02 · Бар', 'Авторские коктейли', 'Авторские коктейли, классические напитки, разливные напитки и вино с правильной подачей.'],
      ['03 · Компании', 'Event & banquet dining', 'Меню для дней рождения, свадеб, корпоративных ужинов, частных праздников и вечеров с живой музыкой.']
    ],
    contactEyebrow: 'Связаться',
    contactTitle: 'Забронируйте событие сегодня',
    contactText: 'Напишите в LUMI, чтобы обсудить дату, количество гостей, меню, декор, живую музыку и детали события.',
    formLabels: ['Имя', 'Тип события', 'Сообщение'],
    formPlaceholders: ['Ваше имя', 'Дата, гости, пожелания'],
    eventOptions: ['Выберите событие', 'День рождения', 'Свадьба', 'Корпоративный ужин', 'Частная вечеринка'],
    formButton: 'Отправить запрос в WhatsApp',
    openingWhatsapp: 'Открываем WhatsApp...',
    preparedWhatsapp: 'Запрос подготовлен в WhatsApp.',
    footer: '© 2026 LUMI. Ресторан · события · панорамный dining · Батуми.',
    backTop: 'Наверх',
    whatsappMessage: ({ name, eventType, message }) => `Здравствуйте, меня зовут ${name}. Тип запроса: ${eventType}. Детали: ${message}`
  },
  geo: {
    htmlLang: 'ka',
    title: 'LUMI Restaurant — რესტორანი და ღონისძიებები',
    description: 'LUMI Restaurant ბათუმში: პანორამული რესტორანი, ღონისძიებები, ცოცხალი მუსიკა, სამზარეულო, კოქტეილები და WhatsApp ჯავშანი.',
    nav: ['სივრცე', 'სამზარეულო', 'ცოცხალი მუსიკა', 'მენიუ', 'კონტაქტი'],
    contactCta: 'კონტაქტი',
    menuOpen: 'მენიუს გახსნა',
    menuClose: 'მენიუს დახურვა',
    heroEyebrow: 'LUMI Restaurant · ბათუმი · მე-11 სართული',
    heroTitle: 'LUMI Restaurant: იდეალური ადგილი თქვენი ღონისძიებისთვის',
    heroText: 'პანორამული ხედები, სამზარეულო, ცოცხალი მუსიკა და მხარდაჭერა დაბადების დღეებისთვის, ქორწილებისთვის, შეხვედრებისთვის და განსაკუთრებული საღამოებისთვის ბათუმში.',
    heroButtons: ['ღონისძიების დაჯავშნა', 'მენიუს ნახვა', 'გალერეა'],
    capacityLabel: 'ტევადობა',
    capacityStrong: '200 სტუმარი',
    capacityText: 'რესტორნის სივრცე, საკონფერენციო ოთახი, პანორამული ხედი და ღონისძიების მხარდაჭერა.',
    spacesEyebrow: 'სივრცე ყველა ფორმატისთვის',
    spacesTitle: 'პატარა შეხვედრებიდან დიდ ღონისძიებამდე — LUMI მზად არის ნებისმიერი შემთხვევისთვის.',
    stats: ['სტუმარი · რესტორნის ტევადობა', 'სტუმარი · საკონფერენციო ოთახი', 'პანორამული ხედი ქალაქზე'],
    featureTitle: 'თანამედროვე ინტერიერი, მოქნილი განლაგება და სერვისი ნებისმიერი ღონისძიებისთვის.',
    featureText: 'პანორამული ადგილები, თბილი განათება, private event მხარდაჭერა და სწრაფი ჯავშანი WhatsApp-ში.',
    featureList: ['ქორწილები და დაბადების დღეები', 'საკონფერენციო/private room მხარდაჭერა', 'სწრაფი WhatsApp ჯავშანი'],
    cuisineEyebrow: 'საფირმო სამზარეულო',
    cuisineTitle: 'ყოველი კერძი, სასმელი და დეტალი ღონისძიებას განსაკუთრებულს ხდის.',
    cuisineCards: [
      ['შეფის მენიუ', 'საფირმო კერძები თანამედროვე ქართულ-ევროპული მიმართულებით.'],
      ['საბანკეტო მენიუ', 'ჯგუფებისთვის, დღესასწაულებისთვის, ბანკეტებისა და private events-ისთვის.'],
      ['კოქტეილ ბარი', 'კლასიკური და საფირმო სასმელები ძლიერი ვიზუალური პრეზენტაციით.']
    ],
    galleryEyebrow: 'გალერეა',
    galleryTitle: 'რესტორნის ინტერიერი, კერძები, ბარი და ღონისძიებების ატმოსფერო.',
    galleryItems: ['ინტერიერი', 'სამზარეულო', 'ბარი', 'ღონისძიებები', 'პიცა', 'ქართული', 'Fresh', 'ხაჭაპური'],
    eventsEyebrow: 'ცოცხალი მუსიკა და ღონისძიებები',
    eventsTitle: 'ცოცხალი მუსიკა — საღამოს სული',
    eventsText: 'გამოსვლები 21:30-დან 00:00-მდე ქმნის თბილ ატმოსფეროს და დაუვიწყარ ემოციებს სტუმრებისთვის.',
    eventsList: ['ცოცხალი მუსიკის საღამოები', 'ინდივიდუალური დეკორი', 'ფოტო და ვიდეო მხარდაჭერა', 'პერსონალური event მენეჯერი'],
    menuEyebrow: 'რესტორნის მენიუ',
    menuTitle: 'აირჩიეთ სექცია და მენიუ მაშინვე გაიხსნება.',
    menuCards: [
      ['01 · სამზარეულო', 'შეფის საფირმო კერძები', 'თანამედროვე ქართულ-ევროპული სამზარეულო, ლამაზი პრეზენტაცია და კერძები როგორც ვახშმისთვის, ისე event მაგიდისთვის.'],
      ['02 · ბარი', 'საფირმო კოქტეილები', 'საფირმო კოქტეილები, კლასიკური სასმელები, ჩამოსასხმელი სასმელები და ღვინო სწორი პრეზენტაციით.'],
      ['03 · ჯგუფები', 'ღონისძიება და ბანკეტი', 'მენიუები დაბადების დღეებისთვის, ქორწილებისთვის, კორპორატიული ვახშმებისთვის, private events-ისთვის და ცოცხალი მუსიკის საღამოებისთვის.']
    ],
    contactEyebrow: 'კონტაქტი',
    contactTitle: 'დაჯავშნეთ ღონისძიება დღეს',
    contactText: 'დაუკავშირდით LUMI-ს თარიღის, სტუმრების რაოდენობის, მენიუს, დეკორის, ცოცხალი მუსიკისა და დეტალების შესათანხმებლად.',
    formLabels: ['სახელი', 'ღონისძიების ტიპი', 'შეტყობინება'],
    formPlaceholders: ['თქვენი სახელი', 'თარიღი, სტუმრები, სურვილები'],
    eventOptions: ['აირჩიეთ ღონისძიება', 'დაბადების დღე', 'ქორწილი', 'კორპორატიული ვახშამი', 'private party'],
    formButton: 'WhatsApp მოთხოვნის გაგზავნა',
    openingWhatsapp: 'WhatsApp იხსნება...',
    preparedWhatsapp: 'მოთხოვნა მომზადებულია WhatsApp-ში.',
    footer: '© 2026 LUMI. რესტორანი · ღონისძიებები · პანორამული dining · ბათუმი.',
    backTop: 'ზემოთ დაბრუნება',
    whatsappMessage: ({ name, eventType, message }) => `გამარჯობა, მე ვარ ${name}. მოთხოვნის ტიპი: ${eventType}. დეტალები: ${message}`
  }
};

const setText = (selector, value) => {
  const el = document.querySelector(selector);
  if (el && typeof value === 'string') el.textContent = value;
};
const setAllText = (selector, values) => {
  document.querySelectorAll(selector).forEach((el, index) => {
    const value = Array.isArray(values) ? values[index % values.length] : values;
    if (typeof value === 'string') el.textContent = value;
  });
};
const setLabelText = (fieldName, value) => {
  const field = form?.querySelector(`[name="${fieldName}"]`);
  const label = field?.closest('label');
  const textNode = Array.from(label?.childNodes || []).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) textNode.textContent = `\n            ${value}\n            `;
};
const safeLocalStorage = {
  get(key) {
    try { return localStorage.getItem(key); } catch (_) { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch (_) {}
  }
};

const applyLanguage = (lang) => {
  const copy = translations[lang] || translations.eng;
  currentLang = translations[lang] ? lang : 'eng';
  document.documentElement.lang = copy.htmlLang;
  document.title = copy.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', copy.description);

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLang;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  setText('.loader-mark', 'LUMI');
  setText('.brand', 'LUMI');
  setAllText('.desktop-nav a, .mobile-menu > a:not(.mobile-cta)', copy.nav);
  setAllText('.header-cta, .mobile-cta', copy.contactCta);
  menuButton?.setAttribute('aria-label', mobileMenu?.classList.contains('open') ? copy.menuClose : copy.menuOpen);

  setText('.hero-content .eyebrow', copy.heroEyebrow);
  setText('.hero-content h1', copy.heroTitle);
  setText('.hero-text', copy.heroText);
  setAllText('.hero-buttons .btn', copy.heroButtons);
  setText('.hero-card span', copy.capacityLabel);
  setText('.hero-card strong', copy.capacityStrong);
  setText('.hero-card p', copy.capacityText);

  setText('#spaces .section-heading .eyebrow', copy.spacesEyebrow);
  setText('#spaces .section-heading h2', copy.spacesTitle);
  setAllText('#spaces .stat-card p', copy.stats);
  setText('#spaces .feature-copy h3', copy.featureTitle);
  setText('#spaces .feature-copy p', copy.featureText);
  setAllText('#spaces .feature-copy li', copy.featureList);

  setText('#cuisine .section-heading .eyebrow', copy.cuisineEyebrow);
  setText('#cuisine .section-heading h2', copy.cuisineTitle);
  document.querySelectorAll('#cuisine .glow-card').forEach((card, index) => {
    const item = copy.cuisineCards[index];
    if (!item) return;
    card.querySelector('h3').textContent = item[0];
    card.querySelector('p').textContent = item[1];
  });

  setText('#gallery .section-heading .eyebrow', copy.galleryEyebrow);
  setText('#gallery .section-heading h2', copy.galleryTitle);
  setAllText('#gallery .gallery-item span', copy.galleryItems);

  setText('#events .eyebrow', copy.eventsEyebrow);
  setText('#events h2', copy.eventsTitle);
  setText('#events p:not(.eyebrow)', copy.eventsText);
  setAllText('#events .event-list span', copy.eventsList);

  setText('#menu .section-heading .eyebrow', copy.menuEyebrow);
  setText('#menu .section-heading h2', copy.menuTitle);
  document.querySelectorAll('#menu .menu-card').forEach((card, index) => {
    const item = copy.menuCards[index];
    if (!item) return;
    card.querySelector('.menu-copy span').textContent = item[0];
    card.querySelector('.menu-copy h3').textContent = item[1];
    card.querySelector('.menu-copy p').textContent = item[2];
  });

  setText('#contact .eyebrow', copy.contactEyebrow);
  setText('#contact h2', copy.contactTitle);
  setText('#contact .contact-card > div p:not(.eyebrow)', copy.contactText);
  setLabelText('name', copy.formLabels[0]);
  setLabelText('event', copy.formLabels[1]);
  setLabelText('message', copy.formLabels[2]);
  form?.querySelector('[name="name"]')?.setAttribute('placeholder', copy.formPlaceholders[0]);
  form?.querySelector('[name="message"]')?.setAttribute('placeholder', copy.formPlaceholders[1]);
  form?.querySelectorAll('[name="event"] option').forEach((option, index) => {
    option.textContent = copy.eventOptions[index] || option.textContent;
    if (index > 0) option.value = copy.eventOptions[index] || option.value;
  });
  setText('.booking-form button[type="submit"]', copy.formButton);

  setText('.footer p', copy.footer);
  setText('.footer a', copy.backTop);
  safeLocalStorage.set('lumi-language', currentLang);
};

window.setLumiLanguage = (lang) => applyLanguage(lang);

document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-lang]');
  if (!button) return;
  event.preventDefault();
  applyLanguage(button.dataset.lang);
});

langButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

applyLanguage(safeLocalStorage.get('lumi-language') || 'eng');
window.addEventListener('pageshow', () => applyLanguage(safeLocalStorage.get('lumi-language') || currentLang || 'eng'));


window.addEventListener('load', () => {
  setTimeout(() => loader?.classList.add('loaded'), 60);
});

const syncHeader = () => {
  header?.classList.toggle('scrolled', window.scrollY > 30);
};
const syncProgress = () => {
  if (!scrollProgress) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
};
window.addEventListener('scroll', () => {
  syncHeader();
  syncProgress();
}, { passive: true });
syncHeader();
syncProgress();


menuAccordions.forEach((accordion) => {
  accordion.addEventListener('toggle', () => {
    if (!accordion.open) return;
    menuAccordions.forEach((other) => {
      if (other !== accordion) other.open = false;
    });
  });
});

const setMobileMenuState = (isOpen) => {
  if (!mobileMenu || !menuButton) return;
  mobileMenu.classList.toggle('open', isOpen);
  menuButton.classList.toggle('active', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? translations[currentLang].menuClose : translations[currentLang].menuOpen);
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  body.classList.toggle('menu-open', isOpen);
};

window.toggleLumiMenu = (event) => {
  event?.preventDefault?.();
  event?.stopPropagation?.();
  const shouldOpen = !mobileMenu?.classList.contains('open');
  setMobileMenuState(Boolean(shouldOpen));
  return false;
};

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMobileMenuState(false));
});
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMobileMenuState(false);
});


document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    const target = targetId && document.querySelector(targetId);
    if (!target || targetId === '#home') return;
    event.preventDefault();
    transitionLayer?.classList.add('active');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => transitionLayer?.classList.remove('active'), 180);
  });
});

window.addEventListener('pointermove', (event) => {
  if (!cursorGlow || window.matchMedia('(max-width: 920px)').matches) return;
  cursorGlow.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
}, { passive: true });


const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });
revealEls.forEach((el) => revealObserver.observe(el));

const animateCounter = (counter) => {
  const target = Number(counter.dataset.counter);
  const duration = 1400;
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    counter.textContent = Math.round(target * eased).toString();
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.45 });
counters.forEach((counter) => counterObserver.observe(counter));

const magneticButtons = document.querySelectorAll('.magnetic');
magneticButtons.forEach((button) => {
  button.addEventListener('mousemove', (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = '';
  });
});

const parallaxCards = document.querySelectorAll('.parallax-card');
window.addEventListener('scroll', () => {
  const isMobile = window.matchMedia('(max-width: 920px)').matches;
  parallaxCards.forEach((card) => {
    if (isMobile) {
      card.style.transform = '';
      return;
    }
    const speed = Number(card.dataset.speed || 0.1);
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const shift = (window.innerHeight / 2 - rect.top) * speed;
      card.style.transform = `translateY(${Math.max(Math.min(shift, 32), -32)}px)`;
    }
  });
}, { passive: true });

document.querySelectorAll('[data-tilt]').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    if (window.matchMedia('(max-width: 920px)').matches) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((0.5 - y / rect.height)) * 8;
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
    if (card.classList.contains('visible') || !card.classList.contains('reveal')) {
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    }
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
    card.style.removeProperty('--mx');
    card.style.removeProperty('--my');
  });
});


form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const copy = translations[currentLang] || translations.eng;
  const name = data.get('name') || (currentLang === 'geo' ? 'სტუმარი' : currentLang === 'rus' ? 'Гость' : 'Guest');
  const eventType = data.get('event') || copy.eventOptions[0];
  const message = data.get('message') || (currentLang === 'geo' ? 'მინდა ღონისძიების დაჯავშნა.' : currentLang === 'rus' ? 'Хочу забронировать событие.' : 'I want to book an event.');
  const text = encodeURIComponent(copy.whatsappMessage({ name, eventType, message }));
  if (formNote) formNote.textContent = copy.openingWhatsapp;
  window.open(`https://wa.me/995511484848?text=${text}`, '_blank', 'noopener');
  setTimeout(() => { if (formNote) formNote.textContent = copy.preparedWhatsapp; }, 450);
});
