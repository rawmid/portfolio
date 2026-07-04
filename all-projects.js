/* ===================================================================
   Rawnak Tahmid — Portfolio
   all-projects.js — "View All Projects" landing page

   Renders one .project-card per entry in PROJECTS (projects-data.js),
   reusing the exact same card markup/styles as the homepage's Pinned
   Projects grid. To add a future project to this page, add a new
   object to PROJECTS in projects-data.js — nothing here needs to
   change.
=================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderAllProjects();
});

function renderAllProjects() {
  const grid = document.getElementById('allProjectsGrid');
  if (!grid) return;

  if (typeof PROJECTS === 'undefined' || !Object.keys(PROJECTS).length) {
    grid.innerHTML = '<p class="all-projects-empty">No projects yet — check back soon.</p>';
    return;
  }

  const projects = Object.values(PROJECTS);
  grid.innerHTML = projects.map(projectCardHTML).join('');

  // Whole-card navigation to the matching Project Detail Landing Page,
  // mirroring setupProjectCardNav() in script.js. Elements marked
  // [data-no-card-nav] (like "Live Preview") opt out.
  grid.querySelectorAll('.project-card[data-project-id]').forEach((card) => {
    const id = card.dataset.projectId;
    if (!id) return;
    const target = `project.html?id=${encodeURIComponent(id)}`;

    card.addEventListener('click', (event) => {
      if (event.target.closest('[data-no-card-nav]')) return;
      window.location.href = target;
    });

    card.addEventListener('keydown', (event) => {
      if (event.target.closest('[data-no-card-nav]')) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        window.location.href = target;
      }
    });
  });
}

function projectCardHTML(project) {
  const stacks = (project.stack || []).map((s) => `
    <div class="project-card__stack-item">
      <span class="project-card__accent project-card__${escapeAttr(s.colorClass || '')}"></span>
      <span class="project-card__tag">${escapeHTML(s.name)}</span>
    </div>
  `).join('');

  const livePreview = project.liveUrl ? `
    <a href="${escapeAttr(project.liveUrl)}" target="_blank" rel="noopener noreferrer" class="live-preview-link" data-no-card-nav>
      <span class="live-preview-link__dot"></span>
      Live Preview
    </a>
  ` : '';

  return `
    <article class="card project-card" data-project-id="${escapeAttr(project.id)}" tabindex="0" role="link" aria-label="Open ${escapeAttr(project.title)} project details">
      <span class="project-card__go" aria-hidden="true">
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <div class="project-card__head">
        <span class="project-card__icon">${project.icon || '&#10070;'}</span>
        <h3><span class="project-link">${escapeHTML(project.title)}</span></h3>
      </div>
      <p>${escapeHTML(project.tagline || '')}</p>
      ${livePreview}
      <div class="project-card__stacks">${stacks}</div>
    </article>
  `;
}

/* ---------- Small helpers (kept local — project.js isn't loaded here) ---------- */
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
