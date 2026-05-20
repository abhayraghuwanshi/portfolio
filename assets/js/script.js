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
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const data  = Object.fromEntries(new FormData(contactForm));
    const btn   = contactForm.querySelector('button[type="submit"]');

    if (!data.name || !data.email || !data.subject || !data.message) {
      alert('Please fill in all fields.'); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      alert('Please enter a valid email address.'); return;
    }

    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '29add5c1-c56a-4efe-b4e7-83d6834457c9',
          name:    data.name,
          email:   data.email,
          subject: data.subject || 'New message from portfolio',
          message: data.message
        })
      });
      const json = await res.json();
      if (json.success) {
        btn.textContent = 'Sent ✓';
        contactForm.reset();
        setTimeout(() => { btn.textContent = 'Send message →'; btn.disabled = false; }, 3000);
      } else {
        btn.textContent = 'Failed — try again';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Network error — try again';
      btn.disabled = false;
    }
  });
}

// ================================================================
//  PROJECTS — loaded from assets/data/projects.json
// ================================================================
const STATUS_META = {
  active:   { label: 'Live',     cls: 'status-active' },
  building: { label: 'Building', cls: 'status-building' },
  paused:   { label: 'Paused',   cls: 'status-paused' },
  archived: { label: 'Archived', cls: 'status-archived' },
};

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
      <p class="pr-desc">${p.description}</p>
      <p class="pr-tags">${tagsStr}</p>
    </div>
    ${links.length ? `<div class="pr-actions">${links.join('')}</div>` : ''}
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
