/* ==========================================================================
   KRUPA ENTERPRISE - GALLERY LOGIC
   Features: Category Filtering, Dynamic Rendering, 3D Cards, Sorting
   ========================================================================== */

let currentCategory = 'all';
let currentSort = 'default';

document.addEventListener('DOMContentLoaded', () => {
  renderGalleryProducts();
  setupFilterTabs();
  setupGallerySearch();
});

function setupFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab-btn');
  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      tabs.forEach((t) => t.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-category');
      renderGalleryProducts();
    });
  });
}

function setupGallerySearch() {
  const searchInput = document.getElementById('gallery-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    renderGalleryProducts();
  });
}

function renderGalleryProducts() {
  const container = document.getElementById('gallery-products-container');
  if (!container || typeof KRUPA_PRODUCTS === 'undefined') return;

  const searchInput = document.getElementById('gallery-search-input');
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  let filtered = KRUPA_PRODUCTS.filter((p) => {
    const matchesCategory =
      currentCategory === 'all' || p.categorySlug === currentCategory;
    const matchesQuery =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <i class="fa-solid fa-box-open" style="font-size: 3.5rem; color: #cbd5e1; margin-bottom: 16px;"></i>
        <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: #374151;">No Products Found</h3>
        <p style="color: #64748b; font-size: 0.95rem; margin-top: 6px;">Try selecting another category or resetting the search filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map((product) => {
      return `
      <div class="product-card">
        <div class="product-image-box" onclick="openQuickView('${product.id}')">
          <span class="badge-tag">${product.badge}</span>
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info-box">
          <div>
            <h4 class="product-title" onclick="openQuickView('${product.id}')">${product.name}</h4>
          </div>
        </div>
      </div>
    `;
    })
    .join('');

  // Re-attach 3D Tilt handler
  init3DTilt();
}
