/* ===================================================================
   Rawnak Tahmid — Portfolio
   script.js
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  buildLearningGrid();
  setupMenuToggle();
  setupContactForm();
  hideBrokenPlaceholderImages();
  setupModals();
  setupProjectCardNav();
  initSkillProgress();
});

/* -------------------------------------------------------------------
   Pinned project cards — whole-card navigation
   Clicking anywhere on a project card opens its dedicated detail page
   (project.html?id=<data-project-id>). Elements marked with
   [data-no-card-nav] (like the "Live Preview" pill) opt out so they
   can still jump straight to the live, external site instead.
------------------------------------------------------------------- */
function setupProjectCardNav() {
  const cards = document.querySelectorAll('.project-card[data-project-id]');
  if (!cards.length) return;

  cards.forEach((card) => {
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

function hideBrokenPlaceholderImages() {
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
    });
  });
}

/* -------------------------------------------------------------------
   Learning grid
   Renders the 8-column progress grid. Replace `progressMap` with real
   data (0 = empty cell, 1 = filled cell) whenever the learning status
   changes — the layout below mirrors the reference design.
------------------------------------------------------------------- */
function buildLearningGrid() {
  const grid = document.getElementById('learningGrid');
  if (!grid) return;

  const columns = 8;
  const rows = 9;

  // 1 = filled, 0 = empty — edit freely to reflect real progress
  const progressMap = [
    [0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0],
    [1,1,0,1,0,0,0,0],
    [1,1,0,1,0,1,0,0],
    [1,1,0,1,1,1,0,0],
    [1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1],
  ];

  const fragment = document.createDocumentFragment();

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const cell = document.createElement('div');
      cell.className = 'learning-cell';
      if (progressMap[r] && progressMap[r][c]) {
        cell.classList.add('filled');
      }
      fragment.appendChild(cell);
    }
  }

  grid.appendChild(fragment);
}

/* -------------------------------------------------------------------
   Hamburger menu — slide-in nav drawer
   Lists the page's sections so visitors can jump straight to one.
   Shares the same UX conventions as the modals: Escape closes it,
   clicking the dimmed backdrop closes it, and background scroll is
   locked while it's open.
------------------------------------------------------------------- */
function setupMenuToggle() {
  const menuBtn = document.getElementById('menuToggle');
  const overlay = document.getElementById('navDrawerOverlay');
  const closeBtn = document.getElementById('navDrawerClose');
  if (!menuBtn || !overlay) return;

  let lastFocusedEl = null;

  function openDrawer() {
    lastFocusedEl = document.activeElement;
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    menuBtn.classList.add('is-active');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('modal-open');
    if (closeBtn) closeBtn.focus();
  }

  function closeDrawer() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    menuBtn.classList.remove('is-active');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('modal-open');
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  menuBtn.addEventListener('click', () => {
    const isOpen = overlay.classList.contains('is-open');
    isOpen ? closeDrawer() : openDrawer();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  // Click on the dimmed backdrop (not the panel itself) closes it
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeDrawer();
  });

  // Jumping to a section closes the drawer behind it
  overlay.querySelectorAll('.nav-drawer__link').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}

/* -------------------------------------------------------------------
   Email Redirection
------------------------------------------------------------------- */

function openGmail() {
    const email = "rawnak123xz@gmail.com";
    const subject = encodeURIComponent("Portfolio Inquiry");
    const body = encodeURIComponent(
        "Hello Rawnak,\n\nI saw your portfolio and would like to contact you."
    );

    window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
        "_blank"
    );
}

/* -------------------------------------------------------------------
   Contact form — lightweight client-side validation + focus styling.
   No backend wired up; replace handleSubmit's body with a real
   fetch() call to your endpoint when ready.
------------------------------------------------------------------- */
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const successMessage = document.getElementById('formSuccess');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = [
      { input: form.elements['name'], errorEl: document.getElementById('nameError'), message: 'Please enter your name.' },
      { input: form.elements['email'], errorEl: document.getElementById('emailError'), message: 'Please enter a valid email.' },
      { input: form.elements['description'], errorEl: document.getElementById('descriptionError'), message: 'Tell me a little about your message.' },
    ];

    let isValid = true;

    fields.forEach(({ input, errorEl, message }) => {
      const wrapper = input.closest('.field');
      const valid = input.checkValidity() && input.value.trim().length > 0;

      if (!valid) {
        isValid = false;
        wrapper.classList.add('invalid');
        errorEl.textContent = message;
      } else {
        wrapper.classList.remove('invalid');
        errorEl.textContent = '';
      }
    });

    if (!isValid) {
      successMessage.classList.remove('show');
      return;
    }

    // Placeholder success state — swap for a real submission handler.
    successMessage.classList.add('show');
    form.reset();

    window.setTimeout(() => successMessage.classList.remove('show'), 4000);
  });

  // Clear inline error as soon as the user starts fixing a field
  form.querySelectorAll('input, textarea').forEach((el) => {
    el.addEventListener('input', () => {
      const wrapper = el.closest('.field');
      if (wrapper.classList.contains('invalid') && el.value.trim().length > 0) {
        wrapper.classList.remove('invalid');
        const errorEl = wrapper.querySelector('.field__error');
        if (errorEl) errorEl.textContent = '';
      }
    });
  });
}

/* -------------------------------------------------------------------
   Modals — currently just "About me"
   Fade + scale in, backdrop blur, Escape-to-close, click-outside-to-
   close, background scroll lock, and focus sent to the close button
   for accessibility. Add a new modal by adding an entry to `triggers`
   below, pointing a trigger element id at the overlay's id.
------------------------------------------------------------------- */
function setupModals() {
  const triggers = [
    { trigger: document.getElementById('aboutMeBtn'), modalId: 'aboutModal' },
    { trigger: document.getElementById('viewSourceBtn'), modalId: 'sourceCodeModal' },
  ];

  let activeModal = null;
  let lastFocusedEl = null;

  function openModal(modal) {
    if (!modal) return;
    lastFocusedEl = document.activeElement;
    activeModal = modal;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    const closeBtn = modal.querySelector('.modal__close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    activeModal = null;

    if (lastFocusedEl) lastFocusedEl.focus();
  }

  triggers.forEach(({ trigger, modalId }) => {
    if (!trigger) return;
    const modal = document.getElementById(modalId);
    trigger.addEventListener('click', () => openModal(modal));
  });

  document.querySelectorAll('.modal-overlay').forEach((overlay) => {
    const closeBtn = overlay.querySelector('.modal__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal(overlay));
    }

    // Click on the dimmed backdrop (not the modal box itself) closes it
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) closeModal(overlay);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && activeModal) {
      closeModal(activeModal);
    }
  });
}

/* -------------------------------------------------------------------
   Skill progress — always visible on the right side of the Learning
   section (no modal, no second page). Bars animate from 0 -> their
   data-percent the first time the panel scrolls into view.
------------------------------------------------------------------- */
function initSkillProgress() {
  const panel = document.getElementById('learningProgress');
  if (!panel) return;

  const fillBars = () => {
    panel.querySelectorAll('.skill').forEach((skill) => {
      const percent = skill.dataset.percent || '0';
      const fill = skill.querySelector('.progress-fill');
      if (fill) fill.style.width = `${percent}%`;
    });
  };

  if (!('IntersectionObserver' in window)) {
    // Double rAF ensures the browser paints the 0% state first, so the
    // transition to the target width is actually visible.
    requestAnimationFrame(() => requestAnimationFrame(fillBars));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      requestAnimationFrame(() => requestAnimationFrame(fillBars));
      obs.disconnect();
    });
  }, { threshold: 0.3 });

  observer.observe(panel);
}
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("formSuccess");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      if (successMsg) successMsg.style.display = "block";
      form.reset();
    } else {
      alert("Failed to send message. Try again.");
      console.log(result);
    }
  });
}

