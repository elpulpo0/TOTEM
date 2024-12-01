export function renderSituationPACA() {
  return `
    <div class="page-content">
      <h1 class="page-title">La situation en PACA</h1>

      <section id="des-especes-a-enjeux" class="section">
        <h2 class="section-title">Des espèces à enjeux</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
        <div class="species-grid">
          <!-- Placeholder pour les images des espèces -->
          <div class="species-card">Espèce 1</div>
          <div class="species-card">Espèce 2</div>
          <div class="species-card">Espèce 3</div>
        </div>
      </section>

      <section id="le-contexte" class="section">
        <h2 class="section-title">Le contexte</h2>
        <p>Cras porta condimentum velit, et eleifend ex. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </section>

      <section id="quelques-chiffres" class="section">
        <h2 class="section-title">Quelques chiffres</h2>
        <div class="statistics">
          <div class="stat-card">
            <h3>100+</h3>
            <p>Espèces protégées</p>
          </div>
          <div class="stat-card">
            <h3>50km²</h3>
            <p>Zone protégée</p>
          </div>
          <div class="stat-card">
            <h3>1000+</h3>
            <p>Bénévoles</p>
          </div>
        </div>
      </section>
    </div>
  `;
}