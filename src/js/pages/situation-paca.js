export function renderSituationPACA() {
  return `
    <div class="page-content">
      <h1 class="page-title">La situation en PACA</h1>

      <section id="des-especes-a-enjeux" class="section">
        <h2 class="section-title">Des espèces à enjeux</h2>
        <p>Le Var regorge d’espèces à enjeux majeurs :</p>
        <div class="species-list">
          <div class="species-category">
            <h3 class="species-title">Espèces de chauves-souris</h3>
            <p>Plusieurs espèces de chauves-souris</p>
          </div>
          <div class="species-category">
            <h3 class="species-title">Espèces d’oiseaux particulièrement en danger</h3>
            <ul>
              <li>L'Aigle de Bonelli</li>
              <li>Le vautour fauve</li>
              <li>L'outarde canepetière</li>
            </ul>
          </div>
          <div class="species-category">
            <h3 class="species-title">Espèces de reptiles</h3>
            <ul>
              <li>La vipère d'Orsini</li>
              <li>La tortue de Hermann</li>
              <li>La cistude d'Europe</li>
              <li>Le lézard ocellé</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="le-contexte" class="section">
        <div class="context-container">
          <div class="context-card">
            <h2 class="section-title">Contexte climatique et sanitaire</h2>
            <p>
              L’année 2022 fût l’année la plus chaude que la France ait enregistrée depuis plus d’un siècle. Ce fût l’une des moins pluvieuses depuis 1959 (40% de déficit de précipitations).<br>
              L’impact sur la faune sauvage a été important : raréfaction de la nourriture, augmentation du risque d’épidémie dû aux eaux stagnantes, difficulté à élever les jeunes en sécurité.<br>
              La France est un des pays déclarant le plus de cas d’influenza aviaire en Europe. La majorité pour l’instant se trouve sur la côte atlantique, ainsi la région SUD est relativement peu touchée bien qu’un cas ait été déclaré dans le 13 en début d’année 2023.
            </p>
          </div>
          
          <div class="context-card">
            <h2 class="section-title">Contexte géographique</h2>
            <p>
              La région SUD est une des plus riche en biodiversité. Elle abrite 85% des espèces de mammifères de France continentale, plus des deux tiers des espèces de reptiles et plus de la moitié des espèces d’oiseaux.<br>
              Mais le bandeau littoral reste aussi le plus densément peuplé et l’urbanisation continue de réduire de plus en plus les zones de vie de la faune sauvage, notamment les zones humides très riches.<br>
              <em>*Source : Observatoire régional de biodiversité</em>
            </p>
          </div>
        </div>
      </section>

      <section id="quelques-chiffres" class="section">
  <h2 class="section-title">Quelques chiffres</h2>
  <div class="statistics">
    <div class="stat-card">
      <h3>686</h3>
      <p>C’est le nombre d’espèces observées sur la région SUD</p>
      <p>567 espèces d’oiseaux et 119 espèces de mammifères.</p>
      <p><em>*Source : Biodivpaca LPO</em></p>
    </div>
    <div class="stat-card">
      <h3>4,242</h3>
      <p>C’est le nombre de prises en charge toutes espèces confondues en 2022</p>
      <p>(1242 au CSAM et 3000 à la LPO PACA) avec un pic d’accueils entre mai et août.</p>
    </div>
  </div>

  <div class="additional-info">
    <p>Chaque année le territoire PACA voit passer de nombreuses espèces migratrices provenant de toute la France.</p>
    <p>Pour la faune sauvage en détresse en 2022, c’est :</p>
    <ul>
      <li>Près de 10 000 appels traités par les centres de soins LPO PACA à Buoux et CSAM à St Cézaire-sur-Siagne.</li>
      <li>Plusieurs centaines d’animaux sans structures dimensionnées pour les accueillir, donc sans prises en charge par des centres de soins.</li>
      <li>Sans compter les animaux amenés en clinique vétérinaire, qui, trop blessés ou affaiblis, n’iront jamais en centre de soin.</li>
    </ul>
  </div>
</section>

    </div>
  `;
}
