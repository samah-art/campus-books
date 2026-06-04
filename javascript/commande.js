function afficherCarte(){
    let paiement = document.getElementById("paiement").value;
    let section = document.getElementById("carteSection");

    if(paiement === "card"){
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function confirmerCommande(){
    let adresse = document.getElementById("adresse").value;
    let paiement = document.getElementById("paiement").value;

    if(adresse.trim() === ""){
        alert("Veuillez entrer une adresse !");
        return;
    }

    if(paiement === ""){
        alert("Veuillez choisir un mode de paiement !");
        return;
    }

    if(paiement === "card"){
        let num = document.getElementById("numCarte").value;
        let exp = document.getElementById("exp").value;
        let cvv = document.getElementById("cvv").value;

        if(num.trim() === "" || exp === "" || cvv.trim() === ""){
            alert("Veuillez remplir les informations de la carte !");
            return;
        }
    }

    alert("Commande confirmée avec succès ✅");

    localStorage.removeItem("cart");

    window.location.href = "../index.html";
}