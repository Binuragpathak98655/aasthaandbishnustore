const products = [
  { id: 1, name: 'Fresh Apples', category: 'Fruits', price: 4.99, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80' },
  { id: 2, name: 'Organic Bananas', category: 'Fruits', price: 2.99, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80' },
  { id: 3, name: 'Fresh Tomatoes', category: 'Vegetables', price: 3.49, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80' },
  { id: 4, name: 'Green Lettuce', category: 'Vegetables', price: 2.49, image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&q=80' },
  { id: 5, name: 'Whole Milk', category: 'Dairy', price: 3.99, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80' },
  { id: 6, name: 'Cheddar Cheese', category: 'Dairy', price: 5.99, image: 'https://images.unsplash.com/photo-1624806992066-5ff7467c1868?w=400&q=80' },
  { id: 7, name: 'Brown Eggs (12)', category: 'Dairy', price: 4.49, image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&q=80' },
  { id: 8, name: 'Whole Wheat Bread', category: 'Bakery', price: 3.29, image: 'https://images.unsplash.com/photo-1549931319-a545753440d7?w=400&q=80' },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = products.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="product-info">
        <h3>${p.name}</h3>
        <p class="category">${p.category}</p>
        <p class="price">$${p.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${p.id}">Add to Cart</button>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id)));
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const itemsEl = document.getElementById('cartItems');
  if (cart.length === 0) {
    itemsEl.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
  } else {
    itemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span>$${item.price.toFixed(2)} x ${item.qty}</span>
        </div>
        <button class="cart-item-remove" data-id="${item.id}"><i class="fas fa-trash"></i></button>
      </div>
    `).join('');

    document.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
    });
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');

cartBtn.addEventListener('click', (e) => {
  e.preventDefault();
  cartModal.classList.add('active');
});

closeCart.addEventListener('click', () => {
  cartModal.classList.remove('active');
});

cartModal.addEventListener('click', (e) => {
  if (e.target === cartModal) cartModal.classList.remove('active');
});

const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('active'));
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
});

renderProducts();
updateCartUI();
