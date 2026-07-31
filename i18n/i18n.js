/* ─── AITHORIS i18n Engine ─────────────────────────────────────────────────
 *
 * HOW TO ADD A NEW PAGE:
 *   1. Add your new key namespace to i18n/en.js and i18n/es.js
 *      (e.g. about: { headline: '…', body: '…' })
 *   2. Add data-i18n="about.headline" to every translatable element in the
 *      new page's HTML.
 *   3. Include these three scripts in <head> (no defer — early load avoids
 *      flash of wrong language):
 *        <script src="/i18n/en.js"></script>
 *        <script src="/i18n/es.js"></script>
 *        <script src="/i18n/i18n.js"></script>
 *   4. Done — detection, toggle, and persistence are automatic.
 *
 * ATTRIBUTE REFERENCE:
 *   data-i18n="key"              sets element.textContent
 *   data-i18n-html="key"         sets element.innerHTML  (use for <br>, <span>)
 *   data-i18n-placeholder="key"  sets input/textarea placeholder
 *   data-i18n-aria-label="key"   sets aria-label attribute
 *
 * LANGUAGE TOGGLE:
 *   Any element with data-lang-btn="en" or data-lang-btn="es" acts as a
 *   language switcher. aria-pressed reflects the active language.
 *
 * FALLBACK:
 *   Missing key in active locale → silently uses English value.
 *   Missing key in English → key string returned as-is (no crash).
 *
 * URL:
 *   Active language is reflected as ?lang=en / ?lang=es so links can be
 *   shared and Googlebot sees the right hreflang alternate URLs.
 * ─────────────────────────────────────────────────────────────────────────*/
(function () {
  'use strict';

  var SUPPORTED    = ['en', 'es'];
  var DEFAULT_LANG = 'en';
  var LS_KEY       = 'aithoris_lang';

  // ── Resolve initial language (priority: URL > localStorage > navigator) ──
  function detectLang() {
    // 1. URL query param: ?lang=es
    var search = window.location.search;
    var match  = search.match(/[?&]lang=([a-z]{2})/);
    if (match && SUPPORTED.indexOf(match[1]) !== -1) return match[1];

    // 2. localStorage persistence
    try {
      var stored = localStorage.getItem(LS_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) {}

    // 3. Browser locale
    var browser = ((navigator.language || navigator.userLanguage || '').slice(0, 2)).toLowerCase();
    if (SUPPORTED.indexOf(browser) !== -1) return browser;

    return DEFAULT_LANG;
  }

  // ── Nested key lookup: get(obj, 'a.b.c') ─────────────────────────────────
  function get(obj, path) {
    return path.split('.').reduce(function (o, k) {
      return (o !== null && o !== undefined && o[k] !== undefined) ? o[k] : undefined;
    }, obj);
  }

  // ── Translate a single key, falling back to EN ───────────────────────────
  function t(key, lang) {
    var strings = window.i18nStrings || {};
    var val = get(strings[lang] || {}, key);
    if (val === undefined && lang !== DEFAULT_LANG) {
      val = get(strings[DEFAULT_LANG] || {}, key);
    }
    return val !== undefined ? val : key;
  }

  // ── Resolve <title>/description, preferring a page-specific override ────
  // Pages other than index.html can set window.AITHORIS_PAGE = 'pageName' (see
  // portfolio.html) so their <title>/meta description come from
  // `pageName.meta.title` / `pageName.meta.description` instead of the
  // global `meta.*` keys used on the homepage.
  function metaValue(field, lang) {
    if (window.AITHORIS_PAGE) {
      var strings  = window.i18nStrings || {};
      var pageKey  = window.AITHORIS_PAGE + '.meta.' + field;
      var val = get(strings[lang] || {}, pageKey);
      if (val === undefined && lang !== DEFAULT_LANG) {
        val = get(strings[DEFAULT_LANG] || {}, pageKey);
      }
      if (val !== undefined) return val;
    }
    return t('meta.' + field, lang);
  }

  // ── Apply all translations to the DOM ────────────────────────────────────
  function applyTranslations(lang) {
    var i, el, val;

    // textContent
    var textNodes = document.querySelectorAll('[data-i18n]');
    for (i = 0; i < textNodes.length; i++) {
      el  = textNodes[i];
      val = t(el.getAttribute('data-i18n'), lang);
      if (typeof val === 'string') el.textContent = val;
    }

    // innerHTML (styled spans, <br> line-breaks)
    var htmlNodes = document.querySelectorAll('[data-i18n-html]');
    for (i = 0; i < htmlNodes.length; i++) {
      el  = htmlNodes[i];
      val = t(el.getAttribute('data-i18n-html'), lang);
      if (typeof val === 'string') el.innerHTML = val;
    }

    // placeholder
    var phNodes = document.querySelectorAll('[data-i18n-placeholder]');
    for (i = 0; i < phNodes.length; i++) {
      el  = phNodes[i];
      val = t(el.getAttribute('data-i18n-placeholder'), lang);
      if (typeof val === 'string') el.placeholder = val;
    }

    // aria-label
    var ariaNodes = document.querySelectorAll('[data-i18n-aria-label]');
    for (i = 0; i < ariaNodes.length; i++) {
      el  = ariaNodes[i];
      val = t(el.getAttribute('data-i18n-aria-label'), lang);
      if (typeof val === 'string') el.setAttribute('aria-label', val);
    }

    // <html lang>
    document.documentElement.lang = lang;

    // <title>
    var titleVal = metaValue('title', lang);
    if (typeof titleVal === 'string') document.title = titleVal;

    // <meta name="description">
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      var descVal = metaValue('description', lang);
      if (typeof descVal === 'string') metaDesc.setAttribute('content', descVal);
    }

    // hreflang <link> elements
    updateHreflang(lang);

    // toggle button visual state
    updateToggleUI(lang);
  }

  function updateHreflang(lang) {
    var base = window.location.origin + window.location.pathname;
    for (var i = 0; i < SUPPORTED.length; i++) {
      var l    = SUPPORTED[i];
      var link = document.querySelector('link[hreflang="' + l + '"]');
      if (link) link.setAttribute('href', base + '?lang=' + l);
    }
    var xDefault = document.querySelector('link[hreflang="x-default"]');
    if (xDefault) xDefault.setAttribute('href', base);
  }

  function updateToggleUI(lang) {
    var btns = document.querySelectorAll('[data-lang-btn]');
    for (var i = 0; i < btns.length; i++) {
      var btn      = btns[i];
      var isActive = btn.getAttribute('data-lang-btn') === lang;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    }
  }

  // ── Persist choice: localStorage + URL query param ───────────────────────
  function persist(lang) {
    try { localStorage.setItem(LS_KEY, lang); } catch (e) {}
    try {
      var url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    } catch (e) {
      // Fallback: manual query string
      var sep     = window.location.search.indexOf('?') === -1 ? '?' : '&';
      var cleaned = window.location.search.replace(/[?&]lang=[a-z]{2}/, '');
      window.history.replaceState({}, '', window.location.pathname + cleaned + sep + 'lang=' + lang);
    }
  }

  // ── Language detection happens synchronously (no DOM needed) ─────────────
  var currentLang = detectLang();

  // ── Public API ────────────────────────────────────────────────────────────
  window.i18n = {
    /** Translate a key in the current locale. Falls back to EN. */
    t: function (key) { return t(key, currentLang); },
    /** Returns the active ISO language code ('en' or 'es'). */
    lang: function () { return currentLang; },
    /** Switch language, update DOM, persist choice, fire event. */
    setLanguage: function (lang) {
      if (SUPPORTED.indexOf(lang) === -1) return;
      currentLang = lang;
      applyTranslations(lang);
      persist(lang);
      try {
        document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } }));
      } catch (e) {}
    },
  };

  // ── Wire up data-lang-btn clicks via event delegation ────────────────────
  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-lang-btn]') : null;
    if (!btn) return;
    window.i18n.setLanguage(btn.getAttribute('data-lang-btn'));
  });

  // ── Init ──────────────────────────────────────────────────────────────────
  function init() {
    applyTranslations(currentLang);
    // Ensure URL always carries the lang param for shareability
    var hasParam = /[?&]lang=/.test(window.location.search);
    if (!hasParam) persist(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
