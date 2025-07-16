// Function to create a product card
function createProductCard(product) {
    const stockStatus = product.inStock ? '' : ' (Sold Out)';
    const buttonText = product.inStock ? 'Contact for Purchase' : 'Sold Out';
    const buttonClass = product.inStock ? '' : ' sold-out';
    
    return `
        <div class="jewelry-item">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}${stockStatus}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price}</p>
            <p class="materials">Materials: ${product.materials.join(', ')}</p>
            <button class="product-button${buttonClass}" ${!product.inStock ? 'disabled' : ''}>
                ${buttonText}
            </button>
        </div>
    `;
}

// Function to load and display products
function loadProducts() {
    fetch('../data/products.json')
        .then(response => response.json())
        .then(products => {
            const galleryGrid = document.getElementById('gallery-grid');
            galleryGrid.innerHTML = products.map(createProductCard).join('');
        })
        .catch(error => {
            console.error('Error loading products:', error);
            document.getElementById('gallery-grid').innerHTML = '<p>Error loading products. Please try again later.</p>';
        });
}

// Load products when page loads
document.addEventListener('DOMContentLoaded', loadProducts);