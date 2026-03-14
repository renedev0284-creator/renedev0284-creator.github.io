(function () {
  var metaEl = document.getElementById('post-views-meta');
  var countEl = document.getElementById('post-view-count');
  if (!metaEl || !countEl) return;

  var slug = metaEl.getAttribute('data-post-slug');
  if (!slug) return;

  var apiBase = 'https://comentarios.finanzasreales.com/api/visitas.php';

  function formatNumber(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return n.toLocaleString('es');
  }

  fetch(apiBase, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ post_slug: slug })
  })
    .then(function () {
      return fetch(apiBase + '?slug=' + encodeURIComponent(slug));
    })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data.success) return;
      var views = data.views || 0;
      countEl.textContent = formatNumber(views) + (views === 1 ? ' lectura' : ' lecturas');
      metaEl.classList.add('loaded');
    })
    .catch(function () {});
})();
