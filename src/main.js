class Operation {
  // implementation
}

class SubWindow {
  constructor() {
    // implementation
  }

  slideMenu(sideMenu, direction) {
    const width = direction === 'open' ? '25%' : '0%';
    const transitionTime = 'width 0.5s';

    if (sideMenu.style.display === 'block') {
      sideMenu.style.transition = transitionTime;
      sideMenu.style.width = width;
    } else {
      sideMenu.style.display = 'block';
      sideMenu.style.transition = transitionTime;
      sideMenu.style.width = width;
    }
  }

  closeMenu(sideMenu) {
    const timeout = 500;
    const transitionTime = 'width 0.5s';

    sideMenu.style.transition = transitionTime;
    sideMenu.style.width = '0%';

    setTimeout(() => {
      sideMenu.style.display = 'none';
    }, timeout);
  }

  openPerfilSubpage() {
    const subpage = document.querySelector('.subpage-perfil');
    subpage.style.display = 'block';
  }
}

const operationInstance = new Operation();
const subWindowInstance = new SubWindow();

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterBtn = document.getElementById('filter-btn');
const base = document.getElementById("prod-template");
const prodList = document.getElementsByClassName("prodtable");
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const perfilBtn = document.getElementById('perfil-image');
const sideMenu = document.querySelector('.side-menu');

searchBtn.addEventListener('click', () => operationInstance.search());
rightBtn.addEventListener('click', () => operationInstance.passslide('right'));
leftBtn.addEventListener('click', () => operationInstance.passslide('left'));
filterBtn.addEventListener('click', () => subWindowInstance.slideMenu(sideMenu, 'open'));
perfilBtn.addEventListener('click', () => subWindowInstance.openPerfilSubpage());

// Add a click event listener to the side-menu to close it
sideMenu.addEventListener('click', () => subWindowInstance.closeMenu(sideMenu));