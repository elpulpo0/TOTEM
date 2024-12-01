export function renderEquipe() {
  return `
    <div class="page-content">
      <h1 class="page-title">L'équipe</h1>

      <section id="les-fondatrices" class="section">
        <h2 class="section-title">Les fondatrices</h2>
        <div class="team-members">
          <div class="team-member">
            <img src="images/alice-brunet.jpg" alt="Alice Brunet" class="team-member-photo">
            <h3>Alice Brunet, Présidente</h3>
            <ul>
              <li>Vétérinaire depuis plus de 10 ans</li>
              <li>Grande expérience dans le soin à la faune sauvage captive</li>
              <li>DIE Santé de la Faune Sauvage non captive (Diplôme Inter Ecoles Vétérinaires)</li>
            </ul>
          </div>
          <div class="team-member">
            <img src="images/jennifer-jolicard.jpg" alt="Jennifer Jolicard" class="team-member-photo">
            <h3>Jennifer Jolicard, Vice-Présidente</h3>
            <ul>
              <li>Assistante vétérinaire pendant 13 ans</li>
              <li>Médiatrice par l’animal</li>
              <li>Créatrice et gestionnaire d’un centre de soin à la faune sauvage (CSAM)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="image-section" class="image-section">
        <img src="images/Ecureuil.png" alt="Ecureuil" class="image-hero">
      </section>

      <section id="le-conseil-d-administration" class="section">
        <h2 class="section-title">Le conseil d'administration</h2>
        <div class="board-members">
          <div class="board-member">
            <img src="images/amelie-nicolau.jpg" alt="Amélie Nicolau" class="board-member-photo">
            <h3>Amélie Nicolau, Térosière</h3>
            <ul>
              <li>Vétérinaire</li>
            </ul>
          </div>
          <div class="board-member">
            <img src="images/virginie-fernandes.jpg" alt="Virginie Fernandes" class="board-member-photo">
            <h3>Virginie Fernandes, Sécrétaire (Pôle communication)</h3>
            <ul>
              <li>Conseillère en marketing et communication</li>
            </ul>
          </div>
          <div class="board-member">
            <img src="images/barbara-sesma.jpg" alt="Barbara Sesma" class="board-member-photo">
            <h3>Barbara Sesma, Administratrice (Pôle communication)</h3>
            <ul>
              <li>Responsable commerciale en régie publicitaire</li>
            </ul>
          </div>
          <div class="board-member">
            <img src="images/julien-veys.jpg" alt="Julien Veys" class="board-member-photo">
            <h3>Julien Veys, Administrateur</h3>
            <ul>
              <li>Vétérinaire</li>
            </ul>
          </div>
          <div class="board-member">
            <img src="images/mathilde-prevot.jpg" alt="Mathilde Prévot" class="board-member-photo">
            <h3>Mathilde Prévot, Administratrice</h3>
            <ul>
              <li>Vétérinaire</li>
            </ul>
          </div>
          <div class="board-member">
            <img src="images/marine-afchain.jpg" alt="Marine Afchain" class="board-member-photo">
            <h3>Marine Afchain, Administratrice</h3>
            <ul>
              <li>Musicothérapeute</li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    <style>

      .team-members,
      .board-members {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adaptation à la taille de l'écran */
        gap: 1.5rem; /* Espacement plus réduit entre les éléments */
        margin-top: 2rem;
      }

      .team-member,
      .board-member {
        padding: 1rem;
        background-color: rgba(158, 178, 196, 0.1);
        border-radius: 8px;
        text-align: center;
      }

      /* Pour les petits écrans */
      @media (max-width: 600px) {
        .team-members,
        .board-members {
          grid-template-columns: 1fr; /* Afficher les membres sur une seule colonne sur mobile */
        
        }
      }
    </style>
  `;
}
