function displayCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cartItems");
    if(!container) return;
    if(cart.length === 0){
        container.innerHTML = "<p>Panier vide</p>";
        return;
    }
    let html = cart.map((item, index) => `
        <div class="livre">
            📚 ${item.name} - ${item.price} DA
            <button onclick="removeItem(${index})">Supprimer</button>
        </div>
    `).join("");
    let total = calculateTotal(cart);
    html += `
    <hr>
    <h2>Total : ${total} DA</h2>

    <button id="validerCommande" onclick="goToCommande()">
        Valider ma commande
    </button>

`;
    container.innerHTML = html;
}
function goToCommande(){
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if(isLoggedIn === "true"){
        window.location.href = "../content/commande.html";
    } else {
        alert("Vous devez vous connecter afin de confirmer votre commande");
        window.location.href = "../content/connexion.html";
    }
}
function removeItem(index){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}
displayCart();
function calculateTotal(cart){
    return cart.reduce((total, item) => total + item.price, 0);
}

function validerCommande(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){
        alert("Votre panier est vide !");
        return;
    }

    alert("Votre commande a été validée avec succès !");

    localStorage.removeItem("cart");

    displayCart();
}