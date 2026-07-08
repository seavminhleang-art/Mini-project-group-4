// js/Auth.js — Login / Sign Up page behavior

// ---- Password show/hide toggles ----
// Each toggle button has data-target="<input id>" and swaps the input's
// type between "password" and "text", flipping its eye / eye-slash icon.
const passwordToggles = document.querySelectorAll('.password-toggle');

passwordToggles.forEach((toggle) => {
  const targetId = toggle.getAttribute('data-target');
  const input = targetId ? document.getElementById(targetId) : null;
  const icon = toggle.querySelector('i');
  if (!input || !icon) return;

  toggle.addEventListener('click', () => {
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    icon.classList.toggle('fa-eye', !isHidden);
    icon.classList.toggle('fa-eye-slash', isHidden);
    toggle.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
  });
});

// ---- Forms: no backend yet, just prevent the default page reload ----
document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (e) => e.preventDefault());
});
