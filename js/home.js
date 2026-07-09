// js/home.js — nav dropdown toggle
//
// The top-level Services/Shipments/Company/Support pills are now real
// <a href> links (clicking one navigates straight to that page), so the
// dropdown preview no longer needs a JS-managed .open state — it's shown
// purely via the group-hover:/group-focus-within: CSS on .dropdown-panel
// in each page's <head> markup. This file is intentionally left with no
// nav logic; kept as a stable include so pages that still reference it
// don't need an extra edit.
