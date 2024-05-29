import {LoginOperation} from 'js/login.js';
import {SubWindow} from 'js/subwin.js';
import {SearchOperations} from 'js/search.js';

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
  }
}

let ElementID = new ElementID();

ElementID.searchBtn.addEventListener('click', () => SearchOperations.search(searchInput.textContent));
ElementID.rightBtn.addEventListener('click', () => SearchOperations.passslide('right'));
ElementID.leftBtn.addEventListener('click', () => SearchOperations.passslide('left'));
ElementID.filterBtn.addEventListener('click', () => SubWindow.openfiltertab());
ElementID.perfilBtn.addEventListener('click', () => SubWindow.openPerfilSubpage());