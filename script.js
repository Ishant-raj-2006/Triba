// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mock Data (in a real site, this would come from an API or external JSON)
const products = [
    { id: 1, name: 'Triba Elixir - Gold Edition', price: '$120.00', image: './src/assets/perfume.png', category: 'FRAGRANCE' },
    { id: 2, name: 'Silk Nude Wrap Dress', price: '$240.00', image: './src/assets/fashion.png', category: 'FASHION' },
    { id: 3, name: 'Triba Essence - Silver', price: '$85.00', image: './src/assets/perfume.png', category: 'FRAGRANCE' },
    { id: 4, name: 'Luxury Cotton Scarf', price: '$110.00', image: './src/assets/fashion.png', category: 'FASHION' }
];

// Product Loading Utility
function loadProducts() {
    const productGrid = document.getElementById('featured-products');
    if (!productGrid) return;

    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <label>${product.category}</label>
                <h3>${product.name}</h3>
                <span class="price">${product.price}</span>
            </div>
        </div>
    `).join('');
}

// Mobile Toggle Functionality
function setupMobileMenu() {
    const toggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // In a real project, we'd add an overlay, but for now simple toggle:
    // This is a placeholder since we haven't defined mobile menu structure yet.
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupMobileMenu();
});
