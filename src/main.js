// Classes
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
  private isOpen;

  constructor() {
    this.isOpen = false;
  }

  openfiltertab() {
    const sideMenu = document.querySelector('.side-menu');
    this.isOpen = !this.isOpen;
    sideMenu.style.display = this.isOpen ? 'block' : 'none';

    if (this.isOpen) {
      sideMenu.style.width = '0%';
      setTimeout(() => {
        sideMenu.style.transition = 'width 0.5s';
        sideMenu.style.width = '25%';
      }, 10);
    } else {
      sideMenu.style.transition = 'width 0.5s';
      sideMenu.style.width = '0%';
      setTimeout(() => {
        sideMenu.style.display = 'none';
      }, 500);
    }
  }

  openPerfilSubpage() {
    const subpage = document.querySelector('.subpage-perfil');
    subpage.style.display = 'block';
  }
}

// DOM elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterBtn = document.getElementById('filter-btn');
const base = document.getElementById("prod-template");
const prodList = document.getElementsByClassName("prodtable");
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const perfilBtn = document.getElementById('perfil-image');

// Event listeners
const operationInstance = new Operation();
const subWindowInstance = new SubWindow();

searchBtn.addEventListener('click', () => operationInstance.search(searchInput.textContent));
rightBtn.addEventListener('click', () => operationInstance.passslide('right'));
leftBtn.addEventListener('click', () => operationInstance.passslide('left'));
filterBtn.addEventListener('click', () => subWindowInstance.openfiltertab());
perfilBtn.addEventListener('click', () => subWindowInstance.openPerfilSubpage());