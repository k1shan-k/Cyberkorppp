const root = document.documentElement;
const body = document.body;
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

const menuButton = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('[data-navigation]');
const submenuButtons = [...document.querySelectorAll('[data-submenu-toggle]')];

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  body.classList.remove('menu-open');
}

menuButton?.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opening));
  navigation.classList.toggle('is-open', opening);
  body.classList.toggle('menu-open', opening);
});

submenuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const parent = button.closest('.nav__item--parent');
    const opening = button.getAttribute('aria-expanded') !== 'true';
    submenuButtons.forEach((other) => {
      if (other === button) return;
      other.setAttribute('aria-expanded', 'false');
      other.closest('.nav__item--parent')?.classList.remove('is-expanded');
    });
    button.setAttribute('aria-expanded', String(opening));
    parent?.classList.toggle('is-expanded', opening);
  });
});

navigation?.addEventListener('click', (event) => {
  if (event.target.closest('a') && window.matchMedia('(max-width: 900px)').matches) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
    submenuButtons.forEach((button) => {
      button.setAttribute('aria-expanded', 'false');
      button.closest('.nav__item--parent')?.classList.remove('is-expanded');
    });
    menuButton?.focus();
  }
});

const siteHeader = document.querySelector('.site-header');
const scrollProgress = document.querySelector('[data-scroll-progress]');
let scrollFrame = 0;

function updatePageState() {
  const scrollTop = Math.max(window.scrollY, 0);
  const scrollRange = Math.max(root.scrollHeight - window.innerHeight, 1);
  const progress = Math.min(scrollTop / scrollRange, 1);
  siteHeader?.classList.toggle('is-scrolled', scrollTop > 56);
  if (scrollProgress) scrollProgress.style.transform = `scaleX(${progress})`;
  scrollFrame = 0;
}

function requestPageState() {
  if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updatePageState);
}

window.addEventListener('scroll', requestPageState, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
  requestPageState();
}, { passive: true });
updatePageState();

function updateClock() {
  const now = new Date();
  const utc = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'UTC'
  });
  document.querySelectorAll('[data-utc-time]').forEach((node) => { node.textContent = utc; });
}
updateClock();
window.setInterval(updateClock, 1000);
document.querySelectorAll('[data-current-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

for (const explorer of document.querySelectorAll('[data-stack-explorer]')) {
  const tabs = [...explorer.querySelectorAll('[role="tab"]')];
  const panels = [...explorer.querySelectorAll('[role="tabpanel"]')];

  function animatePanel(panel) {
    if (motionPreference.matches || typeof panel.animate !== 'function') return;
    panel.getAnimations({ subtree: true }).forEach((animation) => animation.cancel());
    panel.animate(
      [
        { opacity: 0, transform: 'translate3d(0, 10px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)' }
      ],
      { duration: 360, easing: 'cubic-bezier(.2,.75,.25,1)', fill: 'backwards' }
    );
    const sequence = [
      panel.querySelector('.stack-panel__head'),
      panel.querySelector('.stack-panel__body > div'),
      ...panel.querySelectorAll('.product-ledger li'),
      panel.querySelector('.stack-panel__foot')
    ].filter(Boolean);
    sequence.forEach((node, index) => {
      node.animate(
        [
          { opacity: 0, transform: 'translate3d(-8px, 0, 0)' },
          { opacity: 1, transform: 'translate3d(0, 0, 0)' }
        ],
        {
          duration: 300,
          delay: 70 + (index * 45),
          easing: 'cubic-bezier(.2,.75,.25,1)',
          fill: 'backwards'
        }
      );
    });
    panel.classList.add('is-switching');
    window.setTimeout(() => panel.classList.remove('is-switching'), 560);
  }

  function selectTab(tab, moveFocus = false) {
    const target = tab.dataset.layerTarget;
    const targetPanel = panels.find((panel) => panel.dataset.layerPanel === target);
    const changing = targetPanel?.hidden;
    tabs.forEach((candidate) => {
      const selected = candidate === tab;
      candidate.classList.toggle('is-selected', selected);
      candidate.setAttribute('aria-selected', String(selected));
      candidate.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((panel) => {
      const selected = panel === targetPanel;
      panel.hidden = !selected;
      panel.classList.toggle('is-selected', selected);
    });
    if (changing && targetPanel) animatePanel(targetPanel);
    if (moveFocus) tab.focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (event) => {
      let next = null;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = tabs[(index + 1) % tabs.length];
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = tabs[(index - 1 + tabs.length) % tabs.length];
      if (event.key === 'Home') next = tabs[0];
      if (event.key === 'End') next = tabs[tabs.length - 1];
      if (next) {
        event.preventDefault();
        selectTab(next, true);
      }
    });
  });
}

const revealNodes = [...document.querySelectorAll('.reveal:not(.reveal--immediate)')];
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add('is-visible'));
}

const motionNodes = [...document.querySelectorAll([
  '.network-diagram',
  '.architecture-ribbon',
  '.defense-radar',
  '.defense-loop',
  '.inventory-map',
  '.priority-matrix',
  '.ai-intelligence__system',
  '.ai-intel-overview__pipeline',
  '.intel-graph'
].join(','))];

motionNodes.forEach((node) => node.classList.add('motion-managed'));
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const motionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-inview', entry.isIntersecting);
      if (entry.isIntersecting) entry.target.classList.add('has-entered');
    });
  }, { threshold: 0.06, rootMargin: '120px 0px' });
  motionNodes.forEach((node) => motionObserver.observe(node));
} else {
  motionNodes.forEach((node) => node.classList.add('is-inview', 'has-entered'));
}

let pointerFrame = 0;
let pendingPointer = null;

function updatePointerLens() {
  if (pendingPointer) {
    const { surface, clientX, clientY } = pendingPointer;
    const bounds = surface.getBoundingClientRect();
    surface.style.setProperty('--pointer-x', `${clientX - bounds.left}px`);
    surface.style.setProperty('--pointer-y', `${clientY - bounds.top}px`);
    surface.classList.add('has-pointer');
  }
  pendingPointer = null;
  pointerFrame = 0;
}

function queuePointerUpdate(surface, event) {
  if (!finePointer.matches || motionPreference.matches) return;
  pendingPointer = { surface, clientX: event.clientX, clientY: event.clientY };
  if (!pointerFrame) pointerFrame = window.requestAnimationFrame(updatePointerLens);
}

for (const diagram of document.querySelectorAll('[data-motion-surface]')) {
  const surface = diagram.querySelector('.network-diagram__canvas');
  if (!surface) continue;
  surface.addEventListener('pointerenter', (event) => queuePointerUpdate(surface, event));
  surface.addEventListener('pointermove', (event) => queuePointerUpdate(surface, event), { passive: true });
  surface.addEventListener('pointerleave', () => surface.classList.remove('has-pointer'));
}

const intentMap = {
  'cyber-defense': 'Cyber defense',
  'threat-intelligence': 'Threat intelligence',
  research: 'Research',
  roadmap: 'Quantum security'
};
const query = new URLSearchParams(window.location.search);
const intent = query.get('intent');
const layer = query.get('layer');

for (const form of document.querySelectorAll('[data-intake-form]')) {
  const requirement = form.querySelector('[name="requirement"]');
  if (requirement && intentMap[intent]) requirement.value = intentMap[intent];
  const message = form.querySelector('[name="message"]');
  if (message && layer && !message.value) message.value = `Architecture layer of interest: ${layer.toUpperCase()}\n`;
}

root.dataset.ready = 'true';
