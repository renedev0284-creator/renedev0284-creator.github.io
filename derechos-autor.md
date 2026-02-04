---
layout: default
title: Derechos de Autor
permalink: /derechos-autor/
---

<link rel="stylesheet" href="{{ '/assets/css/legal-pages.css' | relative_url }}">

<div class="legal-page">
  <header class="legal-header">
    <h1>Derechos de Autor y Licencia</h1>
    <p class="legal-date">Última actualización: {{ 'now' | date: "%-d de %B de %Y" }}</p>
  </header>

  <div class="legal-content">
    <section class="legal-section">
      <h2>Propiedad del contenido</h2>
      <p>Todo el contenido original publicado en este blog, incluyendo textos, artículos, gráficos, código y diseño, es propiedad de <strong>{{ site.author }}</strong> salvo que se indique lo contrario.</p>
      
      <div class="copyright-notice">
        <p>© {{ 'now' | date: "%Y" }} {{ site.author }}. Todos los derechos reservados.</p>
      </div>
    </section>

    <section class="legal-section">
      <h2>Licencia de uso</h2>
      <p>El contenido de este blog está disponible bajo los siguientes términos:</p>
      
      <div class="license-box">
        <h3>📝 Artículos y textos</h3>
        <p><strong>Licencia:</strong> Creative Commons Atribución-NoComercial 4.0 Internacional (CC BY-NC 4.0)</p>
        
        <p><strong>Esto significa que puedes:</strong></p>
        <ul>
          <li>✅ Compartir — copiar y redistribuir el material</li>
          <li>✅ Adaptar — remezclar, transformar y construir a partir del material</li>
        </ul>

        <p><strong>Bajo las siguientes condiciones:</strong></p>
        <ul>
          <li>📌 <strong>Atribución:</strong> Debes dar crédito apropiado, proporcionar un enlace a este blog</li>
          <li>🚫 <strong>No Comercial:</strong> No puedes usar el material con fines comerciales</li>
          <li>🔗 <strong>Sin restricciones adicionales:</strong> No puedes aplicar términos legales que restrinjan legalmente a otros</li>
        </ul>

        <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.es" target="_blank" rel="noopener" class="license-link">
          Ver licencia completa →
        </a>
      </div>

      <div class="license-box">
        <h3>💻 Código fuente</h3>
        <p><strong>Licencia:</strong> MIT License</p>
        
        <p>Los ejemplos de código y snippets compartidos en este blog están bajo licencia MIT, lo que significa que puedes:</p>
        <ul>
          <li>✅ Usar comercialmente</li>
          <li>✅ Modificar</li>
          <li>✅ Distribuir</li>
          <li>✅ Uso privado</li>
        </ul>

        <p class="license-note">Solo debes incluir el aviso de copyright y la licencia.</p>
      </div>

      <div class="license-box">
        <h3>🎨 Diseño y marca</h3>
        <p>El diseño visual del blog, logo y elementos de marca son propiedad exclusiva y <strong>no están cubiertos por las licencias anteriores</strong>.</p>
        <p>No está permitido copiar el diseño o usar la marca sin autorización expresa.</p>
      </div>
    </section>

    <section class="legal-section">
      <h2>Uso permitido sin autorización</h2>
      
      <h3>✅ Está permitido:</h3>
      <ul>
        <li>Citar extractos breves (hasta 300 palabras) con atribución</li>
        <li>Compartir enlaces a los artículos</li>
        <li>Usar los artículos con fines educativos no comerciales</li>
        <li>Traducir artículos (con atribución y enlace al original)</li>
        <li>Usar ejemplos de código en tus proyectos</li>
      </ul>

      <h3>❌ No está permitido:</h3>
      <ul>
        <li>Republicar artículos completos sin autorización</li>
        <li>Usar el contenido con fines comerciales</li>
        <li>Eliminar o modificar los avisos de copyright</li>
        <li>Hacer pasar el contenido como propio</li>
        <li>Crear obras derivadas comerciales</li>
      </ul>
    </section>

    <section class="legal-section">
      <h2>Cómo citar correctamente</h2>
      <p>Si quieres citar o usar contenido de este blog, usa este formato:</p>
      
      <div class="citation-box">
        <p><strong>Formato recomendado:</strong></p>
        <code>{{ site.author }} ({{ 'now' | date: "%Y" }}). [Título del artículo]. 
{{ site.title | default: "Blog RM" }}. 
Disponible en: [URL del artículo]</code>
      </div>

      <p><strong>Ejemplo:</strong></p>
      <div class="citation-example">
        <code>René Moya (2026). Scrivener: Opciones de compilación y tipos de secciones. 
RM Escritor y Desarrollador. 
Disponible en: https://renedev0284-creator.github.io/como-compilar-en-scrivener/</code>
      </div>
    </section>

    <section class="legal-section">
      <h2>Contenido de terceros</h2>
      <p>Este blog puede incluir:</p>
      <ul>
        <li><strong>Enlaces externos:</strong> No soy responsable del contenido de sitios enlazados</li>
        <li><strong>Imágenes:</strong> Las imágenes de terceros se usan bajo licencias apropiadas o fair use</li>
        <li><strong>Citas:</strong> Las citas de otros autores se atribuyen apropiadamente</li>
      </ul>
    </section>

    <section class="legal-section">
      <h2>Uso comercial</h2>
      <p>Si deseas usar el contenido con fines comerciales (incluyendo publicaciones, cursos pagos, productos digitales, etc.), debes:</p>
      
      <ol>
        <li>Contactarme para solicitar autorización</li>
        <li>Especificar el uso que deseas hacer</li>
        <li>Acordar los términos de uso</li>
      </ol>

      <p class="legal-cta">Contacto para permisos comerciales: <a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
    </section>

    <section class="legal-section">
      <h2>DMCA y violaciones de copyright</h2>
      <p>Respeto la propiedad intelectual de otros. Si crees que algún contenido de este blog viola tus derechos de autor:</p>
      
      <ol>
        <li>Envía un email a <a href="mailto:{{ site.email }}">{{ site.email }}</a></li>
        <li>Incluye:
          <ul>
            <li>Descripción del material con copyright</li>
            <li>URL donde aparece en este blog</li>
            <li>Tu información de contacto</li>
            <li>Declaración de buena fe</li>
          </ul>
        </li>
        <li>Investigaré el reclamo y tomaré acción apropiada</li>
      </ol>
    </section>

    <section class="legal-section">
      <h2>Disclaimer</h2>
      <p>El contenido de este blog se proporciona "tal cual" con fines informativos y educativos. Aunque me esfuerzo por la precisión:</p>
      <ul>
        <li>No garantizo que el contenido sea completo o exacto</li>
        <li>Las opiniones expresadas son personales</li>
        <li>No soy responsable de daños derivados del uso de este contenido</li>
        <li>El contenido no constituye asesoramiento profesional</li>
      </ul>
    </section>

    <section class="legal-section">
      <h2>Preguntas</h2>
      <p>Si tienes dudas sobre el uso del contenido de este blog:</p>
      <ul class="contact-methods">
        <li><strong>Email:</strong> <a href="mailto:{{ site.email }}">{{ site.email }}</a></li>
        <li><strong>Twitter:</strong> <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" rel="noopener">@{{ site.twitter_username }}</a></li>
      </ul>
      
      <p>Generalmente respondo solicitudes razonables de uso no comercial con gusto.</p>
    </section>
  </div>

  <footer class="legal-footer">
    <p><a href="/">← Volver al inicio</a></p>
  </footer>
</div>