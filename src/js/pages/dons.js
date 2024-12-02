export function renderDons() {
  return `
    <div class="page-content">
      <h1 class="page-title">Dons et adhésions</h1>

      <!-- Section Appel au don -->
      <section id="appel-au-don" class="section">
        <h2 class="section-title">Appel au don pour le centre de soins du Var</h2>
        
        <div class="subsection">
          <h3>Donner pour le projet de création du centre de soins du Var.</h3>
          <p>Soutenez un projet structurant pour la conservation de la faune sauvage du Var</p>
          
          <section id="telechargement-pdf" class="section">
            <button onclick="window.open('files/Dossier_TOTEM.pdf', '_blank');" class="download-button">
              Télécharger le dossier de présentation
            </button>
          </section>
        </div>

        <div class="subsection">
          <div>
            <iframe 
              src="https://www.helloasso.com/associations/totem-paca/formulaires/1/widget" 
              frameborder="0" 
              width="100%" 
              height="1000px">
            </iframe>
          </div>
        </div>
      </section>

      <section id="image-section" class="image-section">
        <img src="images/Herisson.png" alt="Hérisson" class="image-hero">
      </section>

      <!-- Section Adhésion Totem -->
      <section id="adhesion" class="section">
        <h2 class="section-title">Adhésion Totem</h2>
        
        <div class="subsection">
          <h3>Adhérer à Totem c’est soutenir la conservation et la biodiversité de la région PACA</h3>
          
          <section id="telechargement-pdf" class="section">
            <button onclick="window.open('files/Statuts_TOTEM.pdf', '_blank');" class="download-button">
              Télécharger les statuts de l'association
            </button>
          </section>
        </div>

        <div class="subsection">
          <div>
            <iframe 
              src="https://www.helloasso.com/associations/totem-paca/adhesions/adhesion-2024/widget" 
              frameborder="0" 
              width="100%" 
              height="1000px">
            </iframe>
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
    </style>
  `;
}
