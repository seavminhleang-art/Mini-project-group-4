// js/home.js — nav dropdown toggle (click + keyboard, works alongside the group-hover CSS)
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
  const trigger = item.querySelector('.nav-trigger');
  if (!trigger) return;

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = item.classList.contains('open');

    navItems.forEach((i) => {
      i.classList.remove('open');
      const t = i.querySelector('.nav-trigger');
      if (t) t.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-item')) {
    navItems.forEach((i) => {
      i.classList.remove('open');
      const t = i.querySelector('.nav-trigger');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navItems.forEach((i) => {
      i.classList.remove('open');
      const t = i.querySelector('.nav-trigger');
      if (t) t.setAttribute('aria-expanded', 'false');
    });
  }
});