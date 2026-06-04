
// panier

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    price = Number(price); 

    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " ajouté au panier !");
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = document.getElementById("cartCount");

    if (count) {
        count.textContent = cart.length;
    }
}

updateCartCount();

//recherche produits
const searchInput = document.getElementById("recherche");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();
        const books = document.querySelectorAll(".book");

        books.forEach(book => {
            const text = book.textContent.toLowerCase();

            if (text.includes(value)) {
                book.style.display = "flex";
            } else {
                book.style.display = "none";
            }
        });
    });
}

//filtrage categorie

function filterBooks(categorie) {

    const nosLivres = document.getElementById("section-nos-livres");
    const vendeurs = document.getElementById("section-vendeurs");
    const supp = document.getElementById("section-supp");

    const sections = [nosLivres, vendeurs, supp];

    // helper
    function show(el) {
        if (el) el.style.display = "block";
        
    }

    function hide(el) {
        if (el) el.style.display = "none";
    }

    if (categorie === "all") {
        sections.forEach(show);
    }

    if (categorie === "nos-livres") {
        show(nosLivres);
        hide(vendeurs);
        hide(supp);
    }

    if (categorie === "vendeurs") {
        hide(nosLivres);
        show(vendeurs);
        hide(supp);
    }

    if (categorie === "supp") {
        hide(nosLivres);
        hide(vendeurs);
        show(supp);
    }
}


// mettre des livres en vente

function displayUserBooks() {
    const container = document.getElementById("vendeurs");

    if (!container) return;

    let livres = JSON.parse(localStorage.getItem("userBooks")) || [];

    /*container.innerHTML = "";*/

    livres.forEach((book) => {
        const figure = document.createElement("figure");
        figure.classList.add("book");

        figure.innerHTML = `
            <img src="${book.image}" width="200" height="200">
            <figcaption>
                <b>${book.titre}</b><br>
                <span class="prix">${book.prix} DA</span>
            </figcaption>
            <button class="add-to-cart">
                Ajouter au panier
            </button>
        `;

        figure.querySelector(".add-to-cart").addEventListener("click", function () {
            addToCart(book.titre, book.prix);
        });

        container.appendChild(figure);
    });
}

displayUserBooks();


// rend filterBooks accessible depuis HTML onclick
window.filterBooks = filterBooks;
window.addToCart = addToCart;

//menu navigation
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