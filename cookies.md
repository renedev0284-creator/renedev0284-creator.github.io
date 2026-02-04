---
layout: default
title: Política de Cookies
permalink: /cookies/
---

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
      <h2>Cookies que utilizamos</h2>
      
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
          <p class="category-desc">Nos ayudan a entender cómo usas el sitio.</p>
          
          <div class="cookie-item">
            <h4>Google Analytics (si aplica)</h4>
            <p><strong>Propósito:</strong> Análisis de tráfico y comportamiento</p>
            <p><strong>Cookies:</strong> _ga, _gid, _gat</p>
            <p><strong>Duración:</strong> 2 años (_ga), 24 horas (_gid)</p>
            <p><strong>Puedes desactivarlas:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out</a></p>
          </div>

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
            <h4>Preferencias de tema (si aplica)</h4>
            <p><strong>Propósito:</strong> Recordar si elegiste modo oscuro/claro</p>
            <p><strong>Cookie:</strong> theme_preference</p>
            <p><strong>Duración:</strong> 1 año</p>
          </div>

          <div class="cookie-item">
            <h4>Consentimiento de cookies</h4>
            <p><strong>Propósito:</strong> Recordar tu elección sobre el banner de cookies</p>
            <p><strong>Cookie:</strong> cookie_consent</p>
            <p><strong>Duración:</strong> 1 año</p>
          </div>
        </div>
      </div>
    </section>

    <section class="legal-section">
      <h2>Cookies de terceros</h2>
      <p>Este blog puede incluir contenido de servicios externos que establecen sus propias cookies:</p>
      
      <ul>
        <li><strong>YouTube:</strong> Si hay videos embebidos</li>
        <li><strong>Twitter:</strong> Si hay tweets embebidos</li>
        <li><strong>GitHub Gist:</strong> Si hay código embebido</li>
      </ul>

      <p>Estos servicios tienen sus propias políticas de cookies que no controlamos.</p>
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
  // Borrar cookie de consentimiento
  document.cookie = "cookie_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  alert("Preferencias restablecidas. Recarga la página para ver el banner de nuevo.");
  location.reload();
}
</script>

<style>
/* Reutiliza los estilos de la página de privacidad */
.cookie-table {
  margin: 2rem 0;
}

.cookie-category {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: var(--color-bg-secondary);
  border-radius: 8px;
  border-left: 4px solid var(--color-orange);
}

.cookie-category h3 {
  margin-top: 0;
  font-family: var(--font-display);
  color: var(--color-text);
  font-size: 1.3rem;
}

.category-desc {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  margin: 0.5rem 0 1.5rem;
  font-style: italic;
}

.cookie-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--color-bg);
  border-radius: 6px;
  border: 1px solid var(--color-border);
}

.cookie-item:last-child {
  margin-bottom: 0;
}

.cookie-item h4 {
  margin: 0 0 0.75rem;
  color: var(--color-accent);
  font-size: 1.05rem;
}

.cookie-item p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

.browser-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1.5rem 0;
}

.browser-link {
  padding: 0.75rem 1.5rem;
  background: var(--color-bg);
  color: var(--color-accent);
  text-decoration: none;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-family: var(--font-sans);
  font-weight: 500;
  transition: all 0.2s;
}

.browser-link:hover {
  background: var(--color-accent);
  color: white;
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

.warning-box {
  margin: 1.5rem 0;
  padding: 1rem 1.5rem;
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 6px;
  border-left: 4px solid #ffc107;
}

.warning-box p {
  margin: 0;
  color: #856404;
}
</style>