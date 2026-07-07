/* ============================================================
   Shipment Page — Por Express
   Handles: FAQ accordion (click + keyboard, aria-expanded, rotate arrow)
   ============================================================ */

(function () {
  "use strict";

  var triggers = document.querySelectorAll(".faq-trigger");

  function closeItem(trigger) {
    var panelId = trigger.getAttribute("aria-controls");
    var panel = document.getElementById(panelId);
    var chevron = trigger.querySelector(".faq-chevron");

    trigger.setAttribute("aria-expanded", "false");
    if (panel) panel.hidden = true;
    if (chevron) chevron.style.transform = "rotate(0deg)";
  }

  function openItem(trigger) {
    var panelId = trigger.getAttribute("aria-controls");
    var panel = document.getElementById(panelId);
    var chevron = trigger.querySelector(".faq-chevron");

    trigger.setAttribute("aria-expanded", "true");
    if (panel) panel.hidden = false;
    if (chevron) chevron.style.transform = "rotate(180deg)";
  }

  function toggleItem(trigger) {
    var isOpen = trigger.getAttribute("aria-expanded") === "true";

    // Close all other items (single-open accordion behavior)
    triggers.forEach(function (t) {
      if (t !== trigger) closeItem(t);
    });

    if (isOpen) {
      closeItem(trigger);
    } else {
      openItem(trigger);
    }
  }

  triggers.forEach(function (trigger) {
    // Click to open / close
    trigger.addEventListener("click", function () {
      toggleItem(trigger);
    });

    // Keyboard accessible: native <button> already fires "click" on
    // Enter and Space, but we guard explicitly for robustness.
    trigger.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
        event.preventDefault();
        toggleItem(trigger);
      }
    });
  });
})();