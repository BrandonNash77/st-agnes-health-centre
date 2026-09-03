// scripts.js - St. Agnes Health Centre
document.addEventListener('DOMContentLoaded', function () {

  // ========== SCROLL REVEAL ANIMATIONS ==========
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }
  initScrollReveal();

  // ========== NAVBAR HIDE ON SCROLL ==========
  (function () {
    const nav = document.getElementById('mainNavbar');
    if (!nav) return;

    let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
    let ticking = false;

    window.addEventListener('scroll', () => {
      const current = window.pageYOffset || document.documentElement.scrollTop;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (current > lastScroll && current > 100) {
            nav.classList.add('navbar-hidden');
          } else {
            nav.classList.remove('navbar-hidden');
          }
          nav.classList.toggle('navbar-scrolled', current > 24);
          lastScroll = current <= 0 ? 0 : current;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  })();

  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href.startsWith('#') === false) return;
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('mainNavbar')?.offsetHeight || 72;
        const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ========== SIDEBAR MOBILE MENU ==========
  function openSidebarMenu() {
    document.body.classList.add('sidebar-open');
    const sidebar = document.getElementById('sidebarMenu');
    const overlay = document.getElementById('sidebarMenuOverlay');
    if (sidebar) sidebar.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // trap focus
    const focusable = sidebar.querySelectorAll('a, button, input, [tabindex]:not([tabindex="-1"])');
    if (focusable.length) focusable[0].focus();

    function handleKey(e) {
      if (e.key === 'Escape') closeSidebarMenu();
    }
    sidebar.__keyHandler = handleKey;
    document.addEventListener('keydown', handleKey);
  }

  function closeSidebarMenu() {
    document.body.classList.remove('sidebar-open');
    const sidebar = document.getElementById('sidebarMenu');
    const overlay = document.getElementById('sidebarMenuOverlay');
    if (sidebar) {
      sidebar.classList.remove('active');
      if (sidebar.__keyHandler) {
        document.removeEventListener('keydown', sidebar.__keyHandler);
        delete sidebar.__keyHandler;
      }
    }
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Sidebar close button
  const closeBtn = document.getElementById('sidebarMenuClose');
  if (closeBtn) closeBtn.addEventListener('click', closeSidebarMenu);

  // Overlay click closes sidebar
  const overlay = document.getElementById('sidebarMenuOverlay');
  if (overlay) overlay.addEventListener('click', closeSidebarMenu);

  // Sidebar links: close menu then navigate
  document.querySelectorAll('#sidebarMenu a').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href') || '';
      if (href.startsWith('tel:') || href.startsWith('mailto:')) {
        closeSidebarMenu();
        return;
      }
      e.preventDefault();
      closeSidebarMenu();
      setTimeout(() => {
        if (href.startsWith('#')) {
          const id = href.slice(1);
          if (id) {
            const target = document.getElementById(id);
            if (target) {
              const navHeight = document.getElementById('mainNavbar')?.offsetHeight || 72;
              const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
              window.scrollTo({ top, behavior: 'smooth' });
              return;
            }
          }
          location.hash = href;
        } else if (href) {
          window.location.href = href;
        }
      }, 300);
    });
  });

  // Navbar hamburger toggles sidebar
  const navbarHamburger = document.getElementById('navbarHamburgerBtn');
  if (navbarHamburger) {
    navbarHamburger.setAttribute('aria-controls', 'sidebarMenu');
    navbarHamburger.setAttribute('aria-expanded', 'false');
    navbarHamburger.addEventListener('click', function (e) {
      e.preventDefault();
      const expanded = this.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeSidebarMenu();
        this.setAttribute('aria-expanded', 'false');
      } else {
        openSidebarMenu();
        this.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // Sync ARIA state when sidebar closes
  if (overlay) overlay.addEventListener('click', () => {
    if (navbarHamburger) navbarHamburger.setAttribute('aria-expanded', 'false');
  });
  if (closeBtn) closeBtn.addEventListener('click', () => {
    if (navbarHamburger) navbarHamburger.setAttribute('aria-expanded', 'false');
  });

  // Close sidebar on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991) closeSidebarMenu();
  });

  // ========== SEARCH MODAL ==========
  const searchBtn = document.getElementById('search-button');
  const modalSearchInput = document.getElementById('modal-site-search');
  const modalSearchForm = document.getElementById('modal-search-form');
  let searchModal;

  if (searchBtn) {
    const modalEl = document.getElementById('searchModal');
    if (modalEl && typeof bootstrap !== 'undefined') {
      searchModal = new bootstrap.Modal(modalEl);
      searchBtn.addEventListener('click', () => {
        searchModal.show();
        setTimeout(() => { if (modalSearchInput) modalSearchInput.focus(); }, 200);
      });
    }
  }

  if (modalSearchForm) {
    modalSearchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const q = (modalSearchInput && modalSearchInput.value) ? modalSearchInput.value.trim() : '';
      if (!q) {
        if (modalSearchInput) modalSearchInput.focus();
        return;
      }
      if (searchModal) searchModal.hide();
      const params = new URLSearchParams({ q });
      window.location.href = `services.html?${params.toString()}`;
    });
  }

  // ========== FOOTER NEWSLETTER ==========
  const footerForm = document.getElementById('footer-newsletter-form');
  const footerEmail = document.getElementById('footer-newsletter-email');
  const footerMsg = document.getElementById('footer-newsletter-message');
  if (footerForm && footerEmail) {
    footerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = (footerEmail.value || '').trim();
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const lang = localStorage.getItem('lang') || 'en';
      if (!emailRe.test(email)) {
        if (footerMsg) footerMsg.textContent = (translations[lang] && translations[lang]['newsletter.invalid']) || 'Invalid email';
        return;
      }
      const subs = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
      if (!subs.includes(email)) subs.push(email);
      localStorage.setItem('newsletterSubscribers', JSON.stringify(subs));
      if (footerMsg) footerMsg.textContent = (translations[lang] && translations[lang]['newsletter.success']) || 'Subscribed';
      footerEmail.value = '';
      setTimeout(() => { if (footerMsg) footerMsg.textContent = ''; }, 4000);
    });
  }

  // ========== PASSWORD TOGGLES ==========
  function installPasswordToggles(scope) {
    scope = scope || document;
    scope.querySelectorAll('input[type="password"]').forEach(input => {
      if (input.__hasToggle) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn btn-sm btn-outline-secondary ms-2 pw-visibility-toggle';
      btn.style.verticalAlign = 'middle';
      btn.textContent = 'Show';
      btn.addEventListener('click', () => {
        if (input.type === 'password') {
          input.type = 'text';
          btn.textContent = 'Hide';
        } else {
          input.type = 'password';
          btn.textContent = 'Show';
        }
        input.focus();
      });
      if (input.parentNode) input.parentNode.appendChild(btn);
      input.__hasToggle = true;
    });
  }
  installPasswordToggles(document);

  // ========== ACTIVE NAV LINK HIGHLIGHT ==========
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');

  function highlightNavOnScroll() {
    const scrollPos = window.pageYOffset + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // ========== WHY CHOOSE US ACCORDION ==========
  document.querySelectorAll('.why-accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', function () {
      const item = this.closest('.why-accordion-item');
      const content = item.querySelector('.why-accordion-content');
      const isActive = item.classList.contains('active');

      // Close all other items
      document.querySelectorAll('.why-accordion-item.active').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.why-accordion-trigger').setAttribute('aria-expanded', 'false');
          other.querySelector('.why-accordion-content').style.maxHeight = '0';
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        this.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = '0';
      } else {
        item.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
