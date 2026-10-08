
// AFFICHER / MASQUER LES DÉTAILS DES PROJETS

// Récupère tous les boutons Voir les détails
const detailButtons = document.querySelectorAll(".toggle-details");

// Parcourt chaque bouton
detailButtons.forEach((button) => {

  // Détecte le clic sur le bouton
  button.addEventListener("click", () => {

    // Récupère le bloc de détails associé au bouton
    const details = document.getElementById(
      button.getAttribute("aria-controls")
    );

    // Inverse son affichage
    details.hidden = !details.hidden;

    // Met à jour le texte du bouton
    if (details.hidden) {
      button.textContent = "Voir les détails";
    } else {
      button.textContent = "Masquer les détails";
    }

    // Indique si le contenu est ouvert ou fermé
    button.setAttribute("aria-expanded", String(!details.hidden));

  });
});


// BOUTON RETOUR EN HAUT

// Récupère le bouton dans le HTML
const topBtn = document.getElementById("topBtn");

// Quand l'utilisateur fait défiler la page
window.addEventListener("scroll", () => {

  // Affiche le bouton après 150 pixels de défilement
  if (window.scrollY > 150) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }

});

// Quand l'utilisateur clique sur le bouton
topBtn.addEventListener("click", () => {

  // Remonte en haut de la page avec un défilement fluide
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
