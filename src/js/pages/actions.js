export function renderActions() {
  return `
    <div class="page-content">
      <h1 class="page-title">Nos actions et nos projets</h1>

      <section id="la-ligne-sos" class="section">
        <h2 class="section-title">La ligne SOS</h2>
        <div class="phone-container">
          <p>En cas de découverte d’un animal de la faune sauvage en détresse dans le Var, contactez nous au:</p>
          <a href="tel:0483650279" class="phone-link">
            <div class="phone-image">
              <img src="images/phone.png" alt="Appeler" class="phone-img"/>
            </div>
          </a>
        </div>
      </section>

      <section id="image-section" class="image-section">
        <img src="images/Chauve-souris.png" alt="Chauve-souris" class="image-hero">
      </section>

      <section id="les-centres-de-soins" class="section">
        <h2 class="section-title">Les Centres de soins</h2>
        <p class="intro-text">
          L’association TOTEM œuvre à l’ouverture de nouveaux centres de soins à la faune sauvage en région PACA car le faible nombre de structures existantes entraîne la perte de plusieurs centaines d’individus chaque année. 
          Les grands mammifères sont particulièrement touchés car ils ne sont pas pris en charge dans la région. Il en va de même pour les oiseaux d’eau, pourtant 2<sup>ème</sup> groupe d’oiseaux les plus menacés au monde et non pris en charge dans le Var et les Alpes-Maritimes.
        </p>

        <div class="care-centers-container">
          <!-- Bloc Centre de soins du Var -->
          <div id="centre-var" class="care-center">
            <h3 class="subsection-title">Centre de soins du Var</h3>
            <p>TOTEM-PACA développe un projet unique : créer un centre de soins pour accueillir, soigner et réhabiliter les animaux sauvages en détresse dans le Var, un département encore dépourvu de structure dédiée. Situé sur un site exceptionnel de la commune du Pradet, en partenariat avec le Conservatoire du Littoral, ce centre combinera des espaces de soins intensifs et des volières pour préparer les animaux à retrouver leur habitat naturel.
              En plus de sauver des centaines d’animaux chaque année, ce projet vise à sensibiliser le public, former des professionnels et contribuer à la protection de la biodiversité de la région. Ensemble, nous pouvons offrir une seconde chance à la faune sauvage.</p>
          </div>

          <!-- Bloc Image -->
          <div id="centre-image" class="care-center">
            <img src="images/terrain.jpeg" alt="Centre de soins" class="care-center-image" />
          </div>

          <section id="telechargement-pdf" class="section">
        <button onclick="window.open('files/Dossier_TOTEM.pdf', '_blank');" class="download-button">
          Télécharger le dossier de présentation
        </button>
      </section>


          <!-- Bloc Centre de soins oiseaux d'eau -->
          <div id="centre-oiseaux-eau" class="care-center">
            <h3 class="subsection-title">Centre de soins oiseaux d'eau</h3>
            <p>Le centre du Var, sur la commune du Pradet, étant une structure multi espèce, les oiseaux d’eau seront reçus et soignés. 
              Cependant, compte tenu du besoin au niveau régional, TOTEM-PACA ambitionne d’ouvrir, dans la région, une structure dédiée spécifiquement à ces espèces marines.
            </p>
          </div>
        </div>
      </section>
    </div>

    <style>
    .download-button {
          padding: 10px 20px;
          margin-top: 10px;
          background-color: var(--color-orange);
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .download-button:hover {
          background-color: #0056b3;
        }

      /* Section principale */
      #les-centres-de-soins {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      /* Numéro de téléphone avec l'icône */
      .phone-container {
        margin-top: 20px;
        text-align: center; /* Centrage du texte */
      }

      .phone-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: black;
      }

      .phone-image {
        display: flex; /* Transforme le conteneur en boîte flexible */
        align-items: center; /* Centre l'image verticalement */
        justify-content: center; /* Centre l'image horizontalement */
        margin: 0 auto; /* Centrage horizontal du conteneur */
      }

      .phone-img {
        width: 90%;
        height: auto; /* Laisse l'image à sa taille réelle */
      }

      /* Style individuel des blocs */
      .care-center {
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
      }

      /* Image bloc */
      .care-center-image {
        width: 100%;
        height: auto;
        border-radius: 8px;
      }

      /* Responsivité */
      @media (max-width: 768px) {
        .care-center {
          margin-bottom: 15px;
        }
      }
    </style>
  `;
}
