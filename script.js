(function() {
  // Mobile menu toggle
  const toggle = document.getElementById('mobileToggle');
  const closeBtn = document.getElementById('closeNav');
  const nav = document.getElementById('nav');
  const overlay = document.getElementById('overlay');
  const body = document.body;

  function closeMenu() {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    const icon = toggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }

  if (toggle && nav && overlay) {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      nav.classList.toggle('active');
      overlay.classList.toggle('active');
      const icon = toggle.querySelector('i');
      if (nav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeMenu();
      });
    }

    overlay.addEventListener('click', function() {
      closeMenu();
    });

    nav.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  // Accordion for Training Courses submenu (mobile only)
  const hasSubmenu = document.querySelectorAll('.has-submenu');
  hasSubmenu.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', function(e) {
      if (nav && nav.classList.contains('active')) {
        e.preventDefault();
        item.classList.toggle('open');
      }
    });
  });

  // Testimonial carousel
  const track = document.getElementById('testimonialTrack');
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');

  if (track && prev && next) {
    const cards = track.children;
    const total = cards.length;
    let currentIndex = 0;

    function updateCarousel() {
      if (!cards.length) return;
      const cardWidth = cards[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    next.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % total;
      updateCarousel();
    });

    prev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + total) % total;
      updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
  }
})();
