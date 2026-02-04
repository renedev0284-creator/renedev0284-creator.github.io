---
layout: default
title: Política de Cookies
permalink: /cookies/
---

<link rel="stylesheet" href="{{ '/assets/css/legal-pages.css' | relative_url }}">

<div class="legal-page">
  <header class="legal-header">
    <h1>Política de Cookies</h1>
    <p class="legal-date">Última actualización: {{ 'now' | date: "%-d de %B de %Y" }}</p>
  </header>

  <div class="legal-content">
    <section class="legal-section">
      <h2>¿Qué son las cookies?</h2>
      <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo cuando los visitas. Se utilizan para recordar tus preferencias y mejorar tu experiencia de navegación.</p>
    </section>

    <section class="legal-section">
      <h2>Cookies que utilizo</h2>
      
      <div class="cookie-table">
        <div class="cookie-category">
          <h3>🔧 Cookies Técnicas (Necesarias)</h3>
          <p class="category-desc">Esenciales para el funcionamiento básico del sitio.</p>
          
          <div class="cookie-item">
            <h4>Cookies de sesión</h4>
            <p><strong>Propósito:</strong> Mantener tu sesión de navegación</p>
            <p><strong>Duración:</strong> Se eliminan al cerrar el navegador</p>
            <p><strong>Proveedor:</strong> GitHub Pages</p>
          </div>
        </div>

        <div class="cookie-category">
          <h3>📊 Cookies Analíticas</h3>
          <p class="category-desc">Me ayudan a entender cómo usas el sitio.</p>
          
          <div class="cookie-item">
            <h4>Contador de visitas</h4>
            <p><strong>Propósito:</strong> Mostrar número de visitas por artículo</p>
            <p><strong>Duración:</strong> Persistente</p>
            <p><strong>Información:</strong> Solo cuenta visitas, no identifica usuarios</p>
          </div>
        </div>

        <div class="cookie-category">
          <h3>🎨 Cookies de Preferencias</h3>
          <p class="category-desc">Recuerdan tus elecciones personales.</p>
          
          <div class="cookie-item">
            <h4>Consentimiento de cookies</h4>
            <p><strong>Propósito:</strong> Recordar tu elección sobre el banner de cookies</p>
            <p><strong>Cookie:</strong> cookie_consent</p>
            <p><strong>Duración:</strong> 1 año</p>
          </div>

          <div class="cookie-item">
            <h4>Reacciones locales</h4>
            <p><strong>Propósito:</strong> Recordar tus reacciones (❤️🔥👏) en los artículos</p>
            <p><strong>Storage:</strong> localStorage</p>
            <p><strong>Duración:</strong> Hasta que borres el caché</p>
          </div>
        </div>
      </div>
    </section>

    <section class="legal-section">
      <h2>Cookies de terceros</h2>
      <p>Este blog puede incluir contenido de servicios externos que establecen sus propias cookies:</p>
      
      <ul>
        <li><strong>GitHub (Utterances/Giscus):</strong> Para el sistema de comentarios</li>
        <li><strong>YouTube:</strong> Si hay videos embebidos</li>
        <li><strong>Twitter:</strong> Si hay tweets embebidos</li>
      </ul>

      <p>Estos servicios tienen sus propias políticas de cookies que no controlo.</p>
    </section>

    <section class="legal-section">
      <h2>¿Cómo gestionar las cookies?</h2>
      
      <h3>Desde tu navegador</h3>
      <p>Puedes configurar tu navegador para que rechace todas o algunas cookies:</p>
      
      <div class="browser-links">
        <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" class="browser-link">
          Chrome →
        </a>
        <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener" class="browser-link">
          Firefox →
        </a>
        <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener" class="browser-link">
          Safari →
        </a>
        <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener" class="browser-link">
          Edge →
        </a>
      </div>

      <div class="warning-box">
        <p><strong>⚠️ Nota:</strong> Bloquear todas las cookies puede afectar la funcionalidad del sitio.</p>
      </div>
    </section>

    <section class="legal-section">
      <h2>Tu consentimiento</h2>
      <p>Al continuar navegando en este sitio, aceptas el uso de cookies según se describe en esta política.</p>
      <p>Puedes retirar tu consentimiento en cualquier momento borrando las cookies de tu navegador o <a href="#" onclick="resetCookieConsent()">haciendo clic aquí para restablecer el banner de cookies</a>.</p>
    </section>

    <section class="legal-section">
      <h2>Actualizaciones</h2>
      <p>Esta política puede actualizarse ocasionalmente. Te recomendamos revisarla periódicamente.</p>
    </section>

    <section class="legal-section">
      <h2>Más información</h2>
      <p>Para preguntas sobre el uso de cookies:</p>
      <ul class="contact-methods">
        <li><strong>Email:</strong> <a href="mailto:{{ site.email }}">{{ site.email }}</a></li>
        <li><strong>Política de Privacidad:</strong> <a href="/privacidad/">Ver aquí</a></li>
      </ul>
    </section>
  </div>

  <footer class="legal-footer">
    <p><a href="/">← Volver al inicio</a></p>
  </footer>
</div>

<script>
function resetCookieConsent() {
  document.cookie = "cookie_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  alert("Preferencias restablecidas. Recarga la página para ver el banner de nuevo.");
  location.reload();
}
</script>