import './styles/main.css';
import { createNavigation } from './js/navigation.js';
import { Router } from './js/router.js';
import { renderHome } from './js/pages/home.js';
import { renderMissions } from './js/pages/missions.js';
import { renderEquipe } from './js/pages/equipe.js';
import { renderSituationPACA } from './js/pages/situation-paca.js';
import { renderActions } from './js/pages/actions.js';
import { renderDons } from './js/pages/dons.js';
import { renderContact } from './js/pages/contact.js';

document.addEventListener('DOMContentLoaded', () => {
  createNavigation();
  
  const router = new Router();
  
  // Ajout des routes
  router.addRoute('accueil', renderHome);
  router.addRoute('nos-missions', renderMissions);
  router.addRoute('l-equipe', renderEquipe);
  router.addRoute('la-situation-en-paca', renderSituationPACA);
  router.addRoute('nos-actions-et-nos-projets', renderActions);
  router.addRoute('dons-et-adhesion', renderDons);
  router.addRoute('contact-presse', renderContact);
});