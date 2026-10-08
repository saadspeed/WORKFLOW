function afficherMessage() {

    const message = document.getElementById("message");

    message.innerHTML =
        "Bienvenue sur mon portfolio 🚀";

}


const formulaire = document.getElementById("contactForm");

formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    const nom = document.getElementById("nom").value;

    const confirmation =
        document.getElementById("confirmation");

    confirmation.innerHTML =
        "Merci " + nom + " ! Votre message a bien été envoyé.";

    formulaire.reset();

});