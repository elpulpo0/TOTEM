export function renderDons() {
  return `
    <div class="page-content">
      <h1 class="page-title">Dons et Adhésion</h1>

      <section id="appel-au-don-cds-var" class="section">
        <h2 class="section-title">Appel au don CDS Var</h2>
        
        <div class="subsection">
          <h3>Donner pour le projet de création du centre de soin du Var.</h3>
          <p>Soutenez un projet structurant pour la conservation de la faune sauvage du Var</p>
          <section id="telechargement-pdf" class="section">
        <p>Vous pouvez télécharger le dossier de présentation</p>
        <button onclick="window.location.href='files/Dossier_TOTEM.pdf';" class="download-button">
          Télécharger
        </button>
      </section>
        </div>

        
        <div id="hello-asso-don" class="subsection">
  <div class="hello-asso-embed">
    <iframe 
      src="https://www.helloasso.com/associations/totem-paca/formulaires/1/widget" 

      frameborder="0" 
      width="100%" 
      height="900px">
    </iframe>
  </div>
</div>


      <section id="adhesion-totem" class="section">
        <h2 class="section-title">Adhésion totem</h2>
        
        <div class="subsection">
          <h3>Adhérer à Totem c’est soutenir la conservation et la biodiversité de la région PACA</h3>
          <section id="telechargement-pdf" class="section">
        <p>Vous pouvez télécharger les statuts de l'association</p>
        <button onclick="window.location.href='files/Statuts_TOTEM.pdf';" class="download-button">
          Télécharger
        </button>
      </section>
        </div>

        <div id="hello-asso-don" class="subsection">
  <div class="hello-asso-embed">
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