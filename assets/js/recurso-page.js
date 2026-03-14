(function() {
  'use strict';

  // â”€â”€ Gate â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  var API = 'https://comentarios.finanzasreales.com/api/newsletter.php';
  var GATE_KEY = 'gate_unlocked';

  var overlay  = document.getElementById('gate-overlay');
  var content  = document.getElementById('recurso-content');
  var form     = document.getElementById('gate-form');
  var btn      = document.getElementById('gate-btn');
  var msgEl    = document.getElementById('gate-msg');
  var nombreEl = document.getElementById('gate-nombre');
  var emailEl  = document.getElementById('gate-email');
  var resourceSlug = form ? (form.dataset.resourceSlug || 'recurso') : 'recurso';

  if (!overlay || !content || !form || !btn || !msgEl || !nombreEl || !emailEl) {
    return;
  }

  function unlock() {
    localStorage.setItem(GATE_KEY, '1');
    overlay.classList.add('unlocking');
    content.classList.add('visible');
    setTimeout(function() { overlay.style.display = 'none'; }, 500);
  }

  // Retornante: ya se suscribiÃ³ antes
  if (localStorage.getItem(GATE_KEY)) {
    overlay.style.display = 'none';
    content.classList.add('visible');
    return;
  }

  // Mostrar gate
  overlay.style.display = 'flex';

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var email  = emailEl.value.trim();
    var nombre = nombreEl.value.trim();
    if (!email) return;

    btn.disabled = true;
    btn.textContent = 'Enviando...';
    msgEl.className = 'gate-msg';

    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre: nombre, email: email, fuente: 'recurso-' + resourceSlug })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data.success) {
        unlock();
      } else {
        var msg = (data.error || '').toLowerCase();
        if (msg.indexOf('ya') !== -1 || msg.indexOf('exist') !== -1 || msg.indexOf('registr') !== -1) {
          unlock();
        } else {
          msgEl.className = 'gate-msg error';
          msgEl.textContent = 'âœ— ' + (data.error || 'Error al enviar. IntentÃ¡ de nuevo.');
          btn.disabled = false;
          btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Acceder gratis';
        }
      }
    })
    .catch(function() { unlock(); });
  });

})();
