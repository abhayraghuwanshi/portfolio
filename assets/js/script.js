'use strict';

// ===== Navbar =====
const navbar    = document.querySelector('[data-navbar]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks  = document.querySelectorAll('[data-nav-link]');
const sections  = document.querySelectorAll('section[id]');

if (navToggle && navbar) {
  navToggle.addEventListener('click', () => navbar.classList.toggle('active'));
}
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
    navbar.classList.remove('active');
  });
});
window.addEventListener('scroll', () => {
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  let current = '';
  sections.forEach(s => { if (window.pageYOffset >= s.offsetTop - 110) current = s.id; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${current}`));
});

// ===== Typing animation =====
const typedEl = document.querySelector('.typed-text');
if (typedEl) {
  const roles = ['Software Developer','Java Expert','Microservices Architect','Cloud Engineer','DevOps Enthusiast'];
  let rIdx = 0, cIdx = 0, deleting = false;
  function tick() {
    const word = roles[rIdx];
    typedEl.textContent = deleting ? word.slice(0, cIdx--) : word.slice(0, ++cIdx);
    if (!deleting && cIdx === word.length) { setTimeout(() => { deleting = true; tick(); }, 2000); return; }
    if (deleting && cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; }
    setTimeout(tick, deleting ? 50 : 100);
  }
  setTimeout(tick, 900);
}

// ===== Counters =====
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target, target = parseInt(el.getAttribute('data-target'), 10);
    let cur = 0; const inc = target / 80;
    const step = () => { cur = Math.min(cur + inc, target); el.textContent = Math.floor(cur); if (cur < target) requestAnimationFrame(step); };
    requestAnimationFrame(step);
    counterObs.unobserve(el);
  });
}, { threshold: 0 });
document.querySelectorAll('.stat-n').forEach(el => counterObs.observe(el));

// ===== Scroll reveal =====
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    setTimeout(() => entry.target.classList.add('visible'), i * 75);
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.08 });
function observeReveal(el) { revealObs.observe(el); }
document.querySelectorAll('.reveal').forEach(observeReveal);

// ===== Contact form =====
const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm));
    if (!data.name || !data.email || !data.subject || !data.message) { alert('Please fill in all fields.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { alert('Please enter a valid email address.'); return; }
    alert("Thanks for your message! I'll get back to you soon.");
    contactForm.reset();
  });
}

// ================================================================
//  PROJECT DRAWER
// ================================================================
const drawerOverlay = document.getElementById('drawer-overlay');
const projectDrawer = document.getElementById('project-drawer');
const drawerClose   = document.getElementById('drawer-close');
const drawerContent = document.getElementById('drawer-content');

const STATUS_META = {
  active:   { label: 'Live',     cls: 'status-active' },
  building: { label: 'Building', cls: 'status-building' },
  paused:   { label: 'Paused',   cls: 'status-paused' },
  archived: { label: 'Archived', cls: 'status-archived' },
};

function openDrawer(p) {
  const sm = STATUS_META[p.status.toLowerCase()] || STATUS_META.paused;

  // Format long description: split on \n\n into <p> tags
  const longDesc = (p.longDescription || p.description)
    .split('\n\n')
    .map(para => `<p>${para.trim()}</p>`)
    .join('');

  // Highlights
  const highlights = (p.highlights || [])
    .map(h => `<div class="drawer-highlight"><ion-icon name="checkmark-circle-outline"></ion-icon><span>${h}</span></div>`)
    .join('');

  // Tech tags
  const tags = (p.tech || []).map(t => `<span class="tag">${t}</span>`).join('');

  // Links
  const linksBtns = [];
  if (p.links.github) linksBtns.push(`<a href="${p.links.github}" target="_blank" rel="noopener" class="drawer-link drawer-link-primary"><ion-icon name="logo-github"></ion-icon> View Code</a>`);
  if (p.links.live)   linksBtns.push(`<a href="${p.links.live}"   target="_blank" rel="noopener" class="drawer-link drawer-link-primary"><ion-icon name="open-outline"></ion-icon> Live</a>`);
  if (p.links.demo)   linksBtns.push(`<a href="${p.links.demo}"   target="_blank" rel="noopener" class="drawer-link drawer-link-secondary"><ion-icon name="play-outline"></ion-icon> Demo</a>`);
  if (!p.links.github && !p.links.live && !p.links.demo) {
    linksBtns.push(`<span class="drawer-link-muted"><ion-icon name="lock-closed-outline"></ion-icon> Private repository</span>`);
  }

  // Status note
  const statusNote = p.statusNote
    ? `<div class="drawer-status-note"><ion-icon name="information-circle-outline"></ion-icon><span>${p.statusNote}</span></div>`
    : '';

  // Challenges
  const challenge = p.challenges
    ? `<div class="drawer-section"><div class="drawer-section-label">Technical Challenge</div><div class="drawer-challenge">${p.challenges}</div></div>`
    : '';

  drawerContent.innerHTML = `
    <div class="drawer-header">
      <div class="drawer-icon"><ion-icon name="${p.icon}"></ion-icon></div>
      <div class="drawer-title-group">
        <div class="drawer-badges">
          <span class="project-status ${sm.cls}"><span class="status-dot"></span>${sm.label}</span>
          <span class="project-type">${p.type}</span>
        </div>
        <h2 class="drawer-title">${p.title}</h2>
        <p class="drawer-tagline">${p.tagline}</p>
        <p class="drawer-year">${p.year}</p>
      </div>
    </div>

    ${statusNote}

    <div class="drawer-section">
      <div class="drawer-section-label">Overview</div>
      <div class="drawer-text">${longDesc}</div>
    </div>

    <div class="drawer-section">
      <div class="drawer-section-label">Key Features</div>
      <div class="drawer-highlights">${highlights}</div>
    </div>

    ${challenge}

    <div class="drawer-section">
      <div class="drawer-section-label">Tech Stack</div>
      <div class="drawer-tags">${tags}</div>
    </div>

    <div class="drawer-section">
      <div class="drawer-section-label">Links</div>
      <div class="drawer-links">${linksBtns.join('')}</div>
    </div>
  `;

  drawerOverlay.classList.add('open');
  projectDrawer.classList.add('open');
  projectDrawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Re-run ionicons on new content (needed for dynamically injected icons)
  if (window.customElements && customElements.get('ion-icon')) {
    drawerContent.querySelectorAll('ion-icon').forEach(icon => {
      const name = icon.getAttribute('name');
      if (name) { icon.removeAttribute('name'); icon.setAttribute('name', name); }
    });
  }
}

function closeDrawer() {
  drawerOverlay.classList.remove('open');
  projectDrawer.classList.remove('open');
  projectDrawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (drawerClose)   drawerClose.addEventListener('click', closeDrawer);
if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

// ================================================================
//  PROJECTS — loaded from assets/data/projects.json
// ================================================================
function buildProjectCard(p, index) {
  const statusKey = p.status.toLowerCase();
  const dotCls    = `dot-${statusKey}`;
  const tagsStr   = p.tech.join(' · ');
  const num       = String(index + 1).padStart(2, '0');

  const links = [];
  if (p.links.github) links.push(`<a href="${p.links.github}" target="_blank" rel="noopener" class="pr-link-btn"><ion-icon name="logo-github"></ion-icon> Code ↗</a>`);
  if (p.links.live)   links.push(`<a href="${p.links.live}"   target="_blank" rel="noopener" class="pr-link-btn"><ion-icon name="open-outline"></ion-icon> Live ↗</a>`);

  const article = document.createElement('article');
  article.className = 'project-row reveal';
  article.dataset.status = statusKey;

  article.innerHTML = `
    <span class="pr-num">${num}</span>
    <span class="pr-dot filter-dot ${dotCls}"></span>
    <div class="pr-main">
      <div class="pr-title-row">
        <h3 class="pr-title">${p.title}</h3>
        <span class="pr-type">${p.type}</span>
      </div>
      <p class="pr-tagline">${p.tagline}</p>
      <p class="pr-tags">${tagsStr}</p>
    </div>
    <div class="pr-actions">
      <button class="pr-detail-btn" data-project-id="${p.id}">Details →</button>
      ${links.join('')}
    </div>
  `;
  return article;
}

async function loadProjects() {
  const grid  = document.getElementById('projects-grid');
  const empty = document.getElementById('projects-empty');
  if (!grid) return;

  let projects;
  try {
    const res  = await fetch('./assets/data/projects.json');
    const data = await res.json();
    projects   = data.projects;
  } catch (err) {
    console.error('Failed to load projects.json', err);
    return;
  }

  function renderCards(filter) {
    grid.innerHTML = '';
    const filtered = filter === 'all' ? projects : projects.filter(p => p.status.toLowerCase() === filter);
    if (filtered.length === 0) { empty.style.display = 'block'; return; }
    empty.style.display = 'none';
    filtered.forEach((p, i) => {
      const card = buildProjectCard(p, i);
      grid.appendChild(card);
      card.classList.remove('visible');
      observeReveal(card);
    });

    // Wire up "Read more" buttons
    grid.querySelectorAll('.card-detail-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const project = projects.find(p => p.id === btn.dataset.projectId);
        if (project) openDrawer(project);
      });
    });
  }

  renderCards('all');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards(btn.dataset.filter);
    });
  });
}

loadProjects();
