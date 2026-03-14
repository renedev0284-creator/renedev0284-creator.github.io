document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.querySelector('.mobile-menu-toggle');
  var mainNav = document.querySelector('.main-nav');
  var menuOverlay = document.querySelector('.menu-overlay');
  var body = document.body;
  var dropdownToggle = document.querySelector('.nav-dropdown-toggle');

  if (menuToggle && mainNav && menuOverlay) {
    function openMenu() {
      mainNav.classList.add('active');
      menuToggle.classList.add('active');
      menuOverlay.classList.add('active');
      body.classList.add('menu-open');
      menuToggle.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      mainNav.classList.remove('active');
      menuToggle.classList.remove('active');
      menuOverlay.classList.remove('active');
      body.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      if (dropdownToggle) {
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    }

    menuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (mainNav.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menuOverlay.addEventListener('click', function (e) {
      e.preventDefault();
      closeMenu();
    });

    if (dropdownToggle) {
      dropdownToggle.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          var isExpanded = this.getAttribute('aria-expanded') === 'true';
          this.setAttribute('aria-expanded', String(!isExpanded));
        }
      });
    }

    document.querySelectorAll('.nav-link:not(.nav-dropdown-toggle), .dropdown-menu a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        closeMenu();
      }
    });

    var currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link, .dropdown-menu a').forEach(function (link) {
      var linkPath = link.getAttribute('href');
      if (linkPath === currentPath) {
        link.classList.add('active');
      }
    });
  }

  var banner = document.getElementById('wb-banner');
  var msgEl = document.getElementById('wb-msg');
  var closeBtn = document.getElementById('wb-close');
  var bannerStorageKey = 'wb_banner_dismissed';

  if (banner && msgEl && closeBtn) {
    if (localStorage.getItem(bannerStorageKey)) {
      banner.style.display = 'none';
    } else {
      var messages = [
        '¿Cómo estás realmente? Test de bienestar emocional, gratis',
        'Descubrí tu estado mental en 5 preguntas',
        'Ansiedad, energía, motivación: ¿cómo estás hoy?',
        'Test de bienestar: evaluá tu salud emocional sin costo'
      ];
      var current = 0;

      function showMsg(idx) {
        msgEl.classList.add('wb-fading');
        setTimeout(function () {
          msgEl.textContent = messages[idx];
          msgEl.classList.remove('wb-fading');
        }, 450);
      }

      msgEl.textContent = messages[0];
      window.setInterval(function () {
        current = (current + 1) % messages.length;
        showMsg(current);
      }, 5000);

      closeBtn.addEventListener('click', function () {
        banner.classList.add('wb-hiding');
        window.setTimeout(function () {
          banner.style.display = 'none';
        }, 400);
        localStorage.setItem(bannerStorageKey, '1');
      });
    }
  }

  var toast = document.getElementById('booksToast');
  if (!toast) return;
  if (window.matchMedia('(max-width: 1024px)').matches) return;

  var toastKey = 'books_toast_dismissed';
  if (sessionStorage.getItem(toastKey) === '1') return;

  window.setTimeout(function () {
    toast.classList.add('show');
  }, 4500);

  var toastCloseBtn = toast.querySelector('.books-toast-close');
  if (toastCloseBtn) {
    toastCloseBtn.addEventListener('click', function () {
      toast.classList.remove('show');
      sessionStorage.setItem(toastKey, '1');
    });
  }

  toast.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      sessionStorage.setItem(toastKey, '1');
    });
  });
});
