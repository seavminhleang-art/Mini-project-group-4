// js/company.js — nav dropdown toggle (same pattern as js/home.js) + single-open FAQ accordion

// ---- Nav dropdown toggle (click + keyboard, works alongside the group-hover CSS) ----
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

// ---- FAQ accordion (single-open: opening one closes any other open item) ----
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const trigger = item.querySelector('.faq-trigger');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-icon');
  if (!trigger || !answer) return;

  trigger.addEventListener('click', () => {
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    faqItems.forEach((other) => {
      const otherTrigger = other.querySelector('.faq-trigger');
      const otherAnswer = other.querySelector('.faq-answer');
      const otherIcon = other.querySelector('.faq-icon');
      if (!otherTrigger || !otherAnswer) return;
      otherTrigger.setAttribute('aria-expanded', 'false');
      otherAnswer.classList.add('hidden');
      if (otherIcon) otherIcon.textContent = '+';
    });

    if (!isOpen) {
      trigger.setAttribute('aria-expanded', 'true');
      answer.classList.remove('hidden');
      if (icon) icon.textContent = '−';
    }
  });
});
