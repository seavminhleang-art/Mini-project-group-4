// js/company.js — single-open FAQ accordion
//
// The top-level Services/Shipments/Company/Support pills are real <a href>
// links now (clicking one navigates straight to that page), so there's no
// more JS-managed dropdown-open state to handle here — the preview panel
// shows purely via group-hover:/group-focus-within: CSS on .dropdown-panel.

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
