// Menu de navigation
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

//menu
menuBtn.addEventListener("click", function(){
    menu.classList.toggle("show");
});
document.addEventListener("click", function(event){
    if(!menu.contains(event.target) && !menuBtn.contains(event.target)){
        menu.classList.remove("show");
    }
});
//panier
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(name, price){
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " ajouté au panier !");
}
function updateCartCount(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = document.getElementById("cartCount");
    if(count){
        count.textContent = cart.length;
    }
}
updateCartCount();

//recherche fonctionnelle
const searchInput = document.getElementById("recherche");
searchInput.addEventListener("keyup", function(){
    const value = this.value.toLowerCase();
    const books = document.querySelectorAll(".book");
    books.forEach(book => {
        const title = book.querySelector("figcaption")
                          .textContent
                          .toLowerCase();
        if(title.includes(value)){
            book.style.display = "block";
        }else{
            book.style.display = "none";
        }
    });
});

// Scroll livres
function scrollBooks(direction) {
    const wrapper = document.getElementById('booksWrapper');
    wrapper.scrollBy({
        left: direction * 240,
        behavior: 'smooth'
    });

}
function scrollSellers(direction){
    const container = document.getElementById("sellersWrapper");

    container.scrollBy({
        left: direction * 300,
        behavior: "smooth"
    });
}