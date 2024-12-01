// js/footer.js
export function footer() {
  const footerElement = document.createElement("footer");
  footerElement.className = "footer";

  // Conteneur du logo
  const logoContainer = document.createElement("div");
  logoContainer.className = "footer-logo-container";
  const logo = document.createElement("img");
  logo.src = "images/Logo_totem.png";
  logo.className = "footer-logo";
  logoContainer.appendChild(logo);

  // Texte de copyright et mentions légales
  const footerText = document.createElement("p");
  footerText.className = "footer-text";
  footerText.innerHTML = `
    Association TOTEM – © Copyright 2024 – 
    <a href="#mentions" class="legal-link">Mentions légales et politique de confidentialité</a> – 
    Tous droits réservés
  `;

  // Ajouter les éléments dans le footer
  footerElement.appendChild(logoContainer);
  footerElement.appendChild(footerText);

  // Ajouter le footer au DOM
  document.body.appendChild(footerElement);
}
