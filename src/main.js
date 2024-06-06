import { LoginOperation } from './js/login.js';
import { SearchOperations } from './js/search.js';
import { SubWindow } from './js/subwin.js';

class ElementID {
  constructor() {
    let searchInput = document.getElementById('search-input');
    let searchBtn = document.getElementById('search-btn');
    let filterBtn = document.getElementById('filter-btn');
    let base = document.getElementById("prod-template");
    let prodList = document.getElementsByClassName("prodtable");
    let leftBtn = document.getElementById('left-btn');
    let rightBtn = document.getElementById('right-btn');
    let perfilBtn = document.getElementById('perfil-btn');
    this.searchInput = searchInput;
    this.searchBtn = searchBtn;
    this.filterBtn = filterBtn;
    this.base = base;
    this.prodList = prodList;
    this.leftBtn = leftBtn;
    this.rightBtn = rightBtn;
    this.perfilBtn = perfilBtn;
  }
}

let elementID = new ElementID();
let searchOperations = new SearchOperations();
let subWindow = new SubWindow();

elementID.searchBtn.addEventListener('click', () => searchOperations.search(elementID.searchInput.value));
elementID.rightBtn.addEventListener('click', () => searchOperations.passslide('right'));
elementID.leftBtn.addEventListener('click', () => searchOperations.passslide('left'));
elementID.filterBtn.addEventListener('click', () => subWindow.openfiltertab());
elementID.perfilBtn.addEventListener('click', () => subWindow.openPerfilSubpage());