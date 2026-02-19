---
layout: default
title: Mis Libros
permalink: /libros/
published: false
---

<div style="padding:14px;border:2px solid #d94f5c;border-radius:10px;margin:18px 0;">
  <strong>OK:</strong> la página <code>/libros/</code> está renderizando contenido.
</div>

<div class="home">
  <section class="intro intro-icons">
    <div class="intro-badges">
      <span class="badge" title="Libros">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      </span>
    </div>

    <h1>Mis Libros</h1>
    <p class="lead">
      Dos proyectos publicados en Amazon KDP. Uno es bitácora real con datos. El otro, ficción cósmica.
    </p>
  </section>

  <section class="posts">
    <h2 class="section-title">Publicados</h2>

    <div class="books-grid">
      <article class="book-card" style="--index:1;">
        <div class="book-cover">
          <img src="{{ '/assets/images/libros/glucosa.jpg' | relative_url }}"
               alt="Portada: Cómo logré bajar mis niveles de glucosa en sangre"
               loading="lazy">
        </div>
        <div class="book-body">
          <p class="book-kicker">Historia real documentada</p>
          <h3 class="book-title">Cómo logré bajar mis niveles de glucosa en sangre</h3>
          <p class="book-subtitle">Sin medicamentos los primeros 15 días…</p>
          <div class="book-actions">
            <a class="book-btn" href="https://a.co/d/07CClbnv" target="_blank" rel="noopener noreferrer">Ver en Amazon</a>
          </div>
        </div>
      </article>

      <article class="book-card" style="--index:2;">
        <div class="book-cover">
          <img src="{{ '/assets/images/libros/kreacion.jpg' | relative_url }}"
               alt="Portada: Kreación"
               loading="lazy">
        </div>
        <div class="book-body">
          <p class="book-kicker">Fantasía cósmica</p>
          <h3 class="book-title">Kreación</h3>
          <p class="book-subtitle">En Némora, la humanidad no vive: se prueba.</p>
          <div class="book-actions">
            <a class="book-btn" href="https://a.co/d/030jsmbG" target="_blank" rel="noopener noreferrer">Ver en Amazon</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</div>

<style>
.books-grid{max-width:900px;margin:3rem auto 0;display:grid;gap:2.25rem;}
.book-card{display:grid;grid-template-columns:220px 1fr;gap:1.75rem;padding:1.5rem;border:1px solid rgba(60,48,38,.12);background:rgba(255,255,255,.55);border-radius:10px;box-shadow:0 10px 30px rgba(60,48,38,.06);}
.book-cover{border-radius:8px;overflow:hidden;border:1px solid rgba(60,48,38,.10);background:var(--color-bg-secondary);height:320px;}
.book-cover img{width:100%;height:100%;object-fit:cover;}
.book-kicker{font-family:var(--font-sans);font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;color:var(--color-text-muted);margin:0;}
.book-title{margin:0;font-family:var(--font-display);font-size:1.55rem;line-height:1.25;color:var(--color-text);}
.book-subtitle{margin:0;font-family:var(--font-body);font-size:1.05rem;color:rgba(60,48,38,.85);}
.book-actions{display:flex;gap:.75rem;margin-top:.75rem;flex-wrap:wrap;}
.book-btn{display:inline-flex;align-items:center;justify-content:center;padding:.62rem .95rem;border-radius:8px;text-decoration:none;font-family:var(--font-sans);font-size:.92rem;font-weight:600;border:1px solid rgba(243,79,41,.35);background:var(--color-orange);color:#fff;}
@media (max-width:820px){.book-card{grid-template-columns:1fr;}.book-cover{height:360px;max-width:420px;}}
</style>
