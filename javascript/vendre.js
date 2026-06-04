const form = document.getElementById("vendreForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const titre = document.getElementById("titre").value;
    const prix = document.getElementById("prix").value;
    const imageInput = document.getElementById("image");

    const file = imageInput.files[0];

    if (!file) {
        alert("Ajoute une image !");
        return;
    }
    if (file.size > 5 * 1024 * 1024) {
    alert("Image trop grande ! Maximum 5MB.");
    return;
}

    const reader = new FileReader();

   reader.onload = function () {
    const imageBase64 = reader.result;

    try {
        let livres = JSON.parse(localStorage.getItem("userBooks")) || [];

        livres.push({
            titre: titre,
            prix: Number(prix),
            image: imageBase64
        });

        localStorage.setItem("userBooks", JSON.stringify(livres));
        alert("Livre ajouté avec succès !");
        form.reset();

    } catch (e) {
        alert("Image trop lourde ! Choisissez une image plus petite (moins de 1MB).");
        console.error(e);
    }
};

    reader.readAsDataURL(file);
});