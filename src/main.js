class Operation {
  constructor() {
    // implementation
  }

  search(query) {
    // implementation
  }

  filterElements(filterTag) {
    // implementation
  }

  passslide(direction) {
    // implementation
  }

  createByTemplate(tmplt) {
    // implementation
  }
}

class SubWindow {
  constructor() {
    // implementation
  }

  openfiltertab() {
    const sideMenus = document.querySelectorAll('.side-menu');
  
    sideMenus.forEach(sideMenu => {
      sideMenu.classList.toggle('open');
  
      if (sideMenu.classList.contains('open')) {
        sideMenu.style.width = '0%';
        setTimeout(() => {
          sideMenu.style.width = '25%';
        }, 10);
      } else {
        sideMenu.style.width = '25%';
        setTimeout(() => {
          sideMenu.style.width = '0%';
        }, 10);
        setTimeout(() => {
          sideMenu.style.display = 'none';
        }, 500);
      }
    });
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

searchBtn.addEventListener('click', () => operationInstance.search());
rightBtn.addEventListener('click', () => operationInstance.passslide('right'));
leftBtn.addEventListener('click', () => operationInstance.passslide('left'));
filterBtn.addEventListener('click', () => subWindowInstance.openfiltertab());
perfilBtn.addEventListener('click', () => subWindowInstance.openPerfilSubpage());