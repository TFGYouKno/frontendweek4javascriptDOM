let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts() {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = ''; // Clear any existing content

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: $${product.price}`;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productDescription);

        productContainer.appendChild(productDiv);
    });
}

window.addEventListener('load', displayProducts);

document.getElementById('user-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    console.log(userData);
    alert('Form submitted successfully!');
});

document.getElementById('hover-box').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'purple';
});

document.getElementById('hover-box').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

function changeColor() {
    const box = document.getElementById('box');
    box.style.backgroundColor = box.style.backgroundColor === 'blue' ? 'red' : 'blue';
}

function toggleVisibility() {
    const toggleBox = document.getElementById('toggle-box');
    toggleBox.style.display = toggleBox.style.display === 'none' ? 'block' : 'none';
}

