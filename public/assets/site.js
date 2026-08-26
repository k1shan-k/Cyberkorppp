const root = document.documentElement;
const body = document.body;

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

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});

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

  function selectTab(tab, moveFocus = false) {
    const target = tab.dataset.layerTarget;
    tabs.forEach((candidate) => {
      const selected = candidate === tab;
      candidate.classList.toggle('is-selected', selected);
      candidate.setAttribute('aria-selected', String(selected));
      candidate.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((panel) => {
      const selected = panel.dataset.layerPanel === target;
      panel.hidden = !selected;
      panel.classList.toggle('is-selected', selected);
    });
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
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
