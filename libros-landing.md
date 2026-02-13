---
layout: default
title: "Mis Libros - René Moya"
permalink: /libross/
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap" rel="stylesheet">

<div class="books-page">

<!-- Hero Section con portadas reales -->
<section class="books-hero">
  <div class="hero-container">
    <div class="hero-content">
      <div class="hero-badge">AUTOR INDEPENDIENTE</div>
      <h1 class="hero-title">
        Historias que<br>
        <span class="glitch" data-text="transforman">transforman</span>
      </h1>
      <p class="hero-subtitle">
        Dos libros publicados en Amazon KDP. Uno sobre mi experiencia<br>
        con diabetes, otro sobre ficción distópica.
      </p>
      
      <div class="hero-stats">
        <div class="stat">
          <div class="stat-num">2</div>
          <div class="stat-label">Libros</div>
        </div>
        <div class="stat">
          <div class="stat-num">★4.5</div>
          <div class="stat-label">Rating</div>
        </div>
        <div class="stat">
          <div class="stat-num">100%</div>
          <div class="stat-label">Indie</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Grid de libros con portadas reales -->
<section class="books-grid">
  <div class="grid-container">
    
    <!-- Libro 1: Glucosa -->
    <article class="book-item" data-scroll>
      <div class="book-cover-wrapper">
        <img src="{{ '/assets/images/libros/glucosa.jpg' | relative_url }}" 
             alt="Glucosa en Crisis - René Moya" 
             class="book-cover">
        <div class="book-overlay">
          <button class="btn-preview" onclick="togglePreview('glucosa')">
            Ver extracto
          </button>
        </div>
      </div>
      
      <div class="book-info">
        <div class="book-meta">
          <span class="book-category">NO-FICCIÓN</span>
          <span class="book-year">2024</span>
        </div>
        
        <h2 class="book-title">Glucosa en Crisis</h2>
        <p class="book-tagline">Mi viaje personal lidiando con diabetes tipo 2</p>
        
        <p class="book-description">
          Un relato honesto y sin filtros sobre mi diagnóstico de diabetes.
          No es un manual médico, es mi experiencia real: los errores,
          los aprendizajes, las luchas diarias con la glucosa.
        </p>
        
        <ul class="book-features">
          <li>✓ Experiencia personal auténtica</li>
          <li>✓ Tips prácticos que funcionan</li>
          <li>✓ Sin pseudociencia ni promesas mágicas</li>
        </ul>
        
        <div class="book-actions">
          <a href="https://a.co/d/07CClbnv" 
             target="_blank" 
             rel="noopener"
             class="btn-amazon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.544.41-3.06.614-4.544.614-2.893 0-5.604-.595-8.136-1.785-.793-.373-1.54-.775-2.24-1.206l-.257-.18c-.275-.194-.337-.326-.188-.495zm13.888-5.045c-.18.264-.42.396-.72.396-.24 0-.42-.06-.54-.18-.12-.12-.18-.3-.18-.54 0-.18.045-.33.135-.45.09-.12.21-.18.36-.18.18 0 .315.075.405.225.09.15.135.33.135.54 0 .15-.045.27-.135.405zm5.73-.405c0-.18.045-.33.135-.45.09-.12.21-.18.36-.18.18 0 .315.075.405.225.09.15.135.33.135.54 0 .15-.045.27-.135.405-.18.264-.42.396-.72.396-.24 0-.42-.06-.54-.18-.12-.12-.18-.3-.18-.54zm-2.865-4.995c-.33 0-.645.105-.945.315-.3.21-.525.495-.675.855-.045.105-.12.165-.225.18l-1.38.18c-.09 0-.165-.03-.225-.09-.06-.06-.075-.135-.045-.225.21-.78.63-1.41 1.26-1.89.63-.48 1.35-.72 2.16-.72.48 0 .915.075 1.305.225.39.15.72.36.99.63.27.27.48.585.63.945.15.36.225.75.225 1.17v4.59c0 .45.075.81.225 1.08.15.27.315.51.495.72.06.06.075.135.045.225-.03.09-.09.15-.18.18l-1.29.945c-.09.06-.18.045-.27-.045-.36-.42-.69-.84-.99-1.26-.075-.12-.165-.24-.27-.36-.465.54-1.005.96-1.62 1.26-.615.3-1.29.45-2.025.45-.84 0-1.53-.255-2.07-.765-.54-.51-.81-1.185-.81-2.025 0-.48.09-.915.27-1.305.18-.39.42-.72.72-.99.3-.27.645-.495 1.035-.675.39-.18.81-.315 1.26-.405l2.34-.495c.21-.045.375-.135.495-.27.12-.135.18-.315.18-.54v-.54c0-.45-.12-.81-.36-1.08-.24-.27-.585-.405-1.035-.405zm-2.25 5.67c0 .39.12.69.36.9.24.21.525.315.855.315.24 0 .48-.06.72-.18.24-.12.45-.27.63-.45.24-.24.375-.54.405-.9v-1.08c0-.12-.045-.21-.135-.27-.09-.06-.18-.075-.27-.045l-1.62.36c-.42.09-.765.27-1.035.54-.27.27-.405.615-.405 1.035z"/>
            </svg>
            Comprar en Amazon
          </a>
        </div>
      </div>
      
      <!-- Extracto expandible -->
      <div id="preview-glucosa" class="book-preview">
        <div class="preview-header">
          <h4>Extracto del libro:</h4>
          <button class="close-preview" onclick="togglePreview('glucosa')">×</button>
        </div>
        <div class="preview-content">
          <p>"El día que me diagnosticaron diabetes tipo 2, no sentí miedo. Sentí rabia.</p>
          <p>Rabia porque sabía que había señales que ignoré. Rabia porque pensé que eso le pasaba 'a otros'.</p>
          <p>Este libro no es un manual médico. Es mi experiencia cruda y real de los primeros meses conviviendo con una enfermedad crónica que cambió todo."</p>
        </div>
      </div>
    </article>
    
    <!-- Libro 2: Kreación -->
    <article class="book-item reverse" data-scroll>
      <div class="book-cover-wrapper">
        <img src="{{ '/assets/images/libros/creacion.jpg' | relative_url }}" 
             alt="Kreación - René Moya" 
             class="book-cover">
        <div class="book-overlay">
          <button class="btn-preview" onclick="togglePreview('kreacion')">
            Ver extracto
          </button>
        </div>
      </div>
      
      <div class="book-info">
        <div class="book-meta">
          <span class="book-category">FICCIÓN</span>
          <span class="book-year">2024</span>
        </div>
        
        <h2 class="book-title">Kreación</h2>
        <p class="book-tagline">Una distopía sobre creatividad y control</p>
        
        <p class="book-description">
          En un futuro donde la creatividad está regulada por el Estado,
          un grupo de artistas clandestinos busca recuperar la libertad
          de crear. Una novela corta intensa y directa.
        </p>
        
        <ul class="book-features">
          <li>✓ Ciencia ficción social</li>
          <li>✓ Lectura rápida (2-3 horas)</li>
          <li>✓ Reflexión sobre libertad creativa</li>
        </ul>
        
        <div class="book-actions">
          <a href="https://a.co/d/030jsmbG" 
             target="_blank" 
             rel="noopener"
             class="btn-amazon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.544.41-3.06.614-4.544.614-2.893 0-5.604-.595-8.136-1.785-.793-.373-1.54-.775-2.24-1.206l-.257-.18c-.275-.194-.337-.326-.188-.495zm13.888-5.045c-.18.264-.42.396-.72.396-.24 0-.42-.06-.54-.18-.12-.12-.18-.3-.18-.54 0-.18.045-.33.135-.45.09-.12.21-.18.36-.18.18 0 .315.075.405.225.09.15.135.33.135.54 0 .15-.045.27-.135.405zm5.73-.405c0-.18.045-.33.135-.45.09-.12.21-.18.36-.18.18 0 .315.075.405.225.09.15.135.33.135.54 0 .15-.045.27-.135.405-.18.264-.42.396-.72.396-.24 0-.42-.06-.54-.18-.12-.12-.18-.3-.18-.54zm-2.865-4.995c-.33 0-.645.105-.945.315-.3.21-.525.495-.675.855-.045.105-.12.165-.225.18l-1.38.18c-.09 0-.165-.03-.225-.09-.06-.06-.075-.135-.045-.225.21-.78.63-1.41 1.26-1.89.63-.48 1.35-.72 2.16-.72.48 0 .915.075 1.305.225.39.15.72.36.99.63.27.27.48.585.63.945.15.36.225.75.225 1.17v4.59c0 .45.075.81.225 1.08.15.27.315.51.495.72.06.06.075.135.045.225-.03.09-.09.15-.18.18l-1.29.945c-.09.06-.18.045-.27-.045-.36-.42-.69-.84-.99-1.26-.075-.12-.165-.24-.27-.36-.465.54-1.005.96-1.62 1.26-.615.3-1.29.45-2.025.45-.84 0-1.53-.255-2.07-.765-.54-.51-.81-1.185-.81-2.025 0-.48.09-.915.27-1.305.18-.39.42-.72.72-.99.3-.27.645-.495 1.035-.675.39-.18.81-.315 1.26-.405l2.34-.495c.21-.045.375-.135.495-.27.12-.135.18-.315.18-.54v-.54c0-.45-.12-.81-.36-1.08-.24-.27-.585-.405-1.035-.405zm-2.25 5.67c0 .39.12.69.36.9.24.21.525.315.855.315.24 0 .48-.06.72-.18.24-.12.45-.27.63-.45.24-.24.375-.54.405-.9v-1.08c0-.12-.045-.21-.135-.27-.09-.06-.18-.075-.27-.045l-1.62.36c-.42.09-.765.27-1.035.54-.27.27-.405.615-.405 1.035z"/>
            </svg>
            Comprar en Amazon
          </a>
        </div>
      </div>
      
      <!-- Extracto expandible -->
      <div id="preview-kreacion" class="book-preview">
        <div class="preview-header">
          <h4>Extracto del libro:</h4>
          <button class="close-preview" onclick="togglePreview('kreacion')">×</button>
        </div>
        <div class="preview-content">
          <p>"El Ministerio de Armonía Cultural no prohibió el arte. Lo reguló, lo domesticó, lo hizo seguro.</p>
          <p>Y en ese proceso, lo mató.</p>
          <p>Pero algunos aún recordábamos qué se sentía crear sin permiso. Qué se sentía pintar sin aprobación previa, escribir sin filtros de 'armonía social', componer sin pasar por los comités de 'bienestar emocional colectivo'."</p>
        </div>
      </div>
    </article>
    
  </div>
</section>

<!-- Por qué leer -->
<section class="books-why">
  <div class="why-container">
    <h2 class="why-title" data-scroll>Por qué leer mis libros</h2>
    <p class="why-subtitle" data-scroll>No vendo cursos, no prometo fórmulas mágicas. Solo historias honestas.</p>
    
    <div class="why-grid">
      <div class="why-card" data-scroll>
        <div class="why-icon">💯</div>
        <h3>Sin filtros</h3>
        <p>Escribo como hablo. Sin pretensiones académicas ni lenguaje rebuscado.</p>
      </div>
      
      <div class="why-card" data-scroll>
        <div class="why-icon">🎯</div>
        <h3>Directo al punto</h3>
        <p>No hay relleno. Cada página tiene propósito. Respeto tu tiempo.</p>
      </div>
      
      <div class="why-card" data-scroll>
        <div class="why-icon">🔥</div>
        <h3>Experiencia real</h3>
        <p>No teoría copiada de Wikipedia. Todo sale de vivencias personales.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Final -->
<section class="books-cta">
  <div class="cta-container" data-scroll>
    <h2>¿Listo para leer?</h2>
    <p>Ambos libros disponibles en Amazon. Formato Kindle y físico.</p>
    
    <div class="cta-buttons">
      <a href="https://a.co/d/07CClbnv" target="_blank" rel="noopener" class="cta-btn">
        <span>Glucosa en Crisis</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </a>
      <a href="https://a.co/d/030jsmbG" target="_blank" rel="noopener" class="cta-btn">
        <span>Kreación</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </a>
    </div>
    
    <p class="cta-note">
      O <a href="{{ '/newsletter/' | relative_url }}">suscríbete al newsletter</a> para recibir extractos exclusivos
    </p>
  </div>
</section>

</div>

<style>
/* ============================================
   BOOKS PAGE - PROFESSIONAL & CLEAN
   ============================================ */

.books-page {
  background: #0a0a0a;
  color: #fff;
  font-family: 'Space Grotesk', -apple-system, sans-serif;
}

/* Hero */
.books-hero {
  min-height: 70vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #F34F29 0%, #d94520 30%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
}

.books-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(255,255,255,0.02) 2px,
    rgba(255,255,255,0.02) 4px
  );
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;
}

.hero-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(255,255,255,0.1);
  border: 2px solid rgba(255,255,255,0.3);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  font-family: 'IBM Plex Mono', monospace;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  line-height: 0.95;
  margin: 0 0 2rem;
  letter-spacing: -0.03em;
}

.glitch {
  position: relative;
  color: #fff;
  text-shadow: 2px 2px 0 rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.9);
  margin-bottom: 3rem;
  max-width: 600px;
}

.hero-stats {
  display: flex;
  gap: 3rem;
}

.stat {
  text-align: center;
}

.stat-num {
  font-size: 3rem;
  font-weight: 700;
  font-family: 'IBM Plex Mono', monospace;
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255,255,255,0.7);
  margin-top: 0.5rem;
}

/* Books Grid */
.books-grid {
  padding: 6rem 0;
  background: #0a0a0a;
}

.grid-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.book-item {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 4rem;
  margin-bottom: 8rem;
  align-items: start;
}

.book-item.reverse {
  grid-template-columns: 1fr 400px;
}

.book-item.reverse .book-cover-wrapper {
  order: 2;
}

.book-item.reverse .book-info {
  order: 1;
}

/* Book Cover */
.book-cover-wrapper {
  position: relative;
  aspect-ratio: 2/3;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  transition: all 0.4s ease;
}

.book-cover-wrapper:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 80px rgba(243, 79, 41, 0.3);
}

.book-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.book-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.9) 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.book-cover-wrapper:hover .book-overlay {
  opacity: 1;
}

.btn-preview {
  padding: 0.75rem 1.5rem;
  background: #F34F29;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
}

.btn-preview:hover {
  background: #d94520;
  transform: translateY(-2px);
}

/* Book Info */
.book-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.85rem;
}

.book-category {
  padding: 0.35rem 0.75rem;
  background: #F34F29;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
}

.book-year {
  padding: 0.35rem 0.75rem;
  border: 2px solid rgba(255,255,255,0.3);
  color: rgba(255,255,255,0.7);
}

.book-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 1rem;
  line-height: 1.1;
}

.book-tagline {
  font-size: 1.25rem;
  color: rgba(255,255,255,0.7);
  margin-bottom: 2rem;
  font-style: italic;
}

.book-description {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.85);
  margin-bottom: 2rem;
}

.book-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem;
}

.book-features li {
  font-size: 1rem;
  color: rgba(255,255,255,0.9);
  font-family: 'IBM Plex Mono', monospace;
  padding: 0.5rem 0;
}

/* Amazon Button */
.btn-amazon {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: #FF9900;
  color: #0a0a0a;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 153, 0, 0.3);
}

.btn-amazon:hover {
  background: #FFB84D;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 153, 0, 0.4);
}

/* Preview */
.book-preview {
  display: none;
  margin-top: 3rem;
  padding: 2.5rem;
  background: rgba(255,255,255,0.05);
  border-left: 4px solid #F34F29;
  border-radius: 8px;
}

.book-preview.active {
  display: block;
  animation: slideDown 0.4s ease;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.preview-header h4 {
  font-size: 1.25rem;
  color: #F34F29;
  margin: 0;
}

.close-preview {
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  width: 30px;
  height: 30px;
  padding: 0;
  line-height: 1;
  transition: color 0.2s;
}

.close-preview:hover {
  color: #F34F29;
}

.preview-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255,255,255,0.9);
  margin-bottom: 1.25rem;
  font-style: italic;
}

/* Why Section */
.books-why {
  padding: 6rem 0;
  background: linear-gradient(180deg, #0a0a0a, #1a1a1a);
}

.why-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.why-title {
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
}

.why-subtitle {
  font-size: 1.5rem;
  color: rgba(255,255,255,0.7);
  text-align: center;
  margin-bottom: 4rem;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.why-card {
  padding: 3rem;
  background: rgba(255,255,255,0.02);
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.why-card:hover {
  border-color: #F34F29;
  background: rgba(243, 79, 41, 0.05);
  transform: translateY(-8px);
}

.why-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.why-card h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.why-card p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.8);
}

/* CTA */
.books-cta {
  padding: 6rem 0;
  background: #0a0a0a;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.cta-container h2 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.cta-container > p {
  font-size: 1.5rem;
  color: rgba(255,255,255,0.8);
  margin-bottom: 3rem;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 3rem;
  background: #F34F29;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.cta-btn:hover {
  background: #d94520;
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(243, 79, 41, 0.4);
}

.cta-note {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.6);
}

.cta-note a {
  color: #F34F29;
  text-decoration: none;
  border-bottom: 1px solid #F34F29;
  transition: all 0.2s;
}

.cta-note a:hover {
  color: #fff;
  border-bottom-color: #fff;
}

/* Scroll Animations */
[data-scroll] {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

[data-scroll].in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 1024px) {
  .book-item,
  .book-item.reverse {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .book-item.reverse .book-cover-wrapper {
    order: 1;
  }

  .book-item.reverse .book-info {
    order: 2;
  }

  .book-cover-wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }

  .book-title {
    font-size: 2.5rem;
  }

  .why-title {
    font-size: 2.5rem;
  }

  .cta-container h2 {
    font-size: 2.5rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-btn {
    width: 100%;
  }

  .book-cover-wrapper {
    max-width: 300px;
  }
}
</style>

<script>
function togglePreview(bookId) {
  const preview = document.getElementById('preview-' + bookId);
  preview.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('[data-scroll]').forEach(el => {
    observer.observe(el);
  });
});
</script>