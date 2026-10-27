const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =========================================================
   IDIOMA (ES por defecto en el HTML; EN desde este diccionario)
   ========================================================= */
const EN = {
  'nav.contact': 'Contact',
  'hero.kicker': 'Case files · 2022 — 2026',
  'hero.role': 'Junior Full Stack Developer — backend, web security & computer vision.',
  'hero.lead': 'Five projects, five worlds. Each file shifts the page into the look of the system I built.',
  'hero.cv': 'Download CV',
  'hero.scroll': 'Open the first file ↓',
  'idx.1': 'Confidential reports',
  'idx.prod': 'Product',
  'idx.5': 'TecMM Library',
  'k.problem': 'Problem', 'k.solution': 'Solution', 'k.security': 'Security', 'k.role': 'My role',
  'k.extra': 'Extra', 'k.vision': 'Vision', 'k.inside': 'Includes', 'k.quality': 'Quality',
  'c1.label': 'File 01 · Professional residency · 2026 — now',
  'c1.title': 'Confidential Citizen Reports Platform',
  'c1.lead': 'A platform to submit reports anonymously and follow them up without exposing anyone. The client and the source code are confidential.',
  'c1.p': 'Reports were made in person and on paper: no anonymity and no follow-up.',
  'c1.s': 'An installable web app (PWA) to report with evidence and track progress with a folio and key, plus an admin panel with automatic prioritization, heat map and role-based access.',
  'c1.sec': 'Security by design: encrypted sensitive data, two-factor authentication, audit log and abuse protection.',
  'c1.r': 'Requirements, architecture, database, backend, frontend, security and testing.',
  'c1.stamp': 'CONFIDENTIAL', 'c1.doc': 'CITIZEN REPORT', 'c1.f1': 'Folio', 'c1.f2': 'Source', 'c1.anon': 'anonymous',
  'c1.f3': 'Client', 'c1.f4': 'Contact', 'c1.f5': 'Evidence', 'c1.enc': 'encrypted ✓ · no metadata',
  'c1.f6': 'Status', 'c1.status': 'UNDER REVIEW', 'c1.hint': 'Hover over the redacted fields.',
  'c2.label': 'File 02 · Personal project · 2026',
  'c2.lead': 'A mini security operations center: it generates attacks, detects them and shows them live. The console next to this is a working simulation.',
  'c2.p': 'Understand how a SOC detects attacks without relying on external machine-learning libraries.',
  'c2.s': 'Simulated SSH brute force, port scans and log anomalies; hybrid rules + Z-score engine; WebSocket streaming to a framework-free dashboard.',
  'c2.x': 'IP geolocation and AI analysis of critical events in an async queue with timeouts. 158 tests with pytest.',
  'c3.label': 'File 03 · School team project · Team lead · 2026',
  'c3.sub': 'Real-time AI surveillance',
  'c3.lead': 'Live IP-camera video → YOLOv8 detects faces and license plates → counts show up instantly on a dashboard.',
  'c3.r': 'I led the team and worked on integrating the computer-vision pipeline with the backend.',
  'c3.v': 'YOLOv8 + OpenCV: detection, tracking and evidence capture when an object crosses the counting line.',
  'c3.b': 'Node.js/Express with 12 REST endpoints and Socket.io; cloud MySQL; auto-deploy to Railway from GitHub.',
  'c3.link': 'View code ↗', 'c3.count': 'COUNT', 'c3.plate': 'PLATE 0.92', 'c3.face': 'FACE 0.88',
  'c4.label': 'File 04 · My own product · 2026',
  'c4.sub': 'Commercial AI dashboard template',
  'c4.lead': 'I designed it, built it and sell it. 9 pages of plain HTML, CSS and JavaScript — no frameworks, no build step.',
  'c4.i': 'Streaming AI chat that connects to OpenAI, Groq or Ollama · image studio · live analytics with Chart.js · demo mode.',
  'c4.q': 'Custom design system, 60 fps animations, CSP-compatible and accessible (WCAG AA).',
  'c4.link': 'See it on Gumroad ↗',
  'a.title': 'Annexes', 'a.note': 'Records that back up this file. Copies available on request.',
  'a.t1': 'English B1 (CEFR)', 'a.w1': 'Instituto de Fortalecimiento Académico · 180 h', 'a.s1': 'Certified',
  'a.t2': 'Social service', 'a.w2': 'TecMM Chapala · 500 h · rated Excellent', 'a.d2': 'Jan — Jul 2026', 'a.s2': 'Completed',
  'a.t3': 'Professional residency', 'a.w3': 'Confidential project · Jalisco', 'a.d3': 'Aug — Dec 2026', 'a.s3': 'In progress',
  'a.t4': 'B.S. Computer Systems Engineering', 'a.w4': 'TecMM, Chapala campus', 'a.d4': 'graduating Dec 2026', 'a.s4': 'In progress',
  'nx.platform': 'Platform', 'nx.infra': 'Infrastructure', 'nx.nodes': 'Nodes',
  'nx.panel': 'Control', 'nx.central': 'Center', 'nx.online': 'System online', 'nx.new': 'New project',
  'nx.k1': 'Requests', 'nx.k2': 'Latency', 'nx.k3': 'Tokens', 'nx.fast': 'Fast', 'nx.limit': 'Near limit',
  'nx.chart': 'Neural inference · tokens/s', 'nx.health': 'System health', 'nx.q': 'Summarize this quarter’s sales',
  'c5.label': 'File 05 · Social service · TecMM Chapala · 2026',
  'c5.title': 'Library Management System',
  'c5.lead': '500 hours to take the school library off paper. Rating: Excellent.',
  'c5.p': 'Book and equipment inventory and loans tracked on paper and spreadsheets.',
  'c5.s': 'Catalog with live search, digital requests and an admin panel with stats, loans and returns; bulk import from Excel and prepared statements against SQL injection.',
  'c5.author': 'Author', 'c5.ed': 'Pub.', 'c5.stamp': 'ON LOAN',
  'l.title': 'Work log',
  'l.d1': 'Aug 2026 — now', 'l.t1': 'Software & Information Security Developer', 'l.w1': 'Professional residency · confidential project · Jalisco',
  'l.d2': 'Jan — Jul 2026', 'l.t2': 'Web Developer · Social service', 'l.w2': 'Tecnológico Superior de Jalisco, Chapala · 500 h · Excellent',
  'l.d3': 'Aug 2022 — now', 'l.t3': 'Sales Supervisor (Checkout Line)', 'l.w3': 'Walmart Mexico · I lead staff under pressure while studying engineering',
  'l.d4': '2022 — Dec 2026', 'l.t4': 'B.S. Computer Systems Engineering', 'l.w4': 'TecMM, Chapala campus · English B1',
  's.title': 'Tech inventory', 's.data': 'Data', 's.model': 'relational modeling', 's.sec': 'Security',
  's.secv': 'Encryption · 2FA · role-based access · log analysis · OWASP', 's.ai': 'AI / Vision', 's.tools': 'Tools',
  'ct.kicker': 'Looking for my first role as a Junior Backend / Full Stack Developer or in application security.',
  'ct.title': "Let's talk.",
  'ct.copy': 'Copy email', 'ct.copied': 'Copied!',
  'foot': 'No templates, no frameworks · HTML, CSS & JavaScript',
};
const ES_EXTRA = { 'ct.copied': '¡Copiado!' };

const i18nEls = [...document.querySelectorAll('[data-i18n]')];
const ES = {};
i18nEls.forEach(el => { ES[el.dataset.i18n] = el.innerHTML; });
Object.assign(ES, ES_EXTRA);

let lang = 'es';
try { lang = localStorage.getItem('lang') || (navigator.language.startsWith('es') ? 'es' : 'en'); } catch { /* sin storage */ }

function t(key) { return (lang === 'en' ? EN : ES)[key] ?? ES[key]; }

function applyLang() {
  document.documentElement.lang = lang;
  i18nEls.forEach(el => { const v = t(el.dataset.i18n); if (v) el.innerHTML = v; });
  document.querySelectorAll('#lang [data-l]').forEach(s => s.classList.toggle('on', s.dataset.l === lang));
  catalogBooks = lang === 'en' ? BOOKS_EN : BOOKS_ES;
}

document.getElementById('lang').addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  try { localStorage.setItem('lang', lang); } catch { /* sin storage */ }
  applyLang();
  if (nx.classList.contains('live')) { clearTimeout(nxChatTimer); nxChat(); }
});

/* =========================================================
   RELOJ (hora de Jalisco)
   ========================================================= */
const clock = document.getElementById('clock');
function tick() {
  clock.textContent = new Date().toLocaleTimeString('es-MX', { timeZone: 'America/Mexico_City', hour: '2-digit', minute: '2-digit', hour12: false });
}
tick(); setInterval(tick, 30000);

/* =========================================================
   NOMBRE: efecto de "descifrado"
   ========================================================= */
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&@$0123456789';
function scramble(el, delay) {
  const final = el.dataset.text;
  if (reduceMotion) { el.textContent = final; return; }
  let frame = 0;
  const total = 26;
  setTimeout(() => {
    const id = setInterval(() => {
      el.textContent = [...final].map((ch, i) => {
        if (ch === ' ') return ' ';
        return frame / total > i / final.length ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }).join('');
      if (++frame > total) { clearInterval(id); el.textContent = final; }
    }, 45);
  }, delay);
}
document.querySelectorAll('.scramble').forEach((el, i) => scramble(el, 200 + i * 350));

/* =========================================================
   MUNDOS: la página cambia de tema según el archivo visible
   ========================================================= */
const body = document.body;
const sweep = document.querySelector('.sweep');
const railLinks = [...document.querySelectorAll('.rail a')];
let current = 'base';
let previewing = false;

function setWorld(world) {
  if (world === current) return;
  current = world;
  body.dataset.world = world;
  if (!reduceMotion) { sweep.classList.remove('go'); void sweep.offsetWidth; sweep.classList.add('go'); }
}

const sections = [...document.querySelectorAll('main > section')];
const worldObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const sec = entry.target;
    if (sec.id !== 'portada') previewing = false; // al salir de la portada se cancela la vista previa
    if (!previewing) setWorld(sec.dataset.world);
    railLinks.forEach(a => a.classList.toggle('on', a.dataset.target === sec.id));
  });
}, { rootMargin: '-45% 0px -45% 0px' });
sections.forEach(s => worldObserver.observe(s));

// Animación de entrada de cada archivo
const inObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.25 });
document.querySelectorAll('.file').forEach(f => inObserver.observe(f));

// En la portada, pasar el cursor por el índice adelanta el mundo de cada proyecto
// (solo en dispositivos con mouse; en celular el "hover" se queda pegado)
if (window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.index li').forEach(li => {
    li.addEventListener('mouseenter', () => { previewing = true; setWorld(li.dataset.preview); });
    li.addEventListener('mouseleave', () => { previewing = false; setWorld('base'); });
  });
}

/* =========================================================
   02 · CONSOLA SOC (simulación)
   ========================================================= */
const feed = document.getElementById('feed');
const counters = { crit: document.getElementById('c-crit'), susp: document.getElementById('c-susp'), norm: document.getElementById('c-norm') };
const totals = { crit: 0, susp: 0, norm: 0 };
const EVENTS = {
  crit: ['ssh_brute :22', 'auth_burst :22', 'priv_esc_try'],
  susp: ['port_scan 0-1024', 'log_anomaly :443', 'geo_mismatch'],
  norm: ['http_ok :443', 'login_ok :22', 'dns_query :53'],
};
const ip = () => [10 + Math.floor(Math.random() * 180), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)].join('.');

function pushEvent() {
  const r = Math.random();
  const sev = r < 0.55 ? 'norm' : r < 0.83 ? 'susp' : 'crit';
  const label = EVENTS[sev][Math.floor(Math.random() * 3)];
  counters[sev].textContent = ++totals[sev];
  const li = document.createElement('li');
  li.className = sev;
  const time = new Date().toLocaleTimeString('es-MX', { hour12: false });
  li.innerHTML = `<time>${time}</time><span class="sev">${sev.toUpperCase()}</span><span>${label} ← ${ip()}</span>`;
  feed.prepend(li);
  while (feed.children.length > 8) feed.lastChild.remove();
}

/* =========================================================
   03 · CCTV: reloj del OSD y conteo
   ========================================================= */
const cctvTime = document.getElementById('cctv-time');
const vcount = document.getElementById('vcount');
let v = 128;
function cctvTick() { cctvTime.textContent = new Date().toLocaleTimeString('es-MX', { hour12: false }); }

/* =========================================================
   05 · CATÁLOGO: búsqueda que se escribe sola + sello
   ========================================================= */
const BOOKS_ES = ['Fundamentos de bases de datos', 'Estructuras de datos en Java', 'Redes de computadoras', 'Ingeniería de software'];
const BOOKS_EN = ['Database System Concepts', 'Data Structures in Java', 'Computer Networks', 'Software Engineering'];
let catalogBooks = BOOKS_ES;
let bookIdx = 0;
const typed = document.getElementById('typed');
const fichaTitle = document.getElementById('ficha-title');
const stampLoan = document.getElementById('stamp-loan');

async function catalogLoop() {
  const word = catalogBooks[bookIdx % catalogBooks.length];
  stampLoan.classList.remove('hit');
  typed.textContent = '';
  for (const ch of word) { typed.textContent += ch; await sleep(55); }
  fichaTitle.style.opacity = 0; await sleep(200);
  fichaTitle.textContent = word; fichaTitle.style.opacity = 1;
  await sleep(500);
  stampLoan.classList.add('hit');
  bookIdx++;
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* =========================================================
   Animaciones que solo corren cuando su archivo está en pantalla
   ========================================================= */
function whenVisible(el, start, stop) {
  let on = false;
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !on) { on = true; start(); }
    else if (!e.isIntersecting && on) { on = false; stop(); }
  }).observe(el);
}

let socTimer, cctvTimer, countTimer, catTimer;
whenVisible(document.querySelector('.soc'),
  () => { pushEvent(); socTimer = setInterval(pushEvent, reduceMotion ? 2500 : 850); },
  () => clearInterval(socTimer));
whenVisible(document.querySelector('.cctv'),
  () => { cctvTick(); cctvTimer = setInterval(cctvTick, 1000); countTimer = setInterval(() => { vcount.textContent = ++v; }, 2750); },
  () => { clearInterval(cctvTimer); clearInterval(countTimer); });
whenVisible(document.querySelector('.catalog'),
  () => { catalogLoop(); catTimer = setInterval(catalogLoop, 4200); },
  () => clearInterval(catTimer));

/* =========================================================
   04 · Mini dashboard de NexAI: contadores, gráfica y chat en vivo
   ========================================================= */
const nx = document.querySelector('.nx');
const nxLine = document.getElementById('nx-line');
const nxArea = document.getElementById('nx-area');
const nxDot = document.getElementById('nx-dot');
const nxStream = document.getElementById('nx-stream');
const NX_REPLY = {
  es: 'Ventas +18% vs. trimestre anterior. El plan Pro creció 32% y marzo fue el mejor mes. Recomiendo reforzar campañas en abril.',
  en: 'Sales +18% vs. last quarter. The Pro plan grew 32% and March was the best month. I suggest boosting April campaigns.'
};
let nxPts = Array.from({ length: 24 }, (_, i) => 55 + Math.sin(i / 2.2) * 18 + Math.random() * 10);
let nxChartTimer, nxChatTimer;

function nxDraw() {
  const step = 300 / (nxPts.length - 1);
  const xy = nxPts.map((y, i) => [i * step, 110 - y]);
  let d = `M${xy[0][0]},${xy[0][1]}`;
  for (let i = 1; i < xy.length; i++) {
    const [x0, y0] = xy[i - 1], [x1, y1] = xy[i], mx = (x0 + x1) / 2;
    d += ` C${mx},${y0} ${mx},${y1} ${x1},${y1}`;
  }
  nxLine.setAttribute('d', d);
  nxArea.setAttribute('d', `${d} L300,110 L0,110 Z`);
  const last = xy[xy.length - 1];
  nxDot.setAttribute('cx', last[0]); nxDot.setAttribute('cy', last[1]);
}

function nxCount() {
  nx.querySelectorAll('[data-count]').forEach(el => {
    const end = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0), suf = el.dataset.suffix || '';
    if (reduceMotion) { el.textContent = end.toLocaleString('en-US', { minimumFractionDigits: dec }) + suf; return; }
    const t0 = performance.now();
    const frame = now => {
      const p = Math.min((now - t0) / 1400, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = (end * e).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  });
}

function nxChat() {
  const text = NX_REPLY[lang] || NX_REPLY.es;
  let i = 0;
  nxStream.textContent = '';
  clearInterval(nxChatTimer);
  nxChatTimer = setInterval(() => {
    i += 2;
    nxStream.textContent = text.slice(0, i);
    if (i >= text.length) { clearInterval(nxChatTimer); nxChatTimer = setTimeout(nxChat, 3500); }
  }, reduceMotion ? 10 : 38);
}

nxDraw();
whenVisible(nx,
  () => {
    nx.classList.add('live'); nxCount(); nxChat();
    if (!reduceMotion) nxChartTimer = setInterval(() => {
      nxPts.shift();
      const prev = nxPts[nxPts.length - 1];
      nxPts.push(Math.max(20, Math.min(95, prev + (Math.random() - 0.48) * 22)));
      nxDraw();
    }, 900);
  },
  () => { nx.classList.remove('live'); clearInterval(nxChartTimer); clearInterval(nxChatTimer); clearTimeout(nxChatTimer); });

/* =========================================================
   04 · Inclinación 3D del dispositivo con el mouse
   ========================================================= */
const tilt = document.getElementById('tilt');
if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
  tilt.addEventListener('mousemove', e => {
    const r = tilt.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tilt.style.setProperty('--ry', `${x * 14}deg`);
    tilt.style.setProperty('--rx', `${-y * 10}deg`);
  });
  tilt.addEventListener('mouseleave', () => { tilt.style.removeProperty('--ry'); tilt.style.removeProperty('--rx'); });
}

/* =========================================================
   Copiar correo
   ========================================================= */
const copyBtn = document.getElementById('copy');
copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('ithangael@gmail.com');
    copyBtn.textContent = t('ct.copied');
    setTimeout(() => { copyBtn.textContent = t('ct.copy'); }, 1800);
  } catch { window.location.href = 'mailto:ithangael@gmail.com'; }
});

applyLang();
