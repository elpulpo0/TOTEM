export function renderMissions() {
  return `
    <style>
      @media (max-width: 768px) {

        
        /* Colonnes en mode mobile */
        .columns {
          display: block;
          width: 100%;
        }
        
        .column {
          width: 100%;
          margin-bottom: 1rem; /* Ajouter un espace entre les colonnes */
        }
    </style>
    
    <div class="page-content">
      <h1 class="page-title">Nos missions</h1>
      
      <section id="nos-missions" class="section">
        <h2 class="section-title">Nos missions</h2>
        
        <div class="columns">
          <div class="column">
            <h3>Soigner</h3>
            <p>Proposer des soins complets pour la faune sauvage: transport, chirurgie, élevage, convalescence, démazoutage.</p>
          </div>
          <div class="column">
            <h3>Former</h3>
            <p>Former les professionnels amenés à se retrouver face à de la faune sauvage en détresse (police, agents des espaces verts, équipes vétérinaires…)</p>
          </div>
        </div>
        
        <div class="columns">
          <div class="column">
            <h3>Sensibiliser et éduquer</h3>
            <p>Mener des actions de sensibilisation au public lors des relâchers, les journées de nature, ou par des actions en milieu scolaire.</p>
          </div>
          <div class="column">
            <h3>Etudier</h3>
            <p>Collaborer avec les institutions scientifiques pour mieux connaître et comprendre la faune de notre région.</p>
          </div>
        </div>
        
        <p>Au TOTEM nous sommes convaincus que la préservation des espèces allie tous ces domaines et c’est par une action globale que nous réduirons l’impact de l’homme sur la biodiversité.</p>
      </section>

      <section id="image-section" class="image-section">
        <img src="images/Herisson.png" alt="Hérisson" class="image-hero">
      </section>

      <section id="nos-outils" class="section">
        <h2 class="section-title">Nos outils</h2>
        
        <div class="columns">
          <div class="column">
            <h3>Un Engagement</h3>
            <ul>
              <li>Actifs dans la protection animale de la région</li>
              <li>Une équipe de bénévoles pluridisciplinaire</li>
              <li>Collaboration avec les associations de protection de la faune sauvage de la région</li>
            </ul>
          </div>
          <div class="column">
            <h3>Des Compétences</h3>
            <ul>
              <li>Connaissance de la réglementation relative à la faune sauvage</li>
              <li>Soin à la faune sauvage</li>
              <li>Gestion d’un centre de soin à la faune sauvage</li>
            </ul>
          </div>
        </div>
        
        <!-- Dernière colonne occupante toute la largeur -->
        <div class="full-width-column">
          <h3>Un Réseau</h3>
          <ul>
            <li>OFB, DDPP, DREAL, SDIS06, soigneurs, capacitaires, pompiers, eco-gardes, gardes nature, vétérinaires, élus, associations…</li>
          </ul>
        </div>
        
        <!-- Ajouter un espace en bas de cette section -->
        <p>Nos axiomes: Une collaboration saine et transparente, garantir le bien-être des animaux et de leur soigneurs et en faire un projet durable.</p>
      </section>
    </div>
  `;
}
