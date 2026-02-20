// ==========================================
// RESIDENCIAL SANTANA - INTERACTIONS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  // === SMOOTH SCROLL ===
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');

      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // === STICKY HEADER SHADOW ===
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // === SLIDESHOW AUTOMÁTICO ===
  // Slideshow automático para as imagens das suítes e lofts
  function initSlideshow() {
    const slideshowContainers = document.querySelectorAll('.slideshow-container');
    if (slideshowContainers.length === 0) return;

    slideshowContainers.forEach(container => {
      const images = container.querySelectorAll('.slideshow-image');
      if (images.length === 0) return;

      let currentIndex = 0;

      // Garante que a primeira imagem esteja visível ao carregar
      images[currentIndex].classList.add('active');

      function showNextImage() {
        // Remove a classe 'active' da imagem atual
        images[currentIndex].classList.remove('active');

        // Avança para a próxima imagem (volta ao início quando chega ao final)
        currentIndex = (currentIndex + 1) % images.length;

        // Adiciona a classe 'active' à nova imagem
        images[currentIndex].classList.add('active');
      }

      // Inicia o slideshow automático a cada 3 segundos
      setInterval(showNextImage, 3000);
    });
  }

  // Inicializa o slideshow quando a página carrega
  initSlideshow();

  // === STICKY BOTTOM BAR (Mobile) ===
  const stickyBar = document.getElementById('stickyBar');
  const heroSection = document.getElementById('hero');

  if (stickyBar && heroSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            stickyBar.classList.add('visible');
          } else {
            stickyBar.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    observer.observe(heroSection);
  }

  // === LAZY LOADING IMAGES ===
  // Excluir imagens do slideshow do lazy loading para evitar conflito
  const images = document.querySelectorAll('img[loading="lazy"]:not(.slideshow-image)');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;

          // Fade in animation
          img.style.opacity = '0';
          img.style.transition = 'opacity 0.5s ease';

          img.addEventListener('load', () => {
            img.style.opacity = '1';
          });

          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // === SCROLL ANIMATIONS ===
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.unidade-card, .amenidade-item, .faq-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    elements.forEach(el => observer.observe(el));
  };

  animateOnScroll();

  // === TRACK CLICKS (Analytics Ready) ===
  const trackEvent = (category, action, label) => {
    // Google Analytics 4 - adicionar quando configurado
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        'event_category': category,
        'event_label': label
      });
    }

    // Facebook Pixel - adicionar quando configurado
    if (typeof fbq !== 'undefined') {
      fbq('track', action, { category, label });
    }
  };

  // Track CTA clicks
  document.querySelectorAll('a[href="#booking"]').forEach(button => {
    button.addEventListener('click', () => {
      trackEvent('Engagement', 'cta_click', 'Ver Disponibilidade');
    });
  });

  // Track phone clicks
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent('Contact', 'phone_click', link.getAttribute('href'));
    });
  });

  // Track email clicks
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent('Contact', 'email_click', link.getAttribute('href'));
    });
  });

  // === PERFORMANCE OPTIMIZATION ===
  // Preload critical images on idle
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      const criticalImages = [
        'assets/images/suites/image1.webp',
        'assets/images/loft/image1.webp',
        'assets/images/apt/image1.webp'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = src;
        document.head.appendChild(link);
      });
    });
  }

  // === LIGHTBOX GALLERY ===
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const galleryImages = document.querySelectorAll('.galeria-grid img');

  let currentImageIndex = 0;

  function openLightbox(index) {
    currentImageIndex = index;
    const img = galleryImages[currentImageIndex];
    lightboxImage.src = img.src;
    lightboxCaption.textContent = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    const img = galleryImages[currentImageIndex];
    lightboxImage.src = img.src;
    lightboxCaption.textContent = img.alt;
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    const img = galleryImages[currentImageIndex];
    lightboxImage.src = img.src;
    lightboxCaption.textContent = img.alt;
  }

  // Event listeners para galeria
  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', showPrevImage);
  lightboxNext.addEventListener('click', showNextImage);

  // Fechar ao clicar fora da imagem
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Navegação por teclado
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
  });

  console.log('🏠 Residencial Santana - Website carregado com sucesso!');
});
