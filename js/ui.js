// js/ui.js — dark-mode toggle + responsive mobile navbar

// ---- Dark mode ----
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {}
  });
}

// ---- Mobile menu ----
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (navToggle && mobileMenu) {
  const openIcon = navToggle.querySelector('.nav-open');
  const closeIcon = navToggle.querySelector('.nav-close');

  const setOpen = (open) => {
    mobileMenu.classList.toggle('hidden', !open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (openIcon) openIcon.classList.toggle('hidden', open);
    if (closeIcon) closeIcon.classList.toggle('hidden', !open);
  };

  navToggle.addEventListener('click', () => {
    setOpen(mobileMenu.classList.contains('hidden'));
  });

  // Close after tapping a link, or when resizing up to desktop.
  mobileMenu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => setOpen(false))
  );
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) setOpen(false);
  });
}
