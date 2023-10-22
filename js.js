 // Sample Product data (you can replace this with your data)
const products = [
    { name: "kitty heart", image: "1.png", link: "https://teeshopper.in/products/kitty-heart", category: "tshirts", price: 630 },
    { name: "owl print, trendy look, bird print", image: "2.png", link: "https://teeshopper.in/products/owl-print-trendy-look-bird-print", category: "tshirts", price: 630 },
    { name: "hello world", image: "3.png", link: "https://teeshopper.in/products/hello__world", category: "hoodie", price: 945 },
    { name: "rabbit design full sleeves sweatshirt", image: "5.png", link: "https://teeshopper.in/products/rabbit-design-full-sleeves-sweatshirt", category: "sweatshirt", price: 998 },
    { name: "micky mouse design", image: "6.jpg", link: "https://teeshopper.in/products/micky-mouse_top", category: "tank top", price: 578 },
    { name: "smiley tshirt", image: "8.png", link: "https://teeshopper.in/products/happyfacesmilingthsirt", category: "tshirts", price: 525 },
    // Add more product data here
];

const searchBar = document.getElementById('search-bar');
const categorySelect = document.getElementById('category-select');
const priceSortSelect = document.getElementById('price-sort');
const priceFilterSelect = document.getElementById('price-filter');
const productList = document.getElementById('t-shirt-list');

// Function to filter products by price range
function filterProductsByPrice(productsToFilter, minPrice, maxPrice) {
    return productsToFilter.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

// Function to sort products by price
function sortProductsByPrice(productsToSort, sortOrder) {
    if (sortOrder === 'ascending') {
        return productsToSort.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'descending') {
        return productsToSort.sort((a, b) => b.price - a.price);
    } else {
        return productsToSort;
    }
}

// Function to display products based on the selected category, query, sort order, and price range
function displayProducts(category, query = '', sortOrder = 'ascending', minPrice = 0, maxPrice = Infinity) {
    productList.innerHTML = '';

    let filteredProducts = products.filter(product => {
        if (category === 'all' || product.category === category) {
            return product.name.toLowerCase().includes(query) && product.price >= minPrice && product.price <= maxPrice;
        }
        return false;
    });

    filteredProducts = sortProductsByPrice(filteredProducts, sortOrder);

    if (filteredProducts.length === 0) {
        // Show the "No items found" message
        productList.innerHTML = '<p>No items found.</p>';
    }

    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('t-shirt');

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: ₹${product.price}</p>
            <a href="${product.link}" target="_blank">Purchase</a>
        `;

        productList.appendChild(productItem);
    });
}

// Event listener for the search bar
searchBar.addEventListener('input', function () {
    const selectedCategory = categorySelect.value;
    const query = searchBar.value.toLowerCase();
    const selectedSortOrder = priceSortSelect.value;
    const selectedPriceRange = priceFilterSelect.value;

    let minPrice = 0;
    let maxPrice = Infinity;

    if (selectedPriceRange === 'under500') {
        maxPrice = 499.99;
    } else if (selectedPriceRange === '500to1000') {
        minPrice = 500;
        maxPrice = 999.99;
    } else if (selectedPriceRange === '1000to1500') {
        minPrice = 1000;
        maxPrice = 1499.99;
    } else if (selectedPriceRange === '1500to2000') {
        minPrice = 1500;
        maxPrice = 1999.99;
    } // Add more price range conditions as needed

    displayProducts(selectedCategory, query, selectedSortOrder, minPrice, maxPrice);
});

// Event listener for category select
categorySelect.addEventListener('change', function () {
    const selectedCategory = categorySelect.value;
    const query = searchBar.value.toLowerCase();
    const selectedSortOrder = priceSortSelect.value;
    const selectedPriceRange = priceFilterSelect.value;

    let minPrice = 0;
    let maxPrice = Infinity;

    if (selectedPriceRange === 'under500') {
        maxPrice = 499.99;
    } else if (selectedPriceRange === '500to1000') {
        minPrice = 500;
        maxPrice = 999.99;
    } else if (selectedPriceRange === '1000to1500') {
        minPrice = 1000;
        maxPrice = 1499.99;
    } else if (selectedPriceRange === '1500to2000') {
        minPrice = 1500;
        maxPrice = 1999.99;
    } // Add more price range conditions as needed

    displayProducts(selectedCategory, query, selectedSortOrder, minPrice, maxPrice);
});

// Event listener for price sorting
priceSortSelect.addEventListener('change', function () {
    const selectedCategory = categorySelect.value;
    const query = searchBar.value.toLowerCase();
    const selectedSortOrder = priceSortSelect.value;
    const selectedPriceRange = priceFilterSelect.value;

    let minPrice = 0;
    let maxPrice = Infinity;

    if (selectedPriceRange === 'under500') {
        maxPrice = 499.99;
    } else if (selectedPriceRange === '500to1000') {
        minPrice = 500;
        maxPrice = 999.99;
    } else if (selectedPriceRange === '1000to1500') {
        minPrice = 1000;
        maxPrice = 1499.99;
    } else if (selectedPriceRange === '1500to2000') {
        minPrice = 1500;
        maxPrice = 1999.99;
    } // Add more price range conditions as needed

    displayProducts(selectedCategory, query, selectedSortOrder, minPrice, maxPrice);
});

// Event listener for price filtering
priceFilterSelect.addEventListener('change', function () {
    const selectedCategory = categorySelect.value;
    const query = searchBar.value.toLowerCase();
    const selectedSortOrder = priceSortSelect.value;
    const selectedPriceRange = priceFilterSelect.value;

    let minPrice = 0;
    let maxPrice = Infinity;

    if (selectedPriceRange === 'under500') {
        maxPrice = 499.99;
    } else if (selectedPriceRange === '500to1000') {
        minPrice = 500;
        maxPrice = 999.99;
    } else if (selectedPriceRange === '1000to1500') {
        minPrice = 1000;
        maxPrice = 1499.99;
    } else if (selectedPriceRange === '1500to2000') {
        minPrice = 1500;
        maxPrice = 1999.99;
    } // Add more price range conditions as needed

    displayProducts(selectedCategory, query, selectedSortOrder, minPrice, maxPrice);
});
// Event listener for the search bar
searchBar.addEventListener('input', function () {
    const enteredText = searchBar.value.toLowerCase();

   // easter egg
    if (enteredText === "031016042003") {
        alert('wow u found it😀😀');
       
        window.location.href = "https://dhruvgupta33899.github.io/love/";
    } 
    else if (enteredText === "00000000") {
        
       
        window.location.href = "https://www.youtube.com/";
    } 
    
    // If the entered text is not a specific number, continue with regular search functionality
    // Rest of your existing code for displaying products based on the search
});


const sortingOptions = document.querySelector('.sorting-options');
const toggleButton = document.getElementById('toggle-sorting-options');

toggleButton.addEventListener('click', () => {
    sortingOptions.classList.toggle('active');
});
// Initial display of all products
displayProducts('all');
