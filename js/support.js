// js/support.js — Support page behavior

// ---- Report an Issue: quick-category selector cards ----
const quickCategoryButtons = document.querySelectorAll('.quick-category');
const reportCategorySelect = document.getElementById('report-category');

quickCategoryButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const isAlreadySelected = btn.classList.contains('selected');

    quickCategoryButtons.forEach((b) => b.classList.remove('selected'));

    if (!isAlreadySelected) {
      btn.classList.add('selected');
      const category = btn.getAttribute('data-category');
      if (reportCategorySelect && category) {
        reportCategorySelect.value = category;
      }
    } else if (reportCategorySelect) {
      reportCategorySelect.value = '';
    }
  });
});

// ---- Report an Issue: file upload dropzone ----
const reportFilesInput = document.getElementById('report-files');
const reportFileNameLabel = document.getElementById('report-file-name');
const reportDropzone = document.getElementById('report-dropzone');

if (reportFilesInput && reportFileNameLabel) {
  reportFilesInput.addEventListener('change', () => {
    const files = reportFilesInput.files;
    if (files && files.length > 0) {
      reportFileNameLabel.textContent = files.length === 1
        ? files[0].name
        : `${files.length} files selected`;
    } else {
      reportFileNameLabel.textContent = '';
    }
  });
}

if (reportDropzone && reportFilesInput) {
  ['dragover', 'dragenter'].forEach((evt) => {
    reportDropzone.addEventListener(evt, (e) => {
      e.preventDefault();
      reportDropzone.classList.add('border-secondary');
    });
  });

  ['dragleave', 'dragend'].forEach((evt) => {
    reportDropzone.addEventListener(evt, (e) => {
      e.preventDefault();
      reportDropzone.classList.remove('border-secondary');
    });
  });

  reportDropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    reportDropzone.classList.remove('border-secondary');
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      reportFilesInput.files = e.dataTransfer.files;
      reportFilesInput.dispatchEvent(new Event('change'));
    }
  });
}

// ---- Form submission handling (no backend yet) ----
function handleFormSubmit(form, button) {
  if (!form || !button) return;
  const originalText = button.textContent;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    button.textContent = 'Sent ✓';
    button.disabled = true;
    button.classList.add('opacity-70');

    setTimeout(() => {
      form.reset();
      quickCategoryButtons.forEach((b) => b.classList.remove('selected'));
      if (reportFileNameLabel) reportFileNameLabel.textContent = '';
      button.textContent = originalText;
      button.disabled = false;
      button.classList.remove('opacity-70');
    }, 2200);
  });
}

const reportForm = document.getElementById('report-form');
if (reportForm) {
  handleFormSubmit(reportForm, reportForm.querySelector('button[type="submit"]'));
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  handleFormSubmit(contactForm, contactForm.querySelector('button[type="submit"]'));
}