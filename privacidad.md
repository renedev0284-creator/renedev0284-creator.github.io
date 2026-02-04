---
layout: default
title: Política de Privacidad
permalink: /privacidad/
---

<link rel="stylesheet" href="{{ '/assets/css/legal-pages.css' | relative_url }}">

<div class="legal-page">
  <header class="legal-header">
    <h1>Política de Privacidad</h1>
    <p class="legal-date">Última actualización: {{ 'now' | date: "%-d de %B de %Y" }}</p>
  </header>

  <div class="legal-content">
    <section class="legal-section">
      <h2>Introducción</h2>
      <p>En <strong>{{ site.author }}</strong>, me tomo muy en serio tu privacidad. Esta política explica qué información recopilo, cómo la uso y cuáles son tus derechos.</p>
    </section>

    <section class="legal-section">
      <h2>Información que recopilo</h2>
      
      <h3>Datos de navegación</h3>
      <p>Cuando visitas este blog, se recopilan automáticamente ciertos datos técnicos:</p>
      <ul>
        <li>Dirección IP</li>
        <li>Tipo de navegador y dispositivo</li>
        <li>Páginas visitadas y tiempo de permanencia</li>
        <li>Fuente de referencia (de dónde vienes)</li>
      </ul>

      <h3>Cookies y tecnologías similares</h3>
      <p>Utilizo cookies para mejorar tu experiencia. Consulta mi <a href="/cookies/">Política de Cookies</a> para más detalles.</p>

      <h3>Información que proporcionas</h3>
      <p>Si te suscribes a mi newsletter o me contactas, recopilaré:</p>
      <ul>
        <li>Dirección de correo electrónico</li>
        <li>Nombre (opcional)</li>
        <li>Cualquier información que decidas compartir</li>
      </ul>
    </section>

    <section class="legal-section">
      <h2>Cómo uso tu información</h2>
      <p>Uso los datos recopilados para:</p>
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
          <h4>Utterances / Giscus</h4>
          <p>Sistema de comentarios mediante GitHub Issues o Discussions.</p>
          <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener">Ver política de privacidad →</a>
        </div>

        <div class="service-item">
          <h4>Contador de visitas</h4>
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