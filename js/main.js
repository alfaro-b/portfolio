
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
