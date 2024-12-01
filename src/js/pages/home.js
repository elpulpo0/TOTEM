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

      .page-title {
        font-size: 50px;
        margin-bottom: 20px;
        font-weight: bold;
      }

      /* Conteneur de l'image sans bordure pour la légende */
      .bird-image-container {
        display: inline-block;
        margin: 20px auto; /* Centrage de l'ovale */
        max-width: 80vw; /* Limite la taille du conteneur à 80% de la largeur de la fenêtre */
        max-height: 80vh; /* Limite la hauteur à 80% de la hauteur de la fenêtre */
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

      /* Numéro de téléphone avec l'icône */
      .phone-container {
        margin-top: 20px;
      }

      .phone-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: black;
      }

      .phone-image {
        margin-right: 10px;
      }

      .phone-img {
       width: 40vw;
      }

      /* Mobile-specific styles */
      @media (max-width: 768px) {
        .page-title {
          font-size: 30px; /* Taille réduite pour les petits écrans */
        }

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

        .phone-img {
          width: 35px;
          height: 35px; /* Image encore plus petite sur les petits écrans */
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
          <img src="images/Cormoran-juvenile-copyright-Anne-Hirsch.jpg" alt="Cormoran-juvenile-copyright-Anne-Hirsch" class="bird-image" />
          <figcaption class="caption">Cormoran juvénile, photo prise par Anne Hirsch</figcaption>
        </figure>
      </div>
    </div>
  `;
}
