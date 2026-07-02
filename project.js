/* ===================================================================
   Rawnak Tahmid — Portfolio
   project.js — Project Detail Landing Page
=================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = (typeof PROJECTS !== 'undefined' && id) ? PROJECTS[id] : null;

  if (!project) {
    showEmptyState();
    return;
  }

  renderProject(project);
  document.getElementById('projectContent').hidden = false;

  setupTabScrollSpy();
  setupCopyButton(project);
});

function showEmptyState() {
  const empty = document.getElementById('projectEmptyState');
  if (empty) empty.hidden = false;
}

/* -------------------------------------------------------------------
   Populate every part of the template from a single project record.
------------------------------------------------------------------- */
function renderProject(project) {
  document.title = `${project.title} — Rawnak Tahmid`;

  setHTML('pdIcon', project.icon);
  setText('pdTitle', project.title);
  setText('pdTagline', project.tagline);
  setText('pdPreviewTitle', project.title);
  setText('pdPreviewTitle2', 'Live Preview');
  setText('pdAbout', project.description);

  renderBadges(project);
  renderFeatures(project);
  renderTechStack(project);
  renderPseudocode(project);
  renderLivePreview(project);
  renderHowItWorks(project);
  renderBehind(project);
}

function setText(elId, value) {
  const el = document.getElementById(elId);
  if (el && value != null) el.textContent = value;
}
function setHTML(elId, value) {
  const el = document.getElementById(elId);
  if (el && value != null) el.innerHTML = value;
}

/* ---------- Badges: category, date, status, type, source ---------- */
function renderBadges(project) {
  const wrap = document.getElementById('pdBadges');
  if (!wrap) return;

  const items = [
    { label: project.category, icon: iconTag() },
    { label: project.date, icon: iconCalendar() },
    { label: project.status, icon: iconCheck() },
    { label: project.projectType, icon: iconLayers() },
  ];

  wrap.innerHTML = items
    .filter((item) => item.label)
    .map((item) => `<span class="pd-badge">${item.icon}<strong>${escapeHTML(item.label)}</strong></span>`)
    .join('');

  if (project.sourceUrl) {
    wrap.insertAdjacentHTML('beforeend', `
      <a class="pd-badge pd-badge--link" href="${escapeAttr(project.sourceUrl)}" target="_blank" rel="noopener noreferrer">
        ${iconGithub()} Source Code
      </a>
    `);
  }
}

/* ---------- Key features ---------- */
function renderFeatures(project) {
  const list = document.getElementById('pdFeatures');
  if (!list || !project.keyFeatures) return;
  list.innerHTML = project.keyFeatures.map((f) => `<li>${escapeHTML(f)}</li>`).join('');
}

/* ---------- Tech stack ---------- */
function renderTechStack(project) {
  const list = document.getElementById('pdTechStack');
  if (!list || !project.techStack) return;
  list.innerHTML = project.techStack.map((tech) => `
    <li>
      <span class="pd-tech-swatch" style="color:${tech.color}">${initials(tech.name)}</span>
      <span class="pd-tech-info">
        <span class="pd-tech-name">${escapeHTML(tech.name)}</span>
        <span class="pd-tech-subtitle">${escapeHTML(tech.subtitle || '')}</span>
      </span>
    </li>
  `).join('');
}

/* ---------- Pseudocode ---------- */
function renderPseudocode(project) {
  const codeEl = document.getElementById('pdCode');
  if (!codeEl || !project.pseudocode) return;
  codeEl.innerHTML = project.pseudocode
    .map((line) => `<span class="pd-code-line">${escapeHTML(line) || '&nbsp;'}</span>`)
    .join('');
}

/* ---------- Live preview (intentionally blank placeholder) ----------
   Both the note and the button reflect whether this particular
   project actually has a deployed, web-based live demo. If it does,
   "Open Live Preview" jumps straight to that external site. If not,
   the button stays disabled and the note explains why.
------------------------------------------------------------------- */
function renderLivePreview(project) {
  const note = document.getElementById('pdPreviewNote');
  const btn = document.getElementById('pdLiveBtn');
  if (!btn) return;

  if (project.liveUrl) {
    btn.href = project.liveUrl;
    btn.removeAttribute('aria-disabled');
    if (note) note.textContent = 'The interactive preview will be embedded here soon — for now, try the real thing.';
  } else {
    btn.href = '#';
    btn.setAttribute('aria-disabled', 'true');
    btn.addEventListener('click', (e) => e.preventDefault());
    if (note) note.textContent = `${project.projectType || 'This project'} doesn't have a hosted live preview yet.`;
  }
}

/* ---------- How it works ---------- */
function renderHowItWorks(project) {
  const list = document.getElementById('pdHowItWorks');
  if (!list || !project.howItWorks) return;
  list.innerHTML = project.howItWorks.map((step, i) => `
    <li>
      <span class="pd-hiw-step__num">${i + 1}</span>
      <h3 class="pd-hiw-step__title">${escapeHTML(step.title)}</h3>
      <p class="pd-hiw-step__desc">${escapeHTML(step.desc)}</p>
    </li>
  `).join('');
}

/* ---------- "Behind it" panel ---------- */
function renderBehind(project) {
  setText('pdBehindTitle', project.behindTitle || 'Behind It');
  setText('pdBehindDesc', project.behindDesc || '');
  const notesEl = document.getElementById('pdBehindNotes');
  if (notesEl && project.behindNotes) {
    notesEl.textContent = project.behindNotes.join('\n');
  }
}

/* -------------------------------------------------------------------
   Tabs — smooth-scroll to each section and keep the active pill in
   sync with whichever section is currently in view.
------------------------------------------------------------------- */
function setupTabScrollSpy() {
  const tabs = Array.from(document.querySelectorAll('.pd-tab[data-tab]'));
  if (!tabs.length) return;

  const sections = tabs
    .map((tab) => document.querySelector(tab.getAttribute('href')))
    .filter(Boolean);

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');
    });
  });

  if (!('IntersectionObserver' in window) || !sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const matchingTab = tabs.find((t) => t.getAttribute('href') === `#${entry.target.id}`);
      if (matchingTab) {
        tabs.forEach((t) => t.classList.remove('is-active'));
        matchingTab.classList.add('is-active');
      }
    });
  }, { rootMargin: '-140px 0px -60% 0px', threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}

/* -------------------------------------------------------------------
   Copy pseudocode to clipboard
------------------------------------------------------------------- */
function setupCopyButton(project) {
  const btn = document.getElementById('pdCopyBtn');
  if (!btn || !project.pseudocode) return;

  btn.addEventListener('click', async () => {
    const text = project.pseudocode.join('\n');
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      // Clipboard API unavailable — fail silently, button just won't confirm.
    }
    const label = btn.querySelector('span');
    const original = label ? label.textContent : null;
    btn.classList.add('is-copied');
    if (label) label.textContent = 'Copied';
    setTimeout(() => {
      btn.classList.remove('is-copied');
      if (label && original) label.textContent = original;
    }, 1600);
  });
}

/* -------------------------------------------------------------------
   Small helpers
------------------------------------------------------------------- */
function escapeHTML(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function escapeAttr(str) {
  return escapeHTML(str).replace(/"/g, '&quot;');
}
function initials(name) {
  if (!name) return '';
  const clean = name.replace(/\.js$/i, '');
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return parts.map((p) => p[0]).join('').slice(0, 2).toUpperCase();
}

function iconTag() {
  return `<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M2 8.5V2.5C2 2.22 2.22 2 2.5 2H8.5L14 7.5L8.5 13L2 8.5Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><circle cx="5" cy="5" r="0.9" fill="currentColor"/></svg>`;
}
function iconCalendar() {
  return `<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="11" rx="1.3" stroke="currentColor" stroke-width="1.3"/><path d="M2 6.5H14" stroke="currentColor" stroke-width="1.3"/><path d="M5.5 1.5V4M10.5 1.5V4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`;
}
function iconCheck() {
  return `<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.3"/><path d="M5.3 8.2L7.2 10L10.7 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
function iconLayers() {
  return `<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 2L14 5.2L8 8.4L2 5.2L8 2Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M2 8.5L8 11.7L14 8.5" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M2 11.8L8 15L14 11.8" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`;
}
function iconGithub() {
  return `<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>`;
}
