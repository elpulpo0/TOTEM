export function renderHome() {
  return `
    <style>
      .section_home {
        text-align: center;
        margin-top: 20px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center; /* Centre horizontalement */
        justify-content: flex-start; /* Centrage vertical */
        min-height: 100vh; /* Minimum hauteur de la fenêtre */
        box-sizing: border-box;
      }

      /* Image avec bordure ovale */
      .bird-image {
        width: 100%; /* L'image occupe toute la largeur de son conteneur */
        height: auto;
        border-radius: 50%; /* Garder l'image dans l'ovale */
        object-fit: cover; /* S'assure que l'image reste bien ajustée */
      }

      /* Légende de l'image */
      .caption {
        font-size: 16px;
        color: #555;
        margin-top: 10px;
      }

      .phone-image {
      margin-top: 20px;
        margin-right: 10px;
      }

      .phone-img {
       width: 40vw;
      }

      /* Mobile-specific styles */
      @media (max-width: 768px) {
        

        .bird-image-container {
          max-width: 90vw; /* Légère réduction de la taille pour s'adapter mieux sur petits écrans */
          margin: 10px auto; /* Réduit l'espace autour */
        }

        .caption {
          font-size: 14px; /* Taille de légende plus petite pour mobile */
        }

        .phone-container {
          margin-top: 15px;
        }
      }

      @media (max-width: 480px) {
        .page-title {
          font-size: 24px; /* Taille encore plus petite pour les très petits écrans */
        }

        .bird-image-container {
          max-width: 100vw; /* L'image peut occuper toute la largeur sur les très petits écrans */
          margin: 5px auto;
        }

        .caption {
          font-size: 12px; /* Réduit la taille de la légende */
        }
      }
    </style>

    <div class="section_home">
      <h1 class="page-title">ASSOCIATION TOTEM</h1>

      <!-- Numéro de téléphone cliquable -->
      <div class="phone-container">
        <p>En cas de découverte d’un animal de la faune sauvage en détresse dans le Var, contactez nous au:</p>
        <a href="tel:0483650279" class="phone-link">
          <div class="phone-image">
            <img src="images/phone_home.png" alt="Appeler" class="phone-img"/>
          </div>
        </a>
      </div>

      <!-- Conteneur de l'image d'oiseau sans bordure -->
      <div class="bird-image-container">
        <figure>
          <img src="images/Grand-cormoran-copyright-Anne-Hirsch.jpg" alt="Grand-cormoran-copyright-Anne-Hirsch" class="bird-image" />
          <figcaption class="caption">Grand cormoran, photo prise par Anne Hirsch</figcaption>
        </figure>
      </div>
    </div>
  `;
}
