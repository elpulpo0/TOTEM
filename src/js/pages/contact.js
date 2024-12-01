export function renderContact() {
  return `
    <div class="page-content">
      <h1 class="page-title">Contact & Presse</h1>

      <section id="formulaire-contact" class="section">
        <h2 class="section-title">Formulaire contact</h2>
        <form class="contact-form">
          <div class="form-group">
            <label for="name">Nom</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="subject">Sujet</label>
            <input type="text" id="subject" name="subject" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required rows="5"></textarea>
          </div>
          <button type="submit" class="btn-submit">Envoyer</button>
        </form>
      </section>

      <section id="press-room" class="section">
        <h2 class="section-title">Press room</h2>
        <form class="press-form">
          <p>Entrez votre email professionnel pour accéder au dossier de presse</p>
          <div class="form-group">
            <label for="press-email">Email professionnel</label>
            <input type="email" id="press-email" name="press-email" required>
          </div>
          <button type="submit" class="btn-submit">Accéder au dossier</button>
        </form>
      </section>
    </div>
  `;
}