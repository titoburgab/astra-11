(function () {
  'use strict';

  var WEBHOOK_URL = 'https://n8n-wl35.srv1826775.hstgr.cloud/webhook/astra11-chat';
  var SESSION_KEY = 'astra11_chat_session';

  var fab = document.getElementById('chat-fab');
  var panel = document.getElementById('chat-panel');
  var closeBtn = document.getElementById('chat-close');
  var messagesEl = document.getElementById('chat-messages');
  var form = document.getElementById('chat-form');
  var input = document.getElementById('chat-input');
  var sendBtn = document.getElementById('chat-send');
  var leadToggle = document.getElementById('chat-lead-toggle');
  if (!fab || !panel || !form) return;

  var t = function (key, fallback) {
    return window.i18n ? window.i18n.t(key) : fallback;
  };

  function getSessionId() {
    try {
      var id = sessionStorage.getItem(SESSION_KEY);
      if (!id) {
        id = (window.crypto && crypto.randomUUID)
          ? crypto.randomUUID()
          : 'sess-' + Date.now() + '-' + Math.random().toString(16).slice(2);
        sessionStorage.setItem(SESSION_KEY, id);
      }
      return id;
    } catch (e) {
      return 'sess-' + Date.now();
    }
  }

  function currentPage() {
    return window.ASTRA11_PAGE || 'home';
  }

  function contactHref() {
    return window.ASTRA11_PAGE ? '/index.html#contact' : '#contact';
  }

  function currentLang() {
    if (window.i18n && typeof window.i18n.lang === 'function') return window.i18n.lang();
    return (document.documentElement.getAttribute('lang') || 'en').slice(0, 2);
  }

  var sessionId = getSessionId();
  var opened = false;
  var lastFocused = null;
  var leadOffered = false;

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function appendBubble(text, who) {
    var wrap = document.createElement('div');
    wrap.className = 'chat-bubble ' + (who === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot');
    wrap.textContent = text;
    messagesEl.appendChild(wrap);
    scrollToBottom();
    return wrap;
  }

  function appendTyping() {
    var wrap = document.createElement('div');
    wrap.className = 'chat-bubble chat-bubble-bot';
    wrap.setAttribute('data-typing', 'true');
    var dots = document.createElement('div');
    dots.className = 'chat-typing';
    dots.innerHTML = '<span></span><span></span><span></span>';
    wrap.appendChild(dots);
    messagesEl.appendChild(wrap);
    scrollToBottom();
    return wrap;
  }

  function appendCta() {
    var wrap = document.createElement('div');
    wrap.style.alignSelf = 'flex-start';
    wrap.style.marginTop = '2px';
    var link = document.createElement('a');
    link.href = contactHref();
    link.className = 'btn btn-primary';
    link.style.fontSize = '13px';
    link.style.padding = '10px 18px';
    link.textContent = t('chatbot.bookSession', 'Book a Discovery Session');
    link.addEventListener('click', function () { closePanel(); });
    wrap.appendChild(link);
    messagesEl.appendChild(wrap);
    scrollToBottom();
  }

  function appendLeadSuccess() {
    appendBubble(t('chatbot.leadSuccess', "Thanks — we'll be in touch."), 'bot');
  }

  function buildLeadForm() {
    var wrap = document.createElement('form');
    wrap.className = 'chat-lead-form';
    wrap.setAttribute('novalidate', '');

    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.className = 'contact-input';
    nameInput.autocomplete = 'name';
    nameInput.placeholder = t('chatbot.leadName', 'Name');

    var emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.className = 'contact-input';
    emailInput.autocomplete = 'email';
    emailInput.placeholder = t('chatbot.leadEmail', 'Email');

    var submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.className = 'btn btn-primary';
    submitBtn.style.fontSize = '13px';
    submitBtn.style.padding = '10px 18px';
    submitBtn.textContent = t('chatbot.leadSubmit', 'Send');

    wrap.appendChild(nameInput);
    wrap.appendChild(emailInput);
    wrap.appendChild(submitBtn);

    wrap.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = nameInput.value.trim();
      var email = emailInput.value.trim();
      if (!name && !email) return;
      submitBtn.disabled = true;
      wrap.remove();
      appendBubble([name, email].filter(Boolean).join(' · '), 'user');
      sendToAgent('[Shared contact info via the form]', { name: name, email: email });
    });

    return wrap;
  }

  function showLeadForm() {
    var holder = document.createElement('div');
    holder.style.alignSelf = 'stretch';
    holder.appendChild(buildLeadForm());
    messagesEl.appendChild(holder);
    scrollToBottom();
  }

  function openPanel() {
    lastFocused = document.activeElement;
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    fab.setAttribute('aria-expanded', 'true');
    document.addEventListener('keydown', onKeydown);
    document.addEventListener('mousedown', onOutsideClick);
    if (!opened) {
      opened = true;
      appendBubble(t('chatbot.greeting', "Hi! Ask me about our services, or I can point you to book a session."), 'bot');
    }
    window.setTimeout(function () { input.focus(); }, 50);
  }

  function closePanel() {
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    fab.setAttribute('aria-expanded', 'false');
    document.removeEventListener('keydown', onKeydown);
    document.removeEventListener('mousedown', onOutsideClick);
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  function onKeydown(e) {
    if (e.key === 'Escape') {
      closePanel();
      return;
    }
    if (e.key !== 'Tab') return;
    var focusable = panel.querySelectorAll('button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function onOutsideClick(e) {
    if (!panel.contains(e.target) && e.target !== fab && !fab.contains(e.target)) {
      closePanel();
    }
  }

  function autoGrow() {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 96) + 'px';
  }

  function sendToAgent(message, extra) {
    var typingBubble = appendTyping();
    var payload = {
      sessionId: sessionId,
      message: message,
      lang: currentLang(),
      page: currentPage(),
      name: (extra && extra.name) || '',
      email: (extra && extra.email) || '',
    };

    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(function (res) {
        if (!res.ok) throw new Error('Request failed');
        return res.json();
      })
      .then(function (data) {
        typingBubble.remove();
        if (extra && (extra.name || extra.email) && data.leadCaptured) {
          appendLeadSuccess();
        } else {
          appendBubble(data.reply || t('chatbot.errorGeneric', 'Something went wrong. Try again, or email hello@astra-11.com.'), 'bot');
        }
        if (data.escalate) appendCta();
        if (data.leadCaptured) {
          leadOffered = true;
          if (leadToggle) leadToggle.style.display = 'none';
        } else if (data.showLeadForm && !leadOffered) {
          leadOffered = true;
          if (leadToggle) leadToggle.style.display = 'none';
          showLeadForm();
        }
      })
      .catch(function () {
        typingBubble.remove();
        appendBubble(t('chatbot.errorGeneric', 'Something went wrong. Try again, or email hello@astra-11.com.'), 'bot');
      });
  }

  fab.addEventListener('click', function () {
    if (panel.classList.contains('is-open')) closePanel();
    else openPanel();
  });
  closeBtn.addEventListener('click', closePanel);

  input.addEventListener('input', autoGrow);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event('submit', { cancelable: true }));
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var message = input.value.trim();
    if (!message) return;
    appendBubble(message, 'user');
    input.value = '';
    autoGrow();
    sendToAgent(message);
  });

  if (leadToggle) {
    leadToggle.addEventListener('click', function () {
      if (leadOffered) return;
      leadOffered = true;
      leadToggle.style.display = 'none';
      showLeadForm();
    });
  }
})();
