---
layout: default
title: Política de Privacidad
permalink: /privacidad/
---

<div class="legal-page">
  <header class="legal-header">
    <h1>Política de Privacidad</h1>
    <p class="legal-date">Última actualización: {{ 'now' | date: "%-d de %B de %Y" }}</p>
  </header>

  <div class="legal-content">
    <section class="legal-section">
      <h2>Introducción</h2>
      <p>En <strong>{{ site.author }}</strong>, nos tomamos muy en serio tu privacidad. Esta política explica qué información recopilamos, cómo la usamos y cuáles son tus derechos.</p>
    </section>

    <section class="legal-section">
      <h2>Información que recopilamos</h2>
      
      <h3>Datos de navegación</h3>
      <p>Cuando visitas este blog, se recopilan automáticamente ciertos datos técnicos:</p>
      <ul>
        <li>Dirección IP</li>
        <li>Tipo de navegador y dispositivo</li>
        <li>Páginas visitadas y tiempo de permanencia</li>
        <li>Fuente de referencia (de dónde vienes)</li>
      </ul>

      <h3>Cookies y tecnologías similares</h3>
      <p>Utilizamos cookies para mejorar tu experiencia. Consulta nuestra <a href="/cookies/">Política de Cookies</a> para más detalles.</p>

      <h3>Información que proporcionas</h3>
      <p>Si te suscribes a nuestra newsletter o nos contactas, recopilaremos:</p>
      <ul>
        <li>Dirección de correo electrónico</li>
        <li>Nombre (opcional)</li>
        <li>Cualquier información que decidas compartir</li>
      </ul>
    </section>

    <section class="legal-section">
      <h2>Cómo usamos tu información</h2>
      <p>Usamos los datos recopilados para:</p>
      <ul>
        <li><strong>Analítica:</strong> Entender cómo se usa el blog y mejorarlo</li>
        <li><strong>Comunicación:</strong> Enviarte actualizaciones si te suscribes (puedes cancelar en cualquier momento)</li>
        <li><strong>Seguridad:</strong> Proteger el sitio de spam y abuso</li>
        <li><strong>Mejoras:</strong> Optimizar el contenido según los intereses de los lectores</li>
      </ul>
    </section>

    <section class="legal-section">
      <h2>Servicios de terceros</h2>
      <p>Este blog utiliza los siguientes servicios externos que pueden recopilar datos:</p>
      
      <div class="service-list">
        <div class="service-item">
          <h4>GitHub Pages</h4>
          <p>Alojamiento del sitio web.</p>
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener">Ver política de privacidad →</a>
        </div>

        <div class="service-item">
          <h4>Google Analytics (si aplica)</h4>
          <p>Análisis de tráfico y comportamiento de usuarios.</p>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Ver política de privacidad →</a>
        </div>

        <div class="service-item">
          <h4>Visitor Badge / Contadores</h4>
          <p>Contador de visitas en los artículos.</p>
          <p class="service-note">No recopila información personal identificable.</p>
        </div>
      </div>
    </section>

    <section class="legal-section">
      <h2>Tus derechos</h2>
      <p>Tienes derecho a:</p>
      <ul>
        <li><strong>Acceder</strong> a tus datos personales</li>
        <li><strong>Rectificar</strong> información incorrecta</li>
        <li><strong>Eliminar</strong> tus datos (derecho al olvido)</li>
        <li><strong>Oponerte</strong> al procesamiento de tus datos</li>
        <li><strong>Portabilidad</strong> de datos</li>
        <li><strong>Revocar</strong> el consentimiento en cualquier momento</li>
      </ul>
      
      <p class="legal-cta">Para ejercer estos derechos, contáctame en: <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
    </section>

    <section class="legal-section">
      <h2>Retención de datos</h2>
      <p>Los datos analíticos se conservan por un máximo de <strong>26 meses</strong>. Los datos de suscripción se mantienen hasta que solicites su eliminación o canceles tu suscripción.</p>
    </section>

    <section class="legal-section">
      <h2>Seguridad</h2>
      <p>Implemento medidas de seguridad razonables para proteger tu información, incluyendo:</p>
      <ul>
        <li>Conexión HTTPS cifrada</li>
        <li>Acceso limitado a datos personales</li>
        <li>Cumplimiento de estándares de GitHub Pages</li>
      </ul>
    </section>

    <section class="legal-section">
      <h2>Menores de edad</h2>
      <p>Este blog no está dirigido a menores de 13 años. No recopilo conscientemente información de niños.</p>
    </section>

    <section class="legal-section">
      <h2>Enlaces externos</h2>
      <p>Este blog puede contener enlaces a sitios externos. No me hago responsable de las prácticas de privacidad de otros sitios.</p>
    </section>

    <section class="legal-section">
      <h2>Cambios a esta política</h2>
      <p>Puedo actualizar esta política ocasionalmente. Los cambios significativos se notificarán actualizando la fecha al inicio de esta página.</p>
    </section>

    <section class="legal-section">
      <h2>Contacto</h2>
      <p>Si tienes preguntas sobre esta política de privacidad:</p>
      <ul class="contact-methods">
        <li><strong>Email:</strong> <a href="mailto:{{ site.email }}">{{ site.email }}</a></li>
        <li><strong>Twitter:</strong> <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" rel="noopener">@{{ site.twitter_username }}</a></li>
      </ul>
    </section>
  </div>

  <footer class="legal-footer">
    <p><a href="/">← Volver al inicio</a></p>
  </footer>
</div>

<style>
.legal-page {
  max-width: 800px;
  margin: 3rem auto;
  padding: 0 1.5rem;
}

.legal-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--color-border);
}

.legal-header h1 {
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--color-text);
  margin: 0 0 1rem;
  letter-spacing: -0.02em;
}

.legal-date {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--color-text-muted);
  font-style: italic;
}

.legal-content {
  font-family: var(--font-body);
  line-height: 1.8;
  color: var(--color-text);
}

.legal-section {
  margin-bottom: 3rem;
}

.legal-section h2 {
  font-family: var(--font-display);
  font-size: 1.75rem;
  color: var(--color-text);
  margin: 0 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border);
}

.legal-section h3 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--color-text);
  margin: 2rem 0 1rem;
}

.legal-section h4 {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  color: var(--color-accent);
  margin: 1.5rem 0 0.5rem;
  font-weight: 600;
}

.legal-section p {
  margin: 0 0 1rem;
  color: var(--color-text);
}

.legal-section ul {
  margin: 1rem 0 1rem 1.5rem;
  padding: 0;
}

.legal-section li {
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.legal-section a {
  color: var(--color-accent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}

.legal-section a:hover {
  border-bottom-color: var(--color-accent);
}

.legal-cta {
  padding: 1rem 1.5rem;
  background: var(--color-bg-secondary);
  border-left: 3px solid var(--color-orange);
  border-radius: 4px;
  margin: 1.5rem 0;
}

.service-list {
  display: grid;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.service-item {
  padding: 1.25rem;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.service-item h4 {
  margin-top: 0;
}

.service-item p {
  font-size: 0.95rem;
  margin: 0.5rem 0;
}

.service-note {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  font-style: italic;
}

.contact-methods {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

.contact-methods li {
  margin-bottom: 0.75rem;
}

.legal-footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.legal-footer a {
  font-family: var(--font-sans);
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 500;
}

.legal-footer a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .legal-header h1 {
    font-size: 2rem;
  }
  
  .legal-section h2 {
    font-size: 1.5rem;
  }
  
  .legal-section h3 {
    font-size: 1.2rem;
  }
}
</style>