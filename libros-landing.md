---
layout: default
title: "Mis Libros - René Moya"
permalink: /libross/
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=Palatino+Linotype&display=swap" rel="stylesheet">

<div class="books-page-light">

<!-- Hero Minimalista -->
<section class="books-hero-light">
  <div class="hero-content-light">
    <div class="hero-label">AUTOR INDEPENDIENTE</div>
    <h1 class="hero-title-light">
      Historias que<br>
      <span class="hero-accent">transforman</span>
    </h1>
    <p class="hero-desc">
      Dos libros publicados en Amazon KDP. Uno sobre mi experiencia con diabetes,<br>
      otro sobre ficción distópica. Escritura honesta, sin filtros.
    </p>
    
    <div class="hero-stats-light">
      <div class="stat-light">
        <div class="stat-number">2</div>
        <div class="stat-label">Libros</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-light">
        <div class="stat-number">★4.5</div>
        <div class="stat-label">Rating</div>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-light">
        <div class="stat-number">100%</div>
        <div class="stat-label">Indie</div>
      </div>
    </div>
  </div>
</section>

<!-- Libros Grid Limpio -->
<section class="books-section-light">
  <div class="books-container">
    
    <!-- Libro 1: Glucosa -->
    <article class="book-card-light" data-fade>
      <div class="book-visual">
        <div class="book-cover-container">
          <img src="{{ '/assets/images/libros/glucosa.jpg' | relative_url }}" 
               alt="Glucosa en Crisis - René Moya"
               class="book-cover-img">
        </div>
      </div>
      
      <div class="book-details">
        <div class="book-tags">
          <span class="tag-category">No-ficción</span>
          <span class="tag-year">2024</span>
        </div>
        
        <h2 class="book-name">Glucosa en Crisis</h2>
        <p class="book-subtitle">Mi viaje personal lidiando con diabetes tipo 2</p>
        
        <p class="book-description">
          Un relato honesto y sin filtros sobre mi diagnóstico de diabetes.
          No es un manual médico, es mi experiencia real: los errores, los aprendizajes,
          las luchas diarias con la glucosa.
        </p>
        
        <ul class="book-highlights">
          <li>Experiencia personal auténtica</li>
          <li>Tips prácticos que funcionan</li>
          <li>Sin pseudociencia ni promesas mágicas</li>
        </ul>
        
        <div class="book-ctas">
          <a href="https://a.co/d/07CClbnv" 
             target="_blank" 
             rel="noopener"
             class="btn-buy">
            Comprar en Amazon →
          </a>
          <button class="btn-excerpt" onclick="toggleExcerpt('glucosa')">
            Leer extracto
          </button>
        </div>
        
        <!-- Extracto -->
        <div id="excerpt-glucosa" class="excerpt-box">
          <div class="excerpt-header">
            <h4>Extracto del libro</h4>
            <button class="excerpt-close" onclick="toggleExcerpt('glucosa')">×</button>
          </div>
          <div class="excerpt-text">
            <p>"El día que me diagnosticaron diabetes tipo 2, no sentí miedo. Sentí rabia.</p>
            <p>Rabia porque sabía que había señales que ignoré. Rabia porque pensé que eso le pasaba 'a otros'.</p>
            <p>Este libro no es un manual médico. Es mi experiencia cruda y real de los primeros meses conviviendo con una enfermedad crónica que cambió todo."</p>
          </div>
        </div>
      </div>
    </article>
    
    <!-- Separador -->
    <div class="books-divider"></div>
    
    <!-- Libro 2: Kreación -->
    <article class="book-card-light reverse" data-fade>
      <div class="book-visual">
        <div class="book-cover-container">
          <img src="{{ '/assets/images/libros/kreacion.jpg' | relative_url }}" 
               alt="Kreación - René Moya"
               class="book-cover-img">
        </div>
      </div>
      
      <div class="book-details">
        <div class="book-tags">
          <span class="tag-category">Ficción</span>
          <span class="tag-year">2024</span>
        </div>
        
        <h2 class="book-title">Kreación</h2>
        <p class="book-subtitle">En Némora, la humanidad no vive: se prueba.</p>
        
        <p class="book-description">
          En un filtro espiritual que simula un planeta donde viven los "eternos",
          los seres que se encargan del equilibrio en el universo, donde tienen una
          máquina antigua diseñada para destilar almas a través de una mezcla hermosa
          de experiencia, dolor, amor y olvido. Allí cada vida tiene una razón.
        </p>
        
        <ul class="book-highlights">
          <li>✓ Ciencia ficción universal</li>
          <li>✓ Lectura rápida (2-3 horas)</li>
          <li>✓ Reflexión sobre la vida y el bien que hacemos</li>
        </ul>
        
        <div class="book-ctas">
          <a href="https://a.co/d/030jsmbG" 
             target="_blank" 
             rel="noopener"
             class="btn-buy">
            Comprar en Amazon →
          </a>
          <button class="btn-excerpt" onclick="toggleExcerpt('kreacion')">
            Leer extracto
          </button>
        </div>
        
        <!-- Extracto -->
        <div id="excerpt-kreacion" class="excerpt-box">
          <div class="excerpt-header">
            <h4>Extracto del libro</h4>
            <button class="excerpt-close" onclick="toggleExcerpt('kreacion')">×</button>
          </div>
          <div class="excerpt-text">
            <p>"El Ministerio de Armonía Cultural no prohibió el arte. Lo reguló, lo domesticó, lo hizo seguro.</p>
            <p>Y en ese proceso, lo mató.</p>
            <p>Pero algunos aún recordábamos qué se sentía crear sin permiso. Qué se sentía pintar sin aprobación previa, escribir sin filtros de 'armonía social'."</p>
          </div>
        </div>
      </div>
    </article>
    
  </div>
</section>

<!-- Por qué leer -->
<section class="why-section-light">
  <div class="why-container">
    <h2 class="why-title" data-fade>Por qué leer mis libros</h2>
    <p class="why-lead" data-fade>No vendo cursos, no prometo fórmulas mágicas. Solo historias honestas.</p>
    
    <div class="why-grid">
      <div class="why-item" data-fade>
        <div class="why-number">01</div>
        <h3>Sin filtros</h3>
        <p>Escribo como hablo. Sin pretensiones académicas ni lenguaje rebuscado.</p>
      </div>
      
      <div class="why-item" data-fade>
        <div class="why-number">02</div>
        <h3>Directo al punto</h3>
        <p>No hay relleno. Cada página tiene propósito. Respeto tu tiempo.</p>
      </div>
      
      <div class="why-item" data-fade>
        <div class="why-number">03</div>
        <h3>Experiencia real</h3>
        <p>No teoría copiada de Wikipedia. Todo sale de vivencias personales.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Final Minimalista -->
<section class="cta-section-light">
  <div class="cta-content">
    <h2 data-fade>¿Listo para leer?</h2>
    <p data-fade>Ambos libros disponibles en Amazon. Formato Kindle y físico.</p>
    
    <div class="cta-buttons" data-fade>
      <a href="https://a.co/d/07CClbnv" target="_blank" rel="noopener" class="cta-link">
        Glucosa en Crisis
      </a>
      <a href="https://a.co/d/030jsmbG" target="_blank" rel="noopener" class="cta-link">
        Kreación
      </a>
    </div>
    
    <p class="cta-note" data-fade>
      O <a href="{{ '/newsletter/' | relative_url }}">suscríbete al newsletter</a> para recibir extractos exclusivos
    </p>
  </div>
</section>

</div>

<style>
/* ============================================
   BOOKS PAGE - ESTILO CLARO MINIMALISTA
   ============================================ */

.books-page-light {
  background: #fafaf9;
  color: #3c3026;
  font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif;
}

/* Hero Minimalista */
.books-hero-light {
  padding: 5rem 0 4rem;
  background: linear-gradient(to bottom, #faf9f7 0%, #f5f3f0 100%);
  border-bottom: 1px solid rgba(60, 48, 38, 0.1);
}

.hero-content-light {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.hero-label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 2px solid rgba(60, 48, 38, 0.2);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: #666;
}

.hero-title-light {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 1.5rem;
  color: #3c3026;
  letter-spacing: -0.02em;
}

.hero-accent {
  color: #F34F29;
  font-style: italic;
}

.hero-desc {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #666;
  margin-bottom: 3rem;
}

.hero-stats-light {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.stat-light {
  text-align: center;
}

.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #F34F29;
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #999;
  margin-top: 0.5rem;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(60, 48, 38, 0.15);
}

/* Books Section */
.books-section-light {
  padding: 5rem 0;
  background: #fff;
}

.books-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.book-card-light {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
  align-items: start;
}

.book-card-light.reverse {
  grid-template-columns: 1fr 350px;
}

.book-card-light.reverse .book-visual {
  order: 2;
}

.book-card-light.reverse .book-details {
  order: 1;
}

/* Book Cover */
.book-cover-container {
  position: relative;
  aspect-ratio: 2/3;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 
    0 4px 12px rgba(60, 48, 38, 0.08),
    0 12px 32px rgba(60, 48, 38, 0.06);
  transition: all 0.4s ease;
}

.book-cover-container:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 8px 20px rgba(60, 48, 38, 0.12),
    0 20px 48px rgba(60, 48, 38, 0.1);
}

.book-cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Book Details */
.book-tags {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.tag-category,
.tag-year {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.4rem 0.8rem;
  border-radius: 3px;
}

.tag-category {
  background: #F34F29;
  color: #fff;
}

.tag-year {
  background: #f5f3f0;
  color: #666;
}

.book-name {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 0.75rem;
  color: #3c3026;
}

.book-subtitle {
  font-size: 1.35rem;
  color: #666;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.book-description {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #555;
  margin-bottom: 2rem;
}

.book-highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
}

.book-highlights li {
  font-size: 0.95rem;
  color: #666;
  padding: 0.6rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.book-highlights li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #F34F29;
  font-weight: 700;
}

/* CTAs */
.book-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-buy {
  display: inline-block;
  padding: 1rem 2rem;
  background: #F34F29;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(243, 79, 41, 0.2);
}

.btn-buy:hover {
  background: #d94520;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(243, 79, 41, 0.3);
}

.btn-excerpt {
  padding: 1rem 2rem;
  background: transparent;
  color: #3c3026;
  border: 2px solid rgba(60, 48, 38, 0.2);
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Palatino Linotype', Georgia, serif;
}

.btn-excerpt:hover {
  border-color: #F34F29;
  color: #F34F29;
  background: rgba(243, 79, 41, 0.05);
}

/* Extracto */
.excerpt-box {
  display: none;
  margin-top: 2rem;
  padding: 2rem;
  background: #faf9f7;
  border-left: 4px solid #F34F29;
  border-radius: 4px;
}

.excerpt-box.active {
  display: block;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.excerpt-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.excerpt-header h4 {
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  color: #F34F29;
  margin: 0;
}

.excerpt-close {
  background: none;
  border: none;
  font-size: 2rem;
  color: #999;
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
  line-height: 1;
  transition: color 0.2s;
}

.excerpt-close:hover {
  color: #F34F29;
}

.excerpt-text p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1rem;
  font-style: italic;
}

/* Divider */
.books-divider {
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(60, 48, 38, 0.15),
    transparent
  );
  margin: 5rem 0;
}

/* Why Section */
.why-section-light {
  padding: 5rem 0;
  background: #faf9f7;
}

.why-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.why-title {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #3c3026;
}

.why-lead {
  font-size: 1.25rem;
  color: #666;
  text-align: center;
  margin-bottom: 4rem;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.why-item {
  padding: 2.5rem;
  background: #fff;
  border: 1px solid rgba(60, 48, 38, 0.1);
  border-radius: 4px;
  transition: all 0.3s ease;
}

.why-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(60, 48, 38, 0.08);
  border-color: #F34F29;
}

.why-number {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  color: rgba(243, 79, 41, 0.2);
  line-height: 1;
  margin-bottom: 1rem;
}

.why-item h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #3c3026;
}

.why-item p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #666;
}

/* CTA Final */
.cta-section-light {
  padding: 5rem 0;
  background: #fff;
  border-top: 1px solid rgba(60, 48, 38, 0.1);
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.cta-content h2 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #3c3026;
}

.cta-content > p {
  font-size: 1.15rem;
  color: #666;
  margin-bottom: 2.5rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.cta-link {
  display: inline-block;
  padding: 1.25rem 2.5rem;
  background: #F34F29;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(243, 79, 41, 0.2);
}

.cta-link:hover {
  background: #d94520;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(243, 79, 41, 0.3);
}

.cta-note {
  font-size: 1rem;
  color: #999;
}

.cta-note a {
  color: #F34F29;
  text-decoration: none;
  border-bottom: 1px solid rgba(243, 79, 41, 0.3);
  transition: all 0.2s;
}

.cta-note a:hover {
  border-bottom-color: #F34F29;
}

/* Fade Animations */
[data-fade] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

[data-fade].visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 900px) {
  .book-card-light,
  .book-card-light.reverse {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .book-card-light.reverse .book-visual {
    order: 1;
  }

  .book-card-light.reverse .book-details {
    order: 2;
  }

  .book-cover-container {
    max-width: 350px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero-stats-light {
    flex-direction: column;
    gap: 2rem;
  }

  .stat-divider {
    width: 60px;
    height: 1px;
  }

  .book-name {
    font-size: 2.25rem;
  }

  .why-title {
    font-size: 2.25rem;
  }

  .cta-content h2 {
    font-size: 2.25rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-link {
    width: 100%;
  }

  .book-cover-container {
    max-width: 280px;
  }
}
</style>

<script>
function toggleExcerpt(bookId) {
  const excerpt = document.getElementById('excerpt-' + bookId);
  excerpt.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('[data-fade]');
  
  const fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  fadeElements.forEach(el => fadeObserver.observe(el));
});
</script>