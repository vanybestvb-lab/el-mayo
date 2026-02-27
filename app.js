(function() {
  'use strict';

  // Menu mobile
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('is-open');
    });
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('is-open');
      });
    });
  }

  // Accordion FAQ
  document.querySelectorAll('.accordion-item').forEach(function(item) {
    var trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', function() {
      var isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.accordion-item').forEach(function(i) { i.classList.remove('is-open'); });
      if (!isOpen) item.classList.add('is-open');
      trigger.setAttribute('aria-expanded', !isOpen);
    });
  });

  // Cart count in header (all pages)
  var cartCountEl = document.getElementById('header-cart-count');
  if (cartCountEl) {
    function updateCartCount() {
      try {
        var cart = JSON.parse(localStorage.getItem('ela-mayo-cart') || '[]');
        var n = cart.reduce(function(a, x) { return a + (x.quantity || 0); }, 0);
        cartCountEl.textContent = n > 99 ? '99+' : n;
        cartCountEl.style.display = n > 0 ? 'inline-flex' : 'none';
      } catch (e) {
        cartCountEl.style.display = 'none';
      }
    }
    updateCartCount();
    window.addEventListener('storage', updateCartCount);
  }

  // Add to cart buttons (product pages)
  document.querySelectorAll('.add-to-cart-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var id = btn.dataset.id;
      var slug = btn.dataset.slug;
      var name = btn.dataset.name;
      var price = parseFloat(btn.dataset.price);
      var image = btn.dataset.image || '';
      var key = 'ela-mayo-cart';
      var cart = [];
      try { cart = JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) {}
      var i = cart.findIndex(function(x) { return x.productId === id; });
      if (i >= 0) cart[i].quantity++;
      else cart.push({ productId: id, slug: slug, name: name, price: price, currency: 'EUR', image: image, quantity: 1 });
      localStorage.setItem(key, JSON.stringify(cart));
      var countEl = document.getElementById('header-cart-count');
      if (countEl) {
        var n = cart.reduce(function(a, x) { return a + x.quantity; }, 0);
        countEl.textContent = n > 99 ? '99+' : n;
        countEl.style.display = 'inline-flex';
      }
      if (typeof alert !== 'undefined') alert('Ajouté au panier : ' + name);
    });
  });
})();
