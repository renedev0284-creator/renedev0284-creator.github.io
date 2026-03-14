(function () {
  var track = document.getElementById('rec-track');
  if (!track) return;

  var metaUrl = track.getAttribute('data-meta-url');
  var popularApi = 'https://comentarios.finanzasreales.com/api/visitas.php?top=10';
  var viewsApi = 'https://comentarios.finanzasreales.com/api/visitas.php?top=100';

  function renderPopularCards() {
    function cardHTML(post, views) {
      var img = post.image
        ? '<div class="rec-card-image"><img src="' + post.image + '" alt="' + post.title.replace(/"/g, '') + '" loading="lazy"></div>'
        : '<div class="rec-card-image rec-card-no-img"><span class="rec-card-initial">' + (post.title[0] || '').toUpperCase() + '</span></div>';
      var tag = (post.tags && post.tags[0]) ? '<span class="rec-card-tag">' + post.tags[0] + '</span>' : '';
      var viewsBadge = views != null ? '<span class="rec-card-views">' + views.toLocaleString() + ' lecturas</span>' : '';

      return '<a href="' + post.url + '" class="rec-card">'
        + img
        + '<div class="rec-card-body">'
        + tag
        + '<h3 class="rec-card-title">' + post.title + '</h3>'
        + '<div class="rec-card-meta">'
        + '<time datetime="' + post.dateISO + '">' + post.date + '</time>'
        + '<span aria-hidden="true">·</span>'
        + '<span>' + post.readTime + ' min</span>'
        + viewsBadge
        + '</div>'
        + '<p class="rec-card-excerpt">' + (post.excerpt || '') + '</p>'
        + '</div>'
        + '</a>';
    }

    Promise.all([
      fetch(popularApi).then(function (r) { return r.json(); }),
      fetch(metaUrl).then(function (r) { return r.json(); })
    ]).then(function (results) {
      var popular = results[0];
      var allPosts = results[1];
      if (!popular.success || !popular.data || !popular.data.length) return;

      var ordered = popular.data.map(function (item) {
        var post = allPosts.find(function (candidate) { return candidate.slug === item.post_slug; });
        return post ? { post: post, views: item.views } : null;
      }).filter(Boolean);

      if (!ordered.length) return;

      track.innerHTML = ordered.map(function (item) {
        return cardHTML(item.post, item.views);
      }).join('');
    }).catch(function () {});
  }

  function hydrateViewBadges() {
    var badges = document.querySelectorAll('.post-view-badge[data-view-slug]');
    if (!badges.length) return;

    function formatNumber(n) {
      if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
      if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
      return n.toLocaleString('es');
    }

    fetch(viewsApi)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!data.success || !data.data) return;

        var map = {};
        data.data.forEach(function (item) {
          map[item.post_slug] = item.views;
        });

        badges.forEach(function (el) {
          var slug = el.getAttribute('data-view-slug');
          var views = map[slug];
          if (!views || views < 1) return;
          el.innerHTML =
            '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">'
            + '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>'
            + '<circle cx="12" cy="12" r="3"/>'
            + '</svg>'
            + formatNumber(views);
          el.classList.add('loaded');
        });
      })
      .catch(function () {});
  }

  function setupSlider() {
    var prev = document.getElementById('rec-prev');
    var next = document.getElementById('rec-next');
    if (!prev || !next) return;

    var gap = 14;
    var autoTimer = null;
    var userPaused = false;

    function cardWidth() {
      var first = track.querySelector('.rec-card');
      return first ? first.offsetWidth + gap : 244;
    }

    function scrollByCard(dir) {
      track.scrollBy({ left: dir * cardWidth(), behavior: 'smooth' });
    }

    function updateArrows() {
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
    }

    function tick() {
      var atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
      if (atEnd) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollByCard(1);
      }
    }

    function startAuto() {
      if (autoTimer) clearInterval(autoTimer);
      autoTimer = setInterval(tick, 4000);
    }

    function stopAuto() {
      clearInterval(autoTimer);
      autoTimer = null;
    }

    prev.addEventListener('click', function () {
      userPaused = true;
      stopAuto();
      scrollByCard(-1);
    });
    next.addEventListener('click', function () {
      userPaused = true;
      stopAuto();
      scrollByCard(1);
    });

    track.addEventListener('scroll', updateArrows, { passive: true });
    track.addEventListener('mouseenter', stopAuto);
    track.addEventListener('mouseleave', function () {
      if (!userPaused) startAuto();
    });
    track.addEventListener('touchstart', function () {
      userPaused = true;
      stopAuto();
    }, { passive: true });

    updateArrows();
    startAuto();
  }

  renderPopularCards();
  hydrateViewBadges();
  setupSlider();
})();
