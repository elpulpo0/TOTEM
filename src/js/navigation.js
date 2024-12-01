export const menuStructure = {
  'Nos Missions': ['Nos missions', 'Nos outils'],
  'L\'équipe': ['Les fondatrices', 'Le conseil d\'administration'],
  'La situation en PACA': ['Des espèces à enjeux', 'Le contexte', 'Quelques chiffres'],
  'Nos actions et nos projets': ['La ligne SOS', 'Le CDS du var', 'Le CDS des Alpes Maritimes'],
  'Dons et Adhésion': {
    'Appel au don CDS Var': ['Project book', 'Hello asso Don'],
    'Adhésion totem': ['Statuts', 'Hello asso Adhésion']
  },
  'Contact & Presse': ['Formulaire contact', 'Press room']
};

export function createNavigation() {
  const nav = document.getElementById('main-nav');
  const navContainer = document.createElement('div');
  navContainer.className = 'nav-container';

  const menuList = document.createElement('ul');
  menuList.className = 'menu-items';

  // Création des éléments du menu
  Object.entries(menuStructure).forEach(([mainItem, subItems]) => {
    const menuItem = document.createElement('li');
    menuItem.className = 'menu-item';

    const mainLink = document.createElement('a');
    mainLink.href = `#${mainItem.toLowerCase().replace(/ /g, '-')}`;
    mainLink.className = 'menu-link';
    mainLink.textContent = mainItem;
    mainLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = mainItem.toLowerCase().replace(/ /g, '-');
    });
    menuItem.appendChild(mainLink);

    if (subItems) {
      const submenu = document.createElement('ul');
      submenu.className = 'submenu';

      if (Array.isArray(subItems)) {
        subItems.forEach(subItem => {
          createSubmenuItem(submenu, subItem, mainItem);
        });
      } else {
        Object.entries(subItems).forEach(([subItem, subSubItems]) => {
          const subMenuItem = createSubmenuItem(submenu, subItem, mainItem);
          if (subSubItems) {
            const subSubmenu = document.createElement('ul');
            subSubmenu.className = 'submenu';
            subSubItems.forEach(subSubItem => {
              createSubmenuItem(subSubmenu, subSubItem, `${mainItem}/${subItem}`);
            });
            subMenuItem.appendChild(subSubmenu);
          }
        });
      }

      menuItem.appendChild(submenu);
    }

    menuList.appendChild(menuItem);
  });

  // Ajout des icônes sociales
  const socialIcons = document.createElement('div');
  socialIcons.className = 'social-icons';
  
  const facebookLink = document.createElement('a');
  facebookLink.href = '#';
  facebookLink.className = 'social-icon';
  facebookLink.innerHTML = '<i class="fab fa-facebook"></i>';
  
  const instagramLink = document.createElement('a');
  instagramLink.href = '#';
  instagramLink.className = 'social-icon';
  instagramLink.innerHTML = '<i class="fab fa-instagram"></i>';
  
  socialIcons.appendChild(facebookLink);
  socialIcons.appendChild(instagramLink);
  menuList.appendChild(socialIcons);

  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = '☰';
  hamburger.addEventListener('click', () => {
    menuList.classList.toggle('active');
  });

  navContainer.appendChild(hamburger);
  navContainer.appendChild(menuList);
  nav.appendChild(navContainer);
}

function createSubmenuItem(submenu, text, parentPath = '') {
  const item = document.createElement('li');
  item.className = 'submenu-item';
  const link = document.createElement('a');
  const path = parentPath ? `${parentPath}/${text}` : text;
  link.href = `#${path.toLowerCase().replace(/ /g, '-')}`;
  link.className = 'submenu-link';
  link.textContent = text;
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.hash = path.toLowerCase().replace(/ /g, '-');
  });
  item.appendChild(link);
  submenu.appendChild(item);
  return item;
}