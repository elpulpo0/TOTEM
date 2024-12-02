export class Router {
  constructor() {
    this.routes = new Map();
    this.currentPath = '';
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  }

  addRoute(path, component) {
    this.routes.set(path.toLowerCase(), component);
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || 'accueil';
    this.currentPath = hash.toLowerCase();
    
    // Trouve la route la plus spécifique qui correspond
    let matchedRoute = '';
    let matchedComponent = null;
    let section = '';
    
    // Extrait la section si elle existe dans le hash
    const [mainPath, ...sectionParts] = this.currentPath.split('/');
    section = sectionParts.join('/');
    
    this.routes.forEach((component, route) => {
      if (mainPath.startsWith(route) && route.length > matchedRoute.length) {
        matchedRoute = route;
        matchedComponent = component;
      }
    });

    const content = document.getElementById('content');
    content.innerHTML = matchedComponent ? matchedComponent() : this.notFound();
    
    // Mise à jour des classes actives dans le menu
    this.updateActiveMenuItems();

    // Défilement vers la section si spécifiée
    if (section) {
      const sectionId = section.replace(/[^a-z0-9-]/g, '-');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          // Récupère la position de l'élément
          const offsetTop = element.offsetTop;
          // Ajuste le défilement pour ne pas cacher l'élément sous le menu
          const offset = 180; // Par exemple, la hauteur du menu fixe
          window.scrollTo({
            top: offsetTop - offset,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }

  updateActiveMenuItems() {
    // Supprime toutes les classes actives
    document.querySelectorAll('.menu-link, .submenu-link').forEach(link => {
      link.classList.remove('active');
    });

    // Trouve et active le lien correspondant
    const activeLink = document.querySelector(`a[href="#${this.currentPath}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
      // Active aussi le lien parent si c'est un sous-menu
      const parentMenuItem = activeLink.closest('.submenu')?.previousElementSibling;
      if (parentMenuItem) {
        parentMenuItem.classList.add('active');
      }
    }
  }

  notFound() {
    return `
      <div class="section section_lost">
        <h1 class="page-title">Page non trouvée</h1>
        <p>La page que vous recherchez n'existe pas.</p>
      </div>
    `;
  }
}