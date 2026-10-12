// Cal.com booking popup. Injected by Contact.tsx when the contact section comes near the viewport.
// The loader below is Cal.com's official embed snippet (element-click), unchanged.
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");

Cal("init", { origin: document.currentScript.dataset.origin });
// Paper and ink, like the rest of the site.
Cal("ui", { theme: "light", layout: "month_view", cssVarsPerTheme: { light: { "cal-brand": "#22211e" } } });

// Until this flag is set, the booking link keeps opening cal.com in a new tab.
document.querySelector('script[src="https://app.cal.com/embed/embed.js"]').addEventListener("load", function () {
  document.documentElement.dataset.cal = "ready";
});
