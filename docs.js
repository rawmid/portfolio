/* ===================================================================
   Rawnak Tahmid — Portfolio
   docs.js — Moonshot Lab documentation landing page

   Reads ?id=<key> from the URL, looks it up in DOCS_PROJECTS
   (docs-data.js), and renders the whole page from that one record.
   Every project (TomēLab, Kidchemist, and any future project built
   from the template) shares this exact same renderer.
=================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = (typeof DOCS_PROJECTS !== 'undefined' && id) ? DOCS_PROJECTS[id] : null;

  if (!project) {
    showEmptyState();
    return;
  }

  renderDocs(project);
  document.getElementById('docsContent').hidden = false;
});

function showEmptyState() {
  const empty = document.getElementById('docsEmptyState');
  if (empty) empty.hidden = false;
}

/* -------------------------------------------------------------------
   Populate every part of the template from a single project record.
------------------------------------------------------------------- */
function renderDocs(project) {
  document.title = `${project.name} Docs — Rawnak Tahmid`;

  // ---- Hero ----
  setText('docsBadge', project.badge);
  setText('docsTitle', project.name);
  setText('docsTagline', project.tagline);
  setText('docsDesc', project.description);

  const primaryCta = document.getElementById('docsPrimaryCta');
  const secondaryCta = document.getElementById('docsSecondaryCta');
  if (primaryCta && project.heroCtas) {
    primaryCta.textContent = project.heroCtas.primaryLabel;
    primaryCta.href = project.heroCtas.primaryHref;
  }
  if (secondaryCta && project.heroCtas) {
    secondaryCta.textContent = project.heroCtas.secondaryLabel;
    secondaryCta.href = project.heroCtas.secondaryHref;
  }

  // ---- Documentation overview cards ----
  buildOverviewCards(project.overviewCards);

  // ---- What is [Project]? ----
  const whatIs = project.whatIs || {};
  setText('docsWhatIsEyebrow', whatIs.eyebrow);
  setText('docsWhatIsDesc', whatIs.description);
  buildWhatIsHeading(whatIs);
  buildChecklist(whatIs.checklist);
  setText('docsVideoLabel', whatIs.videoLabel);
  setText('docsVideoCaption', whatIs.videoCaption);
  buildThumbStrip();

  // ---- Features ----
  buildFeaturesGrid(project.features);
}

/* -------------------------------------------------------------------
   Documentation overview cards — one per topic (Core Idea, Features,
   Technology, etc). Each links to the relevant section on the page.
------------------------------------------------------------------- */
function buildOverviewCards(cards) {
  const grid = document.getElementById('docsOverviewGrid');
  if (!grid || !cards) return;

  grid.innerHTML = cards.map((card) => `
    <a class="docs-overview__card" href="${card.href || '#'}">
      <span class="docs-overview__icon">${card.icon || ''}</span>
      <span class="docs-overview__title">${escapeHTML(card.title)}</span>
      <span class="docs-overview__desc">${escapeHTML(card.desc)}</span>
    </a>
  `).join('');
}

/* -------------------------------------------------------------------
   "What is [Project]?" heading — two plain lines plus one highlighted
   line, mirroring the reference design's mixed-emphasis heading.
------------------------------------------------------------------- */
function buildWhatIsHeading(whatIs) {
  const heading = document.getElementById('docsWhatIsHeading');
  if (!heading) return;

  const lines = (whatIs.headingLines || []).map((line) => `<span class="docs-whatis__line">${escapeHTML(line)}</span>`).join('');
  const highlight = whatIs.headingHighlight
    ? `<span class="docs-whatis__line docs-whatis__line--highlight">${escapeHTML(whatIs.headingHighlight)}</span>`
    : '';

  heading.innerHTML = lines + highlight;
}

function buildChecklist(items) {
  const list = document.getElementById('docsChecklist');
  if (!list || !items) return;

  list.innerHTML = items.map((item) => `
    <li class="docs-checklist__item">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2.5 7.3L5.5 10.3L11.5 3.7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span>${escapeHTML(item)}</span>
    </li>
  `).join('');
}

/* -------------------------------------------------------------------
   Thumbnail strip beneath the showcase video. Renders as dashed
   placeholders until real thumbnails are dropped in — replace each
   .media-placeholder with a real <img> once assets exist.
------------------------------------------------------------------- */
function buildThumbStrip(count = 5) {
  const strip = document.getElementById('docsThumbStrip');
  if (!strip) return;

  let html = '';
  for (let i = 1; i <= count; i++) {
    html += `<div class="media-placeholder docs-thumb-strip__item" data-fill="thumb-${i}"></div>`;
  }
  strip.innerHTML = html;
}

/* -------------------------------------------------------------------
   Feature grid — icon, title, description cards.
------------------------------------------------------------------- */
function buildFeaturesGrid(features) {
  const grid = document.getElementById('docsFeaturesGrid');
  if (!grid || !features) return;

  grid.innerHTML = features.map((feature) => `
    <div class="docs-features__card">
      <span class="docs-features__icon">${feature.icon || ''}</span>
      <h3 class="docs-features__title">${escapeHTML(feature.title)}</h3>
      <p class="docs-features__desc">${escapeHTML(feature.desc)}</p>
    </div>
  `).join('');
}

/* -------------------------------------------------------------------
   Small helpers
------------------------------------------------------------------- */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value !== undefined) el.textContent = value;
}

function escapeHTML(str) {
  if (str === undefined || str === null) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
