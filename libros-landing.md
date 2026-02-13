---
layout: default
title: "Mis Libros"
permalink: /libros/
---

---
layout: default
title: "Mis Libros - René Moya"
permalink: /libros/
---

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mis Libros - René Moya</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap" rel="stylesheet">
</head>
<body class="books-landing">

<!-- Hero con grid asimétrico -->
<section class="books-hero">
  <div class="hero-container">
    <div class="hero-grid">
      <!-- Lado izquierdo: Texto -->
      <div class="hero-content" data-scroll>
        <div class="label-badge">AUTOR INDEPENDIENTE</div>
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
      
      <!-- Lado derecho: Visual impact -->
      <div class="hero-visual" data-scroll>
        <div class="book-stack">
          <div class="book-card book-1">
            <div class="book-spine"></div>
            <div class="book-title">GLUCOSA</div>
          </div>
          <div class="book-card book-2">
            <div class="book-spine"></div>
            <div class="book-title">KREACIÓN</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Libros - Grid experimental -->
<section class="books-showcase">
  <div class="showcase-container">
    <!-- Libro 1: Glucosa -->
    <div class="book-block" data-scroll>
      <div class="block-content">
        <div class="book-number">01</div>
        <div class="book-meta">
          <span class="book-category">NO-FICCIÓN</span>
          <span class="book-year">2024</span>
        </div>
        
        <h2 class="book-name">Glucosa en Crisis</h2>
        <p class="book-tagline">Mi viaje personal lidiando con diabetes tipo 2</p>
        
        <p class="book-desc">
          Un relato honesto y sin filtros sobre mi diagnóstico de diabetes.<br>
          No es un manual médico, es mi experiencia real: los errores,<br>
          los aprendizajes, las luchas diarias con la glucosa.
        </p>
        
        <div class="book-features">
          <div class="feature">✓ Experiencia personal auténtica</div>
          <div class="feature">✓ Tips prácticos que funcionan</div>
          <div class="feature">✓ Sin pseudociencia ni promesas mágicas</div>
        </div>
        
        <div class="book-actions">
          <a href="https://a.co/d/07CClbnv" 
             target="_blank" 
             rel="noopener"
             class="btn-primary">
            <span>Comprar en Amazon</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <button class="btn-preview" onclick="togglePreview('glucosa')">
            Ver extracto
          </button>
        </div>
        
        <div id="preview-glucosa" class="book-preview">
          <div class="preview-header">
            <h4>Extracto del libro:</h4>
            <button class="close-preview" onclick="togglePreview('glucosa')">×</button>
          </div>
          <div class="preview-text">
            <p>"El día que me diagnosticaron diabetes tipo 2, no sentí miedo. Sentí rabia...</p>
            <p>Rabia porque sabía que había señales que ignoré. Rabia porque pensé que eso le pasaba 'a otros'..."</p>
          </div>
        </div>
      </div>
      
      <div class="block-decoration">
        <div class="decoration-line"></div>
        <div class="decoration-dot"></div>
      </div>
    </div>
    
    <!-- Libro 2: Kreación -->
    <div class="book-block reverse" data-scroll>
      <div class="block-content">
        <div class="book-number">02</div>
        <div class="book-meta">
          <span class="book-category">FICCIÓN</span>
          <span class="book-year">2024</span>
        </div>
        
        <h2 class="book-name">Kreación</h2>
        <p class="book-tagline">Una distopía sobre creatividad y control</p>
        
        <p class="book-desc">
          En un futuro donde la creatividad está regulada por el Estado,<br>
          un grupo de artistas clandestinos busca recuperar la libertad<br>
          de crear. Una novela corta intensa y directa.
        </p>
        
        <div class="book-features">
          <div class="feature">✓ Ciencia ficción social</div>
          <div class="feature">✓ Lectura rápida (2-3 horas)</div>
          <div class="feature">✓ Reflexión sobre libertad creativa</div>
        </div>
        
        <div class="book-actions">
          <a href="https://a.co/d/030jsmbG" 
             target="_blank" 
             rel="noopener"
             class="btn-primary">
            <span>Comprar en Amazon</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <button class="btn-preview" onclick="togglePreview('kreacion')">
            Ver extracto
          </button>
        </div>
        
        <div id="preview-kreacion" class="book-preview">
          <div class="preview-header">
            <h4>Extracto del libro:</h4>
            <button class="close-preview" onclick="togglePreview('kreacion')">×</button>
          </div>
          <div class="preview-text">
            <p>"El Ministerio de Armonía Cultural no prohibió el arte. Lo reguló, lo domesticó, lo hizo seguro..."</p>
            <p>"Y en ese proceso, lo mató. Pero algunos aún recordábamos qué se sentía crear sin permiso."</p>
          </div>
        </div>
      </div>
      
      <div class="block-decoration">
        <div class="decoration-line"></div>
        <div class="decoration-dot"></div>
      </div>
    </div>
  </div>
</section>

<!-- Por qué leer mis libros -->
<section class="books-why">
  <div class="why-container">
    <div class="why-header" data-scroll>
      <h2>Por qué leer mis libros</h2>
      <p>No vendo cursos, no prometo fórmulas mágicas. Solo historias honestas.</p>
    </div>
    
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
    <div class="cta-content">
      <h2>¿Listo para leer?</h2>
      <p>Ambos libros disponibles en Amazon. Formato Kindle y físico.</p>
      
      <div class="cta-buttons">
        <a href="https://a.co/d/07CClbnv" target="_blank" rel="noopener" class="cta-btn">
          Ver Glucosa en Crisis
        </a>
        <a href="https://a.co/d/030jsmbG" target="_blank" rel="noopener" class="cta-btn">
          Ver Kreación
        </a>
      </div>
      
      <p class="cta-note">
        O <a href="/newsletter/">suscríbete al newsletter</a> para recibir extractos exclusivos
      </p>
    </div>
  </div>
</section>

<style>
/* ============================================
   BOOKS LANDING - BRUTALIST MODERN
   ============================================ */

.books-landing {
  background: #0a0a0a;
  color: #fff;
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  overflow-x: hidden;
}

/* Hero Section */
.books-hero {
  min-height: 95vh;
  display: flex;
  align-items: center;
  background: 
    linear-gradient(135deg, #F34F29 0%, #d94520 30%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
}

.books-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255,255,255,0.03) 2px,
      rgba(255,255,255,0.03) 4px
    );
  pointer-events: none;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.label-badge {
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

/* Glitch effect */
.glitch {
  position: relative;
  color: #F34F29;
  animation: glitch-text 5s infinite;
}

@keyframes glitch-text {
  0%, 90%, 100% {
    transform: translate(0);
  }
  92% {
    transform: translate(-2px, 2px);
  }
  94% {
    transform: translate(2px, -2px);
  }
  96% {
    transform: translate(-2px, -2px);
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.85);
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
  color: #fff;
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255,255,255,0.6);
  margin-top: 0.5rem;
}

/* Book Stack Visual */
.book-stack {
  position: relative;
  height: 400px;
}

.book-card {
  position: absolute;
  width: 250px;
  height: 350px;
  background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
  border: 3px solid rgba(255,255,255,0.1);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.book-1 {
  top: 0;
  left: 0;
  transform: rotate(-5deg);
  z-index: 2;
}

.book-2 {
  top: 40px;
  left: 100px;
  transform: rotate(8deg);
  z-index: 1;
}

.book-card:hover {
  transform: rotate(0deg) translateY(-20px);
  border-color: #F34F29;
  box-shadow: 0 30px 80px rgba(243, 79, 41, 0.3);
  z-index: 3;
}

.book-spine {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 30px;
  background: linear-gradient(180deg, #F34F29, #d94520);
}

.book-title {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: #fff;
  text-align: center;
  font-family: 'IBM Plex Mono', monospace;
}

/* Books Showcase */
.books-showcase {
  padding: 8rem 0;
  background: #0a0a0a;
}

.showcase-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.book-block {
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 4rem;
  margin-bottom: 8rem;
  padding: 4rem;
  background: linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border: 2px solid rgba(255,255,255,0.1);
  position: relative;
}

.book-block.reverse {
  grid-template-columns: 100px 1fr;
}

.book-number {
  font-size: 8rem;
  font-weight: 700;
  font-family: 'IBM Plex Mono', monospace;
  color: rgba(243, 79, 41, 0.15);
  line-height: 1;
  position: absolute;
  top: -3rem;
  right: 2rem;
}

.book-meta {
  display: flex;
  gap: 1.5rem;
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

.book-name {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 1rem;
  line-height: 1.1;
}

.book-tagline {
  font-size: 1.5rem;
  color: rgba(255,255,255,0.7);
  margin-bottom: 2rem;
  font-style: italic;
}

.book-desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.85);
  margin-bottom: 2rem;
}

.book-features {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 3rem;
}

.feature {
  font-size: 1rem;
  color: rgba(255,255,255,0.9);
  font-family: 'IBM Plex Mono', monospace;
}

.book-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: #F34F29;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s ease;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  background: #d94520;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(243, 79, 41, 0.4);
}

.btn-preview {
  padding: 1.25rem 2.5rem;
  background: transparent;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  border: 2px solid rgba(255,255,255,0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-preview:hover {
  border-color: #F34F29;
  color: #F34F29;
  background: rgba(243, 79, 41, 0.1);
}

/* Book Preview */
.book-preview {
  display: none;
  margin-top: 2rem;
  padding: 2rem;
  background: rgba(255,255,255,0.05);
  border-left: 4px solid #F34F29;
}

.book-preview.active {
  display: block;
  animation: slideDown 0.4s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
}

.close-preview {
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  line-height: 1;
}

.close-preview:hover {
  color: #F34F29;
}

.preview-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255,255,255,0.9);
  margin-bottom: 1rem;
  font-style: italic;
}

/* Decoration */
.block-decoration {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.decoration-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(180deg, transparent, #F34F29, transparent);
}

.decoration-dot {
  width: 12px;
  height: 12px;
  background: #F34F29;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

/* Why Section */
.books-why {
  padding: 8rem 0;
  background: linear-gradient(180deg, #0a0a0a, #1a1a1a);
}

.why-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.why-header {
  text-align: center;
  margin-bottom: 5rem;
}

.why-header h2 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.why-header p {
  font-size: 1.5rem;
  color: rgba(255,255,255,0.7);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.why-card {
  padding: 3rem;
  background: rgba(255,255,255,0.02);
  border: 2px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
}

.why-card:hover {
  border-color: #F34F29;
  background: rgba(243, 79, 41, 0.05);
  transform: translateY(-10px);
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

/* CTA Final */
.books-cta {
  padding: 8rem 0;
  background: #0a0a0a;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.cta-content h2 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.cta-content > p {
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
  padding: 1.5rem 3rem;
  background: #F34F29;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
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
}

.cta-note a:hover {
  color: #fff;
  border-bottom-color: #fff;
}

/* Scroll animations */
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
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .book-stack {
    height: 300px;
  }

  .book-card {
    width: 200px;
    height: 280px;
  }

  .book-number {
    font-size: 5rem;
    top: -2rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }

  .book-block {
    grid-template-columns: 1fr;
    padding: 2rem;
    margin-bottom: 4rem;
  }

  .book-block.reverse {
    grid-template-columns: 1fr;
  }

  .block-decoration {
    display: none;
  }

  .book-name {
    font-size: 2.5rem;
  }

  .book-actions {
    flex-direction: column;
  }

  .why-header h2 {
    font-size: 2.5rem;
  }

  .cta-content h2 {
    font-size: 2.5rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-btn {
    width: 100%;
  }
}
</style>

<script>
// Toggle preview
function togglePreview(bookId) {
  const preview = document.getElementById('preview-' + bookId);
  preview.classList.toggle('active');
}

// Scroll animations
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

</body>
</html>