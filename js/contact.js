/* ==========================================================================
   KRUPA ENTERPRISE - CONTACT PAGE LOGIC
   Features: Interactive FAQ Accordion, Form Validation, Interactive Leaflet Map
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initContactForm();
  initRajkotMap();
});

/* ==========================================================================
   1. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const header = item.querySelector('.faq-header');
    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close other FAQs
      faqItems.forEach((other) => {
        other.classList.remove('open');
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/* ==========================================================================
   2. CONTACT FORM SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-us-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!name || !email || !message) {
      showToast('Please fill out all required fields!', 'info');
      return;
    }

    // Animate button
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
      submitBtn.style.background = '#16a34a';

      showToast(`Thank you, ${name}! We have received your message.`, 'success');
      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 3000);
    }, 1200);
  });
}

/* ==========================================================================
   3. RAJKOT LEAFLET INTERACTIVE MAP
   ========================================================================== */
function initRajkotMap() {
  const mapContainer = document.getElementById('rajkot-map');
  if (!mapContainer || typeof L === 'undefined') return;

  // Rajkot coordinates (Gondal Road area)
  const rajkotCoords = [22.2850, 70.7980];

  const map = L.map('rajkot-map', {
    scrollWheelZoom: false
  }).setView(rajkotCoords, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Custom Red Brand Marker
  const customIcon = L.divIcon({
    className: 'custom-map-pin',
    html: `
      <div style="background: #d90429; color: #fff; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(217,4,41,0.5); border: 2px solid #fff; font-size: 16px;">
        <i class="fa-solid fa-location-dot"></i>
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 34]
  });

  const marker = L.marker(rajkotCoords, { icon: customIcon }).addTo(map);

  marker.bindPopup(`
    <div style="font-family: 'Outfit', sans-serif; padding: 4px;">
      <h4 style="color: #d90429; font-weight: 800; font-size: 1rem; margin-bottom: 4px;">Krupa Enterprise</h4>
      <p style="font-size: 0.8rem; color: #4b5563; margin-bottom: 6px;">Vadi Wadi, Gondal Road, Rajkot - 360305</p>
      <span style="font-size: 0.75rem; background: #fee2e2; color: #b91c1c; padding: 2px 6px; border-radius: 4px; font-weight: 600;">Headquarters & Showroom</span>
    </div>
  `).openPopup();
}
