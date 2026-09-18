/* ==========================================================================
   KRUPA ENTERPRISE - MAIN JAVASCRIPT
   Features: Glassmorphism Lighting, 3D Tilt, Cart & Wishlist, Live Search, Modals
   ========================================================================== */

// Clean URL handler: removes .html extension from browser URL if present
(function handleCleanUrls() {
  if (window.location.pathname.endsWith('.html')) {
    let cleanPath = window.location.pathname.replace(/\.html$/, '');
    if (cleanPath === '/index') {
      cleanPath = '/';
    }
    const newUrl = cleanPath + window.location.search + window.location.hash;
    window.history.replaceState(null, '', newUrl);
  }
})();

// --- Global State Management ---
let cart = JSON.parse(localStorage.getItem('krupa_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('krupa_wishlist')) || [];

document.addEventListener('DOMContentLoaded', () => {
  initCursorSpotlight();
  init3DTilt();
  initHeaderScroll();
  initSearchAutocomplete();
  initCartAndWishlist();
  initBackToTop();
  initVideoModal();
  init3DCoverflow();
  updateHeaderBadges();
  highlightActiveNav();
  initMobileMenu();
});

/* ==========================================================================
   1. DYNAMIC CURSOR SPOTLIGHT & LIGHTING EFFECT
   ========================================================================== */
function initCursorSpotlight() {
  // Disable spotlight on touch devices and small viewports to prevent layout overflow and lag
  if (window.innerWidth < 992 || ('ontouchstart' in window) || navigator.maxTouchPoints > 0) {
    return;
  }

  const spotlight = document.createElement('div');
  spotlight.className = 'cursor-spotlight';
  document.body.appendChild(spotlight);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderLight() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    spotlight.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(renderLight);
  }
  renderLight();
}

/* ==========================================================================
   2. 3D CARD TILT EFFECT (Vanilla Math Perspective)
   ========================================================================== */
function init3DTilt() {
  const tiltElements = document.querySelectorAll(
    '.product-card, .category-card, .why-card, .value-card, .hero-main-card'
  );

  tiltElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      el.style.transition = 'transform 0.4s ease';
    });

    el.addEventListener('mouseenter', () => {
      el.style.transition = 'transform 0.08s ease-out';
    });
  });
}

/* ==========================================================================
   3. HEADER SCROLL & NAVIGATION
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function highlightActiveNav() {
  const rawPath = window.location.pathname.toLowerCase().replace(/\.html$/, '').replace(/\/$/, '') || '/';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    const rawHref = (link.getAttribute('href') || '').toLowerCase().replace(/\.html$/, '').replace(/\/$/, '') || '/';
    if (rawHref === '/' || rawHref === 'index' || rawHref === '') {
      if (rawPath === '/' || rawPath === '/index' || rawPath.endsWith('index')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    } else if (rawPath.endsWith(rawHref) || rawPath.includes(rawHref) || rawHref.includes(rawPath)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ==========================================================================
   4. LIVE SEARCH AUTOCOMPLETE
   ========================================================================== */
function initSearchAutocomplete() {
  const searchInput = document.getElementById('global-search-input');
  const searchDropdown = document.getElementById('search-dropdown');
  if (!searchInput || !searchDropdown) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length < 2) {
      searchDropdown.classList.remove('show');
      searchDropdown.innerHTML = '';
      return;
    }

    if (typeof KRUPA_PRODUCTS === 'undefined') return;

    const matches = KRUPA_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      searchDropdown.innerHTML = `
        <div style="padding: 16px; text-align: center; color: #64748b; font-size: 0.9rem;">
          No kitchen products found for "<strong>${query}</strong>"
        </div>
      `;
    } else {
      searchDropdown.innerHTML = matches
        .slice(0, 5)
        .map(
          (p) => `
        <div class="search-result-item" onclick="openQuickView('${p.id}')">
          <img src="${p.image}" alt="${p.name}">
          <div class="search-result-info">
            <h5>${p.name}</h5>
          </div>
        </div>
      `
        )
        .join('');
    }
    searchDropdown.classList.add('show');
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      searchDropdown.classList.remove('show');
    }
  });
}

/* ==========================================================================
   5. CART & WISHLIST SYSTEM
   ========================================================================== */
function initCartAndWishlist() {
  renderCart();
  setupCartDrawer();
}

function updateHeaderBadges() {
  const cartBadge = document.getElementById('header-cart-count');
  const wishlistBadge = document.getElementById('header-wishlist-count');

  if (cartBadge) {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    cartBadge.textContent = totalQty;
    cartBadge.style.display = totalQty > 0 ? 'flex' : 'none';
  }

  if (wishlistBadge) {
    wishlistBadge.textContent = wishlist.length;
    wishlistBadge.style.display = wishlist.length > 0 ? 'flex' : 'none';
  }

  // Update heart active states across rendered cards
  document.querySelectorAll('.favorite-toggle-btn').forEach((btn) => {
    const pid = btn.getAttribute('data-product-id');
    if (wishlist.includes(pid)) {
      btn.classList.add('active');
      btn.innerHTML = '<i class="fa-solid fa-heart" style="color: #d90429;"></i>';
    } else {
      btn.classList.remove('active');
      btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    }
  });
}

function addToCart(productId, qty = 1) {
  if (typeof KRUPA_PRODUCTS === 'undefined') return;
  const product = KRUPA_PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: qty
    });
  }

  localStorage.setItem('krupa_cart', JSON.stringify(cart));
  renderCart();
  updateHeaderBadges();
  showToast(`Added "${product.name}" to cart! 🛒`, 'success');
  openCartDrawer();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem('krupa_cart', JSON.stringify(cart));
  renderCart();
  updateHeaderBadges();
  showToast('Item removed from cart', 'info');
}

function updateQuantity(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }

  localStorage.setItem('krupa_cart', JSON.stringify(cart));
  renderCart();
  updateHeaderBadges();
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-price');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: #94a3b8;">
        <i class="fa-solid fa-cart-shopping" style="font-size: 3rem; margin-bottom: 14px; color: #cbd5e1;"></i>
        <h4 style="font-family: var(--font-heading); color: #374151; margin-bottom: 6px;">Your cart is empty</h4>
        <p style="font-size: 0.88rem;">Explore our premium kitchenware and add items!</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '';
    return;
  }

  container.innerHTML = cart
    .map((item) => {
      return `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h5>${item.name}</h5>
          <div class="qty-counter-wrap">
            <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
            <span style="font-weight: 700; font-size: 0.9rem; min-width: 20px; text-align: center;">${item.qty}</span>
            <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
          </div>
        </div>
        <button class="remove-cart-item-btn" onclick="removeFromCart('${item.id}')" title="Remove">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    `;
    })
    .join('');

  if (subtotalEl) subtotalEl.textContent = '';
}

function setupCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  const openBtns = document.querySelectorAll('.open-cart-trigger');
  const closeBtn = document.getElementById('close-cart-btn');

  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeCartDrawer);
  }

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeCartDrawer();
    });
  }
}

function openCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.add('open');
}

function closeCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.remove('open');
}

function toggleWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast('Removed from favorites ♡', 'info');
  } else {
    wishlist.push(productId);
    showToast('Saved to favorites ❤️', 'success');
  }

  localStorage.setItem('krupa_wishlist', JSON.stringify(wishlist));
  updateHeaderBadges();
}

/* ==========================================================================
   6. QUICK VIEW PRODUCT MODAL (Amazon / Flipkart Style Gallery & Zoom)
   ========================================================================== */
function switchModalImage(thumbEl, newSrc) {
  document.querySelectorAll('.gallery-thumbnails .thumb-item').forEach((t) => t.classList.remove('active'));
  thumbEl.classList.add('active');
  const mainImg = document.getElementById('modal-main-image');
  if (mainImg) {
    mainImg.src = newSrc;
  }
}

function handleModalImageZoom(e) {
  if (window.innerWidth < 768 || ('ontouchstart' in window) || navigator.maxTouchPoints > 0) return;
  const container = document.getElementById('modal-zoom-container');
  const img = document.getElementById('modal-main-image');
  if (!container || !img) return;

  const rect = container.getBoundingClientRect();
  const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
  const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));

  img.style.transformOrigin = `${x}% ${y}%`;
  img.style.transform = 'scale(1.8)';
}

function resetModalImageZoom() {
  const img = document.getElementById('modal-main-image');
  if (img) {
    img.style.transformOrigin = 'center center';
    img.style.transform = 'scale(1)';
  }
}

function openQuickView(productId) {
  if (typeof KRUPA_PRODUCTS === 'undefined') return;
  const p = KRUPA_PRODUCTS.find((item) => item.id === productId);
  if (!p) return;

  let modal = document.getElementById('quick-view-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quick-view-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  const rawImages = (p.galleryImages && p.galleryImages.length > 0) ? p.galleryImages : [p.image];
  const galleryList = rawImages.slice(0, 4);

  modal.innerHTML = `
    <div class="modal-content ecommerce-product-modal" id="ecommerce-product-modal-content">
      <!-- Sticky Top-Right Back Button: Always visible even when scrolling down -->
      <div class="modal-sticky-nav-bar">
        <button class="modal-sticky-back-btn" onclick="closeQuickView()" aria-label="Back" title="Back / Close">
          <i class="fa-solid fa-arrow-left"></i>
          <span>Back</span>
        </button>
      </div>

      <div class="ecommerce-modal-grid">
        <div class="product-gallery-section">
          <!-- Main Product Image (Full view without cutting) -->
          <div class="main-zoom-container" id="modal-zoom-container" onmousemove="handleModalImageZoom(event)" onmouseleave="resetModalImageZoom()">
            <img src="${galleryList[0]}" alt="${p.name}" id="modal-main-image" class="zoom-target-img">
            <div class="zoom-lens-hint"><i class="fa-solid fa-magnifying-glass-plus"></i> Hover to Zoom</div>
          </div>

          <!-- 4 Thumbnails Row - Perfectly aligned without scrollbar -->
          <div class="thumbnails-container-wrapper">
            <div class="gallery-thumbnails" id="modal-gallery-thumbnails">
              ${galleryList
                .map(
                  (imgSrc, idx) => `
                <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="switchModalImage(this, '${imgSrc}')" onmouseover="switchModalImage(this, '${imgSrc}')">
                  <img src="${imgSrc}" alt="${p.name} view ${idx + 1}">
                </div>
              `
                )
                .join('')}
            </div>
          </div>
        </div>

        <div class="product-detail-section">
          <div>
            <div class="product-badge-wrap">
              <span class="badge-tag">${p.badge}</span>
              <span class="category-tag">${p.category}</span>
            </div>
            <h2 class="modal-product-title">${p.name}</h2>
            <p class="modal-product-desc">${p.description}</p>
            <div class="features-header">Key Highlights:</div>
            <ul class="features-list">
              ${p.features
                .map(
                  (f) =>
                    `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`
                )
                .join('')}
            </ul>
          </div>

          <div class="modal-bottom-actions">
            <button class="btn-modal-back-action" onclick="closeQuickView()">
              <i class="fa-solid fa-arrow-left"></i> Back to Gallery
            </button>
            <a href="https://wa.me/918200856380?text=Hello%20Krupa%20Enterprise%2C%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}" target="_blank" rel="noopener noreferrer" class="btn-modal-wa-action">
              <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeQuickView();
  });
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) modal.classList.remove('open');
}

/* ==========================================================================
   7. TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}" style="color: var(--color-primary);"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

/* ==========================================================================
   8. BACK TO TOP & VIDEO MODAL
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initVideoModal() {
  const watchBtn = document.getElementById('watch-video-btn');
  if (!watchBtn) return;

  watchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let modal = document.getElementById('video-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'video-modal';
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px; background: #000; padding: 10px; border-radius: 18px;">
          <button class="modal-close-btn" style="color: #fff; background: rgba(255,255,255,0.2);" onclick="document.getElementById('video-modal').classList.remove('open')">&times;</button>
          <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
            <iframe style="position: absolute; top:0; left: 0; width: 100%; height: 100%; border: none;" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
      });
    }
    modal.classList.add('open');
  });
}

// Global Checkout Simulator
function handleCheckout() {
  if (cart.length === 0) {
    showToast('Your cart is empty!', 'info');
    return;
  }
  showToast('Order placed successfully! Thank you for choosing Krupa Enterprise.', 'success');
  cart = [];
  localStorage.setItem('krupa_cart', JSON.stringify(cart));
  renderCart();
  updateHeaderBadges();
  closeCartDrawer();
}

/* ==========================================================================
   9. 3D COVERFLOW PERSPECTIVE CAROUSEL
   ========================================================================== */
function init3DCoverflow() {
  const stage = document.getElementById('coverflow-stage');
  if (!stage) return;

  const cards = Array.from(stage.querySelectorAll('.coverflow-card'));
  const prevBtn = document.getElementById('coverflow-prev-btn');
  const nextBtn = document.getElementById('coverflow-next-btn');

  if (!cards.length) return;

  let activeIndex = Math.floor(cards.length / 2); // Start with middle card active
  let autoPlayTimer = null;

  function updateCoverflow() {
    const total = cards.length;
    const stageWidth = stage.clientWidth || window.innerWidth;
    const isMobile = stageWidth < 600;
    const isTablet = stageWidth >= 600 && stageWidth < 992;

    // Responsive step calculation to keep cards strictly inside viewport
    let step1 = 200;
    let step2 = 350;
    let zCenter = 160;
    let scaleCenter = 1.15;
    let scaleSide = 0.9;

    if (isMobile) {
      step1 = Math.min(125, Math.floor(stageWidth * 0.26));
      step2 = Math.min(210, Math.floor(stageWidth * 0.44));
      zCenter = 70;
      scaleCenter = 1.05;
      scaleSide = 0.82;
    } else if (isTablet) {
      step1 = 160;
      step2 = 280;
      zCenter = 110;
      scaleCenter = 1.1;
      scaleSide = 0.86;
    }

    cards.forEach((card, i) => {
      let offset = i - activeIndex;

      // Infinite Circular Wrap Offset [-total/2, total/2]
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      if (offset === 0) {
        // Active Center Card
        card.style.transform = `translate3d(0, 0, ${zCenter}px) rotateY(0deg) scale(${scaleCenter})`;
        card.style.opacity = '1';
        card.style.zIndex = '20';
        card.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.35)';
        card.style.pointerEvents = 'auto';
        card.classList.add('active');
      } else if (offset === -1) {
        // Immediate Left
        card.style.transform = `translate3d(-${step1}px, 0, 0px) rotateY(${isMobile ? 22 : 32}deg) scale(${scaleSide})`;
        card.style.opacity = isMobile ? '0.75' : '0.85';
        card.style.zIndex = '15';
        card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
        card.style.pointerEvents = 'auto';
        card.classList.remove('active');
      } else if (offset === 1) {
        // Immediate Right
        card.style.transform = `translate3d(${step1}px, 0, 0px) rotateY(-${isMobile ? 22 : 32}deg) scale(${scaleSide})`;
        card.style.opacity = isMobile ? '0.75' : '0.85';
        card.style.zIndex = '15';
        card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
        card.style.pointerEvents = 'auto';
        card.classList.remove('active');
      } else if (offset === -2) {
        // Far Left
        if (isMobile) {
          card.style.transform = `translate3d(-${step2}px, 0, -80px) rotateY(35deg) scale(0.65)`;
          card.style.opacity = '0';
          card.style.pointerEvents = 'none';
        } else {
          card.style.transform = `translate3d(-${step2}px, 0, -120px) rotateY(45deg) scale(0.75)`;
          card.style.opacity = '0.6';
          card.style.pointerEvents = 'auto';
        }
        card.style.zIndex = '10';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        card.classList.remove('active');
      } else if (offset === 2) {
        // Far Right
        if (isMobile) {
          card.style.transform = `translate3d(${step2}px, 0, -80px) rotateY(-35deg) scale(0.65)`;
          card.style.opacity = '0';
          card.style.pointerEvents = 'none';
        } else {
          card.style.transform = `translate3d(${step2}px, 0, -120px) rotateY(-45deg) scale(0.75)`;
          card.style.opacity = '0.6';
          card.style.pointerEvents = 'auto';
        }
        card.style.zIndex = '10';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        card.classList.remove('active');
      } else if (offset < -2) {
        // Out of view Left
        const hiddenX = -step2 - (Math.abs(offset) - 2) * 50;
        card.style.transform = `translate3d(${hiddenX}px, 0, -180px) rotateY(45deg) scale(0.5)`;
        card.style.opacity = '0';
        card.style.zIndex = '1';
        card.style.pointerEvents = 'none';
        card.classList.remove('active');
      } else {
        // Out of view Right
        const hiddenX = step2 + (offset - 2) * 50;
        card.style.transform = `translate3d(${hiddenX}px, 0, -180px) rotateY(-45deg) scale(0.5)`;
        card.style.opacity = '0';
        card.style.zIndex = '1';
        card.style.pointerEvents = 'none';
        card.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    activeIndex = (activeIndex + 1) % cards.length;
    updateCoverflow();
  }

  function prevSlide() {
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    updateCoverflow();
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoPlay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoPlay(); });

  // Touch Swipe Support for Mobile
  let touchStartX = 0;
  let touchEndX = 0;
  stage.addEventListener('touchstart', (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      touchStartX = e.changedTouches[0].clientX;
    }
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      touchEndX = e.changedTouches[0].clientX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        resetAutoPlay();
      }
    }
  }, { passive: true });

  cards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      if (idx !== activeIndex) {
        activeIndex = idx;
        updateCoverflow();
        resetAutoPlay();
      } else {
        const filter = card.getAttribute('data-filter');
        if (filter) {
          window.location.href = `gallery?category=${filter}`;
        }
      }
    });
  });

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(prevSlide, 3200);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
  }

  function resetAutoPlay() {
    startAutoPlay();
  }

  const wrapper = document.querySelector('.coverflow-carousel-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', stopAutoPlay);
    wrapper.addEventListener('mouseleave', startAutoPlay);
  }

  window.addEventListener('resize', () => {
    updateCoverflow();
  });

  updateCoverflow();
  startAutoPlay();
}

/* ==========================================================================
   MOBILE NAVIGATION DRAWER & SEARCH LOGIC
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  if (!menuBtn) return;

  // Create mobile nav drawer if it doesn't exist
  let drawer = document.getElementById('mobile-nav-drawer');
  if (!drawer) {
    drawer = document.createElement('div');
    drawer.id = 'mobile-nav-drawer';
    drawer.className = 'mobile-nav-drawer';
    drawer.innerHTML = `
      <div class="mobile-nav-overlay" id="mobile-nav-overlay"></div>
      <div class="mobile-nav-content">
        <div class="mobile-nav-header">
          <a href="/" class="brand-logo">
            <img src="assets/images/logo.png" alt="KRUPA ENTERPRISE" style="height: 42px; object-fit: contain;">
          </a>
          <button class="close-mobile-nav-btn" id="close-mobile-nav-btn" aria-label="Close Menu">&times;</button>
        </div>
        <div class="mobile-search-box">
          <input type="text" id="mobile-search-input" placeholder="Search kitchen products..." autocomplete="off">
          <i class="fa-solid fa-magnifying-glass"></i>
          <div id="mobile-search-dropdown" class="search-dropdown"></div>
        </div>
        <nav class="mobile-nav-links">
          <a href="/" class="mobile-nav-link"><i class="fa-solid fa-house"></i> Home</a>
          <a href="gallery" class="mobile-nav-link"><i class="fa-solid fa-boxes-stacked"></i> Gallery</a>
          <a href="about" class="mobile-nav-link"><i class="fa-solid fa-circle-info"></i> About</a>
          <a href="contact" class="mobile-nav-link"><i class="fa-solid fa-address-book"></i> Contact</a>
        </nav>
        <div class="mobile-nav-footer">
          <a href="https://wa.me/918200856380?text=Hello%20Krupa%20Enterprise%2C%20I%20am%20interested%20in%20your%20kitchenware%20products." target="_blank" rel="noopener noreferrer" class="mobile-drawer-whatsapp-btn">
            <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(drawer);
  }

  const closeBtn = document.getElementById('close-mobile-nav-btn');
  const overlay = document.getElementById('mobile-nav-overlay');

  function openDrawer() {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    highlightActiveMobileNav();
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openDrawer();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  // Setup mobile search input autocomplete
  const mobileSearchInput = document.getElementById('mobile-search-input');
  const mobileSearchDropdown = document.getElementById('mobile-search-dropdown');
  if (mobileSearchInput && mobileSearchDropdown) {
    mobileSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (query.length < 2) {
        mobileSearchDropdown.classList.remove('show');
        mobileSearchDropdown.innerHTML = '';
        return;
      }
      if (typeof KRUPA_PRODUCTS === 'undefined') return;
      const matches = KRUPA_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
      if (matches.length === 0) {
        mobileSearchDropdown.innerHTML = `<div style="padding: 14px; text-align: center; color: #64748b; font-size: 0.85rem;">No products found for "<strong>${query}</strong>"</div>`;
      } else {
        mobileSearchDropdown.innerHTML = matches
          .slice(0, 5)
          .map(
            (p) => `
          <div class="search-result-item" onclick="closeDrawer(); openQuickView('${p.id}')">
            <img src="${p.image}" alt="${p.name}">
            <div class="search-result-info">
              <h5>${p.name}</h5>
            </div>
          </div>
        `
          )
          .join('');
      }
      mobileSearchDropdown.classList.add('show');
    });
  }
}

function highlightActiveMobileNav() {
  const rawPath = window.location.pathname.toLowerCase().replace(/\.html$/, '').replace(/\/$/, '') || '/';
  const navLinks = document.querySelectorAll('.mobile-nav-link');
  navLinks.forEach((link) => {
    const rawHref = (link.getAttribute('href') || '').toLowerCase().replace(/\.html$/, '').replace(/\/$/, '') || '/';
    if (rawHref === '/' || rawHref === 'index' || rawHref === '') {
      if (rawPath === '/' || rawPath === '/index' || rawPath.endsWith('index')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    } else if (rawPath.endsWith(rawHref) || rawPath.includes(rawHref) || rawHref.includes(rawPath)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
