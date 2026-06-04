// inscription

const formInscription = document.querySelector("form");

if (formInscription && document.title.includes("INSCRIPTION")) {
    formInscription.addEventListener("submit", function (e) {
        e.preventDefault();

        const nom = document.getElementById("nom").value.trim();
        const prenom = document.getElementById("prenom").value.trim();
        const email = document.getElementById("email").value.trim();
        const numero = document.getElementById("numero").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm_password").value;
        const genre = document.querySelector('input[name="genre"]:checked');
        const niveau = document.getElementById("niveau").value;

        // validation 
        if (!nom || !prenom || !email || !numero || !password || !confirmPassword) {
            alert("⚠️ Tous les champs doivent être remplis !");
            return;
        }

        if (!email.includes("@")) {
            alert("⚠️ Email invalide !");
            return;
        }

        if (password.length < 6) {
            alert("⚠️ Mot de passe trop court (min 6 caractères)");
            return;
        }

        if (password !== confirmPassword) {
            alert("⚠️ Les mots de passe ne correspondent pas !");
            return;
        }

        if (!genre) {
            alert("⚠️ Veuillez choisir un genre");
            return;
        }

        // création utilisateur 
        const user = {
            nom,
            prenom,
            email,
            numero,
            password,
            genre: genre.value,
            niveau
        };

        // stockage local 
        localStorage.setItem("user", JSON.stringify(user));

        alert("✅ Inscription réussie !");
        window.location.href = "connexion.html";
    });
}

// CONNEXION
const formConnexion = document.querySelector("form");

if (formConnexion && document.title.includes("CONNEXION")) {
    formConnexion.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("❌ Aucun compte trouvé. Veuillez vous inscrire.");
            return;
        }
        
        if (email === user.email && password === user.password) {
            alert("✅ Connexion réussie !");
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "../index.html";
        } else {
            alert("❌ Email ou mot de passe incorrect !");
        }
    });
}