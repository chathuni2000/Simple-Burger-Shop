function addToCart(burgerName) {
    alert(burgerName + " has been added to your cart!");
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us!");
});
