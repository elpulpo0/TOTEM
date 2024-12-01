export function renderContact() {
  return `
    <div class="page-content">
      <h1 class="page-title">Contact & Presse</h1>

      <section id="formulaire-contact" class="section">
        <h2 class="section-title">Formulaire contact</h2>
        <form id="contactForm" class="contact-form">
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
        <div id="responseMessage" class="response-message" style="display:none;"></div> <!-- Message de réponse -->
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

    <script src="https://www.google.com/recaptcha/api.js?render=${
      import.meta.env.VITE_RECAPTCHA_SITE_KEY
    }"></script>
    <script>
      // Ajout de console.log pour déboguer
      console.log('Script chargé');
      
      document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault(); // Empêche la soumission classique du formulaire
        console.log("Formulaire soumis");

        // Validation des champs
        if (!document.getElementById('name').value || !document.getElementById('email').value || !document.getElementById('subject').value || !document.getElementById('message').value) {
          alert('Veuillez remplir tous les champs.');
          return;
        }

        // Affichage du message de chargement ou d'envoi
        var responseMessage = document.getElementById("responseMessage");
        responseMessage.style.display = "none"; // Cacher le message précédent
        responseMessage.innerHTML = "<p>Envoi en cours...</p>";
        responseMessage.style.display = "block";

        // Exécution de reCAPTCHA
        grecaptcha.ready(function() {
          console.log('Exécution de reCAPTCHA');
          grecaptcha.execute('${
            import.meta.env.VITE_RECAPTCHA_SITE_KEY
          }', { action: 'submit' }).then(function(token) {
            console.log('reCAPTCHA réussi, token:', token);
            
            var form = document.getElementById("contactForm");

            // Crée un champ caché pour le token reCAPTCHA
            var inputToken = document.createElement("input");
            inputToken.type = "hidden";
            inputToken.name = "recaptcha_token";
            inputToken.value = token;
            form.appendChild(inputToken);

            // Envoi du formulaire via EmailJS
            emailjs.sendForm('${import.meta.env.VITE_EMAILJS_SERVICE_ID}', '${
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  }', form, '${import.meta.env.VITE_EMAILJS_USER_ID}')
              .then(function(response) {
                console.log("Succès :", response);
                responseMessage.innerHTML = "<p>Votre message a été envoyé avec succès !</p>";
                responseMessage.style.color = "green"; // Couleur verte pour succès
              }, function(error) {
                console.error("Erreur :", error);
                responseMessage.innerHTML = "<p>Une erreur est survenue, veuillez réessayer.</p>";
                responseMessage.style.color = "red"; // Couleur rouge pour erreur
              });
          });
        });
      });
    </script>
  `;
}
