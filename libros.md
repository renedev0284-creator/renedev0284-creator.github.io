---
layout: default
title: Mis Libros
permalink: /libros/
---

<div class="home books-page">
  <!-- HERO estilo Home -->
  <section class="intro intro-icons">
    <div class="intro-badges">
      <span class="badge" title="Libros">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 0 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      </span>
      <span class="badge" title="Amazon KDP">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12h18"></path>
          <path d="M12 3v18"></path>
        </svg>
      </span>
    </div>

    <h1>Mis Libros</h1>
    <p class="lead">
      Dos proyectos publicados en Amazon KDP. Uno es bitácora real con datos. El otro, ficción cósmica: un filtro espiritual llamado Némora.
      Si lees esto, ya estás dentro del laboratorio.
    </p>
  </section>

  <!-- LISTA -->
  <section class="posts">
    <h2 class="section-title">Publicados</h2>

    <div class="books-grid">

      <!-- LIBRO 1 -->
      <article class="book-card">
        <div class="book-cover">
          <!-- Cambia el nombre del archivo si es distinto -->
          <img src="{{ '/assets/images/libros/glucosa.jpg' | relative_url }}"
               alt="Portada: Cómo logré bajar mis niveles de glucosa en sangre"
               loading="lazy">
        </div>

        <div class="book-body">
          <div class="book-kicker">Historia real documentada</div>

          <h3 class="book-title">Cómo logré bajar mis niveles de glucosa en sangre</h3>
          <p class="book-subtitle">Sin medicamentos los primeros 15 días. Con dieta, ejercicio y la determinación de un padre que eligió vivir.</p>

          <div class="book-metric">386 → 95 mg/dL</div>

          <p class="book-text">
            No hay promesas mágicas. Hay registro diario, decisiones concretas y resultados medibles: qué comí, cómo me moví, qué pensé, qué funcionó y qué no.
          </p>

          <ul class="book-bullets">
            <li>📊 Progreso con datos (bitácora real)</li>
            <li>🥗 Recetas simples que sí funcionan</li>
            <li>🧠 Hábitos para sostener el cambio</li>
            <li>🔬 Estudios explicados en lenguaje humano</li>
          </ul>

          <div class="book-cta">
            <a class="book-btn primary" href="https://a.co/d/07CClbnv" target="_blank" rel="noopener">Ver en Amazon</a>
          </div>
        </div>
      </article>

      <!-- LIBRO 2 -->
      <article class="book-card">
        <div class="book-cover">
          <!-- Cambia el nombre del archivo si es distinto -->
          <img src="{{ '/assets/images/libros/kreacion.jpg' | relative_url }}"
               alt="Portada: Kreación"
               loading="lazy">
        </div>

        <div class="book-body">
          <div class="book-kicker">Fantasía cósmica / espiritualidad</div>

          <h3 class="book-title">Kreación</h3>
          <p class="book-subtitle">En Némora, la humanidad no vive: se prueba.</p>

          <p class="book-text">
            Némora no es un planeta: es un filtro. Una máquina antigua diseñada para destilar almas a través de experiencia, dolor, amor y olvido.
            Algo cruzó una grieta entre dimensiones… y el sistema dejó de ser estable.
          </p>

          <ul class="book-bullets">
            <li>♾️ Reencarnación, memoria y ciclos</li>
            <li>⚔️ Guerra invisible entre dioses y humanidad</li>
            <li>🧩 Verdad que se revela capítulo a capítulo</li>
            <li>✨ Kaelar: olvidar la divinidad para salvarlo todo</li>
          </ul>

          <div class="book-cta">
            <a class="book-btn primary" href="https://a.co/d/030jsmbG" target="_blank" rel="noopener">Ver en Amazon</a>
          </div>
        </div>
      </article>

    </div>
  </section>
</div>

<style>
/* ====== BLINDAJE anti “pantalla en blanco” por CSS heredado ====== */
.books-page, .books-page * { opacity: 1 !important; }
.books-page { color: var(--color-text, #3c3026); }

/* ====== GRID ====== */
.books-grid{
  max-width: 980px;
  margin: 2.5rem auto 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

/* ====== CARD ====== */
.book-card{
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 1.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(60,48,38,.12);
  background: rgba(255,255,255,.72);
  border-radius: 10px;
  box-shadow: 0 8px 28px rgba(60,48,38,.06);
}

.book-cover{
  width: 180px;
  height: 260px;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(60,48,38,.06);
  border: 1px solid rgba(60,48,38,.10);
}

.book-cover img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(10%) contrast(.98);
  transition: transform .5s ease, filter .5s ease;
}

.book-card:hover .book-cover img{
  transform: scale(1.02);
  filter: grayscale(0%) contrast(1);
}

.book-kicker{
  font-family: var(--font-sans, Inter, system-ui, -apple-system, sans-serif);
  font-size: .78rem;
  text-transform: uppercase;
  letter-spacing: .06em;
  color: var(--color-text-muted, rgba(60,48,38,.65));
  margin-bottom: .35rem;
}

.book-title{
  margin: 0;
  font-family: var(--font-display, Montserrat, system-ui, -apple-system, sans-serif);
  font-size: 1.6rem;
  line-height: 1.25;
  letter-spacing: -0.01em;
}

.book-subtitle{
  margin: .4rem 0 .9rem;
  font-family: 'Palatino Linotype','Book Antiqua',Palatino,Georgia,serif;
  font-size: 1.06rem;
  color: rgba(60,48,38,.86);
  line-height: 1.65;
}

.book-metric{
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  font-family: var(--font-sans, Inter, system-ui, -apple-system, sans-serif);
  font-weight: 700;
  font-size: .92rem;
  color: var(--color-orange, #f34f29);
  background: rgba(243,79,41,.08);
  border: 1px solid rgba(243,79,41,.18);
  padding: .35rem .6rem;
  border-radius: 999px;
  margin: 0 0 .9rem;
}

.book-text{
  margin: 0 0 1rem;
  font-family: 'Palatino Linotype','Book Antiqua',Palatino,Georgia,serif;
  font-size: 1.03rem;
  line-height: 1.75;
  color: rgba(60,48,38,.86);
}

.book-bullets{
  margin: 0 0 1.25rem;
  padding-left: 1.1rem;
  color: rgba(60,48,38,.82);
  line-height: 1.7;
  font-family: var(--font-sans, Inter, system-ui, -apple-system, sans-serif);
  font-size: .95rem;
}

.book-cta{
  display: flex;
  gap: .75rem;
  flex-wrap: wrap;
}

.book-btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: .7rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-family: var(--font-sans, Inter, system-ui, -apple-system, sans-serif);
  font-size: .95rem;
  font-weight: 600;
  border: 1px solid rgba(60,48,38,.18);
  color: var(--color-text, #3c3026);
  background: #fff;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}

.book-btn.primary{
  border-color: rgba(243,79,41,.22);
  color: #fff;
  background: var(--color-orange, #f34f29);
}

.book-btn:hover{
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(60,48,38,.10);
  border-color: rgba(243,79,41,.35);
}

/* ====== RESPONSIVE ====== */
@media (max-width: 768px){
  .book-card{
    grid-template-columns: 1fr;
  }
  .book-cover{
    width: 100%;
    height: 360px;
  }
}

@media (max-width: 480px){
  .book-cover{ height: 300px; }
  .book-title{ font-size: 1.4rem; }
}
</style>
