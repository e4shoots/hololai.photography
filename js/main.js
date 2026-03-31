/**
 * HOLOLA'I PHOTOGRAPHY — MAIN JAVASCRIPT
 * 
 * Handles page routing and rendering.
 * ALL content is pulled from config.js
 */

// ========== PAGE ROUTING ==========

const PAGES = {
  home: 'home',
  gallery: 'gallery',
  about: 'about',
  booking: 'booking',
  contact: 'contact',
};

let currentPage = PAGES.home;

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1) || PAGES.home;
  navigateTo(hash);
});

function navigateTo(page) {
  const validPages = Object.values(PAGES);
  if (!validPages.includes(page)) {
    page = PAGES.home;
  }
  
  currentPage = page;
  window.location.hash = page;
  renderPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== PAGE RENDERING ==========

function renderPage(page) {
  const app = document.getElementById('app');
  
  switch (page) {
    case PAGES.home:
      app.innerHTML = renderHome();
      break;
    case PAGES.gallery:
      app.innerHTML = renderGallery();
      break;
    case PAGES.about:
      app.innerHTML = renderAbout();
      break;
    case PAGES.booking:
      app.innerHTML = renderBooking();
      break;
    case PAGES.contact:
      app.innerHTML = renderContact();
      break;
    default:
      app.innerHTML = renderHome();
  }
  
  attachEventListeners();
}

// ========== HOME PAGE ==========

function renderHome() {
  const { hero, services, galleryPreview } = CONFIG;
  
  return `
    <section id="home" class="hero">
      <img src="${hero.image}" alt="Hero" class="hero-image">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="hero-location">${hero.location}</div>
        <h1 class="hero-headline">${hero.headline}</h1>
        <p class="hero-subheadline">${hero.subheadline}</p>
        <div class="hero-ctas">
          <a href="${hero.cta1.href}" class="btn">${hero.cta1.text}</a>
          <a href="${hero.cta2.href}" class="btn btn-outline">${hero.cta2.text}</a>
        </div>
      </div>
    </section>

    <section id="gallery-preview">
      <div class="container">
        <div class="section-header">
          <div class="label reveal">${galleryPreview.label}</div>
          <h2 class="reveal">${galleryPreview.headline}</h2>
        </div>
        <div class="gallery-grid">
          ${galleryPreview.items.map((item, i) => `
            <div class="gallery-item reveal" style="aspect-ratio: ${item.span === 2 ? '16/9' : '4/3'}; grid-column: span ${item.span}; animation-delay: ${i * 60}ms;">
              <img src="${item.src}" alt="${item.alt}" loading="lazy">
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section id="services">
      <div class="container">
        <div class="section-header">
          <div class="label reveal">[ Approach ]</div>
          <h2 class="reveal">How I Work</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 0; border-bottom: 1px solid #2A2A2A;">
          ${services.map((s, i) => `
            <div class="reveal" style="padding: 2rem 0; border-right: ${i < services.length - 1 ? '1px solid #2A2A2A' : 'none'}; padding-right: ${i < services.length - 1 ? '2rem' : '0'}; padding-left: ${i > 0 ? '2rem' : '0'}; animation-delay: ${i * 80}ms;">
              <div style="font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem; color: #2A2A2A; line-height: 1; margin-bottom: 1rem;">${s.num}</div>
              <h3>${s.title}</h3>
              <p style="color: #777; font-size: 0.9rem; margin-top: 0.5rem;">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// ========== GALLERY PAGE ==========

function renderGallery() {
  const { galleryPage } = CONFIG;
  const categories = ['All', ...new Set(galleryPage.items.map(item => item.category))];
  
  return `
    <section style="padding-top: 120px;">
      <div class="container">
        <div class="section-header">
          <div class="label reveal">${galleryPage.label}</div>
          <h2 class="reveal">${galleryPage.headline}</h2>
          <p class="editorial reveal" style="margin-top: 1rem; color: #777;">${galleryPage.subheadline}</p>
        </div>
        
        <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 2rem; margin-top: 2rem;">
          ${categories.map(cat => `
            <button class="category-filter" data-category="${cat}" style="background: none; border: none; border-bottom: 1px solid transparent; color: #555; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; padding-bottom: 4px; transition: all 0.3s ease;" onclick="filterGallery('${cat}')">
              ${cat}
            </button>
          `).join('')}
        </div>

        <div class="gallery-grid" id="gallery-container">
          ${galleryPage.items.map((item, i) => `
            <div class="gallery-item reveal" data-category="${item.category}" style="grid-column: span ${item.span}; animation-delay: ${(i % 6) * 60}ms;" onclick="openLightbox(${i})">
              <img src="${item.src}" alt="${item.alt}" loading="lazy">
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <div class="lightbox" id="lightbox">
      <button class="lightbox-close" onclick="closeLightbox()">✕</button>
      <button class="lightbox-nav lightbox-prev" onclick="prevImage()">‹</button>
      <div class="lightbox-content">
        <img id="lightbox-image" src="" alt="" class="lightbox-image">
      </div>
      <button class="lightbox-nav lightbox-next" onclick="nextImage()">›</button>
    </div>
  `;
}

// ========== ABOUT PAGE ==========

function renderAbout() {
  const { aboutPage } = CONFIG;
  
  return `
    <section style="padding-top: 120px;">
      <div class="container">
        <div class="section-header">
          <div class="label reveal">${aboutPage.label}</div>
          <h2 class="reveal">${aboutPage.headline}</h2>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;">
          <div class="reveal">
            <img src="${aboutPage.image}" alt="Photographer" style="width: 100%; aspect-ratio: 3/4; object-fit: cover;">
          </div>
          <div class="reveal" style="animation-delay: 150ms;">
            <h2 class="editorial" style="font-size: 1.8rem; margin-bottom: 1.5rem;">${aboutPage.quote}</h2>
            <div class="rule-line"></div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${aboutPage.story.map(para => `<p style="color: #999; line-height: 1.8; font-size: 0.9rem;">${para}</p>`).join('')}
            </div>
            <div style="margin-top: 2rem; display: flex; gap: 1rem;">
              <a href="${aboutPage.cta1.href}" class="btn">${aboutPage.cta1.text}</a>
              <a href="${aboutPage.cta2.href}" class="btn btn-outline">${aboutPage.cta2.text}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="border-top: 1px solid #2A2A2A;">
      <div class="container">
        <div class="section-header">
          <div class="label reveal">${aboutPage.philosophyLabel}</div>
          <h2 class="reveal">${aboutPage.philosophyHeadline}</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0;">
          ${aboutPage.philosophy.map((item, i) => `
            <div class="reveal" style="padding: 2.5rem 0; border-bottom: 1px solid #2A2A2A; border-right: ${i < 2 ? '1px solid #2A2A2A' : 'none'}; padding-right: ${i < 2 ? '2rem' : '0'}; padding-left: ${i > 0 ? '2rem' : '0'}; animation-delay: ${i * 100}ms;">
              <div style="font-family: 'Bebas Neue', sans-serif; font-size: 3rem; color: #2A2A2A; line-height: 1; margin-bottom: 1rem;">${item.num}</div>
              <h3>${item.title}</h3>
              <p style="color: #777; font-size: 0.85rem; margin-top: 0.5rem;">${item.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section style="height: 50vh; position: relative; overflow: hidden;">
      <img src="${aboutPage.fullBleedImage}" alt="Landscape" style="width: 100%; height: 100%; object-fit: cover;">
      <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(8,8,8,0.8) 0%, transparent 60%);"></div>
      <div style="position: absolute; bottom: 2rem; left: 2rem;">
        <div class="label">${aboutPage.fullBleedLabel}</div>
      </div>
    </section>
  `;
}

// ========== BOOKING PAGE ==========

function renderBooking() {
  const { bookingPage } = CONFIG;
  
  return `
    <section style="padding-top: 120px;">
      <div class="container">
        <div class="section-header">
          <div class="label reveal">${bookingPage.label}</div>
          <h2 class="reveal">${bookingPage.headline}</h2>
          <p class="editorial reveal" style="margin-top: 1rem; color: #777; max-width: 420px;">${bookingPage.subheadline}</p>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="reveal" style="margin-bottom: 3rem;">
          <div class="label" style="margin-bottom: 1rem;">${bookingPage.calendarLabel}</div>
          <div style="background: #0D0D0D; padding: 2rem; border: 1px solid #2A2A2A;">
            <iframe src="${bookingPage.setmoreUrl}" style="width: 100%; height: 600px; border: none; border-radius: 0;"></iframe>
          </div>
        </div>

        <div class="reveal" style="animation-delay: 150ms;">
          <div class="label" style="margin-bottom: 1rem;">${bookingPage.sessionInfoLabel}</div>
          <div class="rule-line"></div>
          <div style="display: flex; flex-direction: column; gap: 0;">
            ${bookingPage.sessionInfo.map(info => `
              <div style="display: flex; justify-content: space-between; align-items: start; padding: 0.75rem 0; border-bottom: 1px solid #1A1A1A;">
                <span class="label">${info.label}</span>
                <span style="color: #999; font-size: 0.85rem; text-align: right;">${info.value}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

// ========== CONTACT PAGE ==========

function renderContact() {
  const { contactPage } = CONFIG;
  
  return `
    <section style="padding-top: 120px;">
      <div class="container">
        <div class="section-header">
          <div class="label reveal">${contactPage.label}</div>
          <h2 class="reveal">${contactPage.headline}</h2>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem;">
          <div class="reveal" id="contact-form-container">
            <form id="contact-form" onsubmit="handleContactSubmit(event)">
              <div class="form-group">
                <label for="contact-name">${contactPage.formLabels.name}</label>
                <input type="text" id="contact-name" name="name" placeholder="${contactPage.formLabels.namePlaceholder}" required>
              </div>
              <div class="form-group">
                <label for="contact-email">${contactPage.formLabels.email}</label>
                <input type="email" id="contact-email" name="email" placeholder="${contactPage.formLabels.emailPlaceholder}" required>
              </div>
              <div class="form-group">
                <label for="contact-message">${contactPage.formLabels.message}</label>
                <textarea id="contact-message" name="message" placeholder="${contactPage.formLabels.messagePlaceholder}" required></textarea>
              </div>
              <button type="submit" class="btn">${contactPage.formLabels.submit}</button>
            </form>
          </div>

          <div class="reveal" style="animation-delay: 150ms;">
            <div style="margin-bottom: 2rem;">
              <div class="label" style="margin-bottom: 1.5rem;">${contactPage.connectLabel}</div>
              
              <a href="${contactPage.instagram.url}" target="_blank" rel="noopener noreferrer" style="display: flex; gap: 1rem; margin-bottom: 1.5rem; text-decoration: none;">
                <div style="width: 40px; height: 40px; border: 1px solid #2A2A2A; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <span style="font-size: 1.2rem;">📷</span>
                </div>
                <div>
                  <div class="label">${contactPage.instagram.label}</div>
                  <div style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.1rem; color: #EFEFEF; transition: color 0.3s ease;" onmouseover="this.style.color='#B8A99A'" onmouseout="this.style.color='#EFEFEF'">
                    ${contactPage.instagram.handle}
                  </div>
                  <p style="font-size: 0.75rem; color: #555; margin-top: 0.25rem;">${contactPage.instagram.desc}</p>
                </div>
              </a>

              <a href="mailto:${contactPage.email.address}" style="display: flex; gap: 1rem; margin-bottom: 1.5rem; text-decoration: none;">
                <div style="width: 40px; height: 40px; border: 1px solid #2A2A2A; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <span style="font-size: 1.2rem;">✉️</span>
                </div>
                <div>
                  <div class="label">${contactPage.email.label}</div>
                  <div style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.1rem; color: #EFEFEF; transition: color 0.3s ease;" onmouseover="this.style.color='#B8A99A'" onmouseout="this.style.color='#EFEFEF'">
                    ${contactPage.email.address}
                  </div>
                  <p style="font-size: 0.75rem; color: #555; margin-top: 0.25rem;">${contactPage.email.desc}</p>
                </div>
              </a>

              <div style="display: flex; gap: 1rem;">
                <div style="width: 40px; height: 40px; border: 1px solid #2A2A2A; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <span style="font-size: 1.2rem;">📍</span>
                </div>
                <div>
                  <div class="label">${contactPage.location.label}</div>
                  <div style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.1rem; color: #EFEFEF;">
                    ${contactPage.location.name}
                  </div>
                  <p style="font-size: 0.75rem; color: #555; margin-top: 0.25rem;">${contactPage.location.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ========== GALLERY FUNCTIONS ==========

let currentLightboxIndex = 0;
let galleryItems = [];

function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'All' || item.dataset.category === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
  
  document.querySelectorAll('.category-filter').forEach(btn => {
    btn.style.color = btn.dataset.category === category ? '#EFEFEF' : '#555';
    btn.style.borderBottomColor = btn.dataset.category === category ? '#B8A99A' : 'transparent';
  });
}

function openLightbox(index) {
  galleryItems = Array.from(document.querySelectorAll('.gallery-item')).filter(item => item.style.display !== 'none');
  currentLightboxIndex = index;
  showLightboxImage();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function prevImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
  showLightboxImage();
}

function nextImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
  showLightboxImage();
}

function showLightboxImage() {
  const item = galleryItems[currentLightboxIndex];
  const img = item.querySelector('img');
  document.getElementById('lightbox-image').src = img.src;
  document.getElementById('lightbox-image').alt = img.alt;
}

// ========== FORM HANDLERS ==========

function handleContactSubmit(e) {
  e.preventDefault();
  const { contactPage } = CONFIG;
  const container = document.getElementById('contact-form-container');
  container.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div style="font-size: 2rem;">✓</div>
      <h3 style="font-family: 'Bebas Neue', sans-serif; font-size: 1.8rem; letter-spacing: 0.08em;">${contactPage.successMessage}</h3>
      <p style="color: #777; line-height: 1.8;">${contactPage.successText}</p>
    </div>
  `;
}

// ========== EVENT LISTENERS ==========

function attachEventListeners() {
  // Remove duplicate keydown listeners
  const oldListener = attachEventListeners._keydownListener;
  if (oldListener) {
    document.removeEventListener('keydown', oldListener);
  }
  
  const keydownListener = (e) => {
    if (document.getElementById('lightbox') && document.getElementById('lightbox').classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    }
  };
  
  document.addEventListener('keydown', keydownListener);
  attachEventListeners._keydownListener = keydownListener;

  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
}

// ========== INITIALIZATION ==========

let isInitialized = false;

document.addEventListener('DOMContentLoaded', () => {
  if (!isInitialized) {
    isInitialized = true;
    const hash = window.location.hash.slice(1) || PAGES.home;
    renderPage(hash);
  }
});
