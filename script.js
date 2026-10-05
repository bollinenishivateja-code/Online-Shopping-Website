let cart = 0;

function addCart(price) {
    cart++;
    document.getElementById("cartCount").textContent = cart;
    alert("Product added to cart! Price: ₹" + price);
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}let cart = 0;

function addCart(price) {
    cart++;
    document.getElementById("cartCount").textContent = cart;
    alert("Product added to cart! Price: ₹" + price);
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}