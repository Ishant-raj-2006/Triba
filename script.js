// --- GLOBAL STATE ---
let cart = JSON.parse(localStorage.getItem('triba_cart')) || [];

const products = [
    { id: 1, name: 'Triba Elixir - Gold', price: 120, image: './src/assets/perfume.png', category: 'FRAGRANCE', desc: 'Premium long-lasting scent.' },
    { id: 2, name: 'Silk Nude Wrap Dress', price: 240, image: './src/assets/fashion.png', category: 'FASHION', desc: 'Elegant silk wrap dress.' },
    { id: 3, name: 'Floral Essence', price: 95, image: './src/assets/perfume.png', category: 'FRAGRANCE', desc: 'Spring inspired floral notes.' },
    { id: 4, name: 'Classic Linen Blazer', price: 180, image: './src/assets/fashion.png', category: 'FASHION', desc: 'Timeless tailored blazer.' },
    { id: 5, name: 'Midnight Oud', price: 150, image: './src/assets/perfume.png', category: 'FRAGRANCE', desc: 'Deep, woody evening scent.' },
    { id: 6, name: 'Velvet Evening Gown', price: 320, image: './src/assets/fashion.png', category: 'FASHION', desc: 'Luxurious velvet for special nights.' }
];

// --- CORE FUNCTIONS ---

// Update Cart Count UI
function updateCartCount() {
    const counts = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    counts.forEach(el => el.textContent = totalItems);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('triba_cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`${product.name} added to bag!`);
}

// Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification fade-in-up';
    toast.style.cssText = `
        position: fixed; bottom: 30px; right: 30px; 
        background: var(--text-primary); color: white;
        padding: 1rem 2rem; border-radius: 8px; z-index: 9999;
        box-shadow: var(--shadow-lg); font-weight: 600;
        font-size: 0.9rem;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Load Products on Home/Shop
function loadProducts(containerId, categoryFilter = 'ALL') {
    const container = document.getElementById(containerId);
    if (!container) return;

    let filtered = products;
    if (categoryFilter !== 'ALL') {
        filtered = products.filter(p => p.category === categoryFilter);
    }

    container.innerHTML = filtered.map(product => `
        <div class="product-card">
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}">
                <button class="add-to-cart-overlay" onclick="addToCart(${product.id})">
                    <i data-lucide="plus"></i> ADD TO BAG
                </button>
            </div>
            <div class="product-info">
                <label>${product.category}</label>
                <h3>${product.name}</h3>
                <span class="price">$${product.price.toFixed(2)}</span>
            </div>
        </div>
    `).join('');
    
    if (window.lucide) lucide.createIcons();
}

// --- PAGE SPECIFIC LOGIC ---

// Cart Page Logic
function loadCartPage() {
    const cartContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p style="text-align:center; padding: 4rem;">Your bag is empty. <a href="services.html" style="color:var(--accent-gold)">Shop now</a></p>';
        if (totalEl) totalEl.textContent = '$0.00';
        return;
    }

    let total = 0;
    cartContainer.innerHTML = cart.map(item => {
        total += item.price * item.quantity;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>${item.category}</p>
                    <span class="item-price">$${item.price} x ${item.quantity}</span>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})"><i data-lucide="trash-2"></i></button>
            </div>
        `;
    }).join('');
    
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
    if (window.lucide) lucide.createIcons();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('triba_cart', JSON.stringify(cart));
    updateCartCount();
    loadCartPage();
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Shared
    updateCartCount();
    
    // Navbar Scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else if (!document.body.classList.contains('mobile-nav-open')) nav.classList.remove('scrolled');
    });

    // Page Specific Loads
    loadProducts('featured-products'); // For index.html
    loadProducts('shop-products');      // For services.html
    loadCartPage();                    // For cart.html

    // Mobile Menu
    const mobileBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('desktop'); // Re-using desktop class toggle for simplicity
            document.body.classList.toggle('mobile-nav-open');
        });
    }
});
