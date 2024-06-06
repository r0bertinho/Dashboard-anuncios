class SubWindow {
  #isOpen;

  constructor() {
    this.#isOpen = false;
  }

  openfiltertab() {
    const sideMenu = document.querySelector('.side-menu');
    this.#isOpen = !this.#isOpen;
    sideMenu.style.display = this.#isOpen ? 'block' : 'none';

    if (this.#isOpen) {
      sideMenu.style.width = '0%';
      setTimeout(() => {
        sideMenu.style.transition = 'width 0.5s';
        sideMenu.style.width = '25%';
      }, 10);
    } else {

    }
  }

  openPerfilSubpage() {
    const subpage = document.querySelector('.subpage-perfil');
    subpage.style.display = 'block';
  }
}

class SearchOperations {
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

class NetOperations {
  constructor() {

  }

  SendSignal() {

  }

  GetSignal() {

  }
}

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterBtn = document.getElementById('filter-btn');
const base = document.getElementById("prod-template");
const prodList = document.getElementsByClassName("prodtable");
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const perfilBtn = document.getElementById('perfil-btn');

let searchOperations = new SearchOperations();
let NetOperations = new NetOperations();
let subWindow = new SubWindow();

searchBtn.addEventListener('click', () => searchOperations.search(searchInput.value));
rightBtn.addEventListener('click', () => searchOperations.passslide('right'));
leftBtn.addEventListener('click', () => searchOperations.passslide('left'));
filterBtn.addEventListener('click', () => subWindow.openfiltertab());
perfilBtn.addEventListener('click', () => subWindow.openPerfilSubpage());