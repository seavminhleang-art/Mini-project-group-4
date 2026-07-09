// js/service.js — nav dropdown toggle
//
// The top-level Services/Shipments/Company/Support pills are real <a href>
// links (clicking one navigates straight to that page), so the dropdown
// preview no longer needs a JS-managed .open state — it's shown purely via
// the group-hover:/group-focus-within: CSS on .dropdown-panel in the page's
// <head> markup. This file is intentionally left with no nav logic; kept as
// a stable include so the page doesn't need an extra edit if that changes.
