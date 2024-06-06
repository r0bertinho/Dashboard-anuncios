import { LoginOperation } from './js/login.js';
import { SearchOperations } from './js/search.js';
import { SubWindow } from './js/subwin.js';

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterBtn = document.getElementById('filter-btn');
const base = document.getElementById("prod-template");
const prodList = document.getElementsByClassName("prodtable");
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const perfilBtn = document.getElementById('perfil-btn');

let searchOperations = new SearchOperations();
let subWindow = new SubWindow();

searchBtn.addEventListener('click', () => searchOperations.search(searchInput.value));
rightBtn.addEventListener('click', () => searchOperations.passslide('right'));
leftBtn.addEventListener('click', () => searchOperations.passslide('left'));
filterBtn.addEventListener('click', () => subWindow.openfiltertab());
perfilBtn.addEventListener('click', () => subWindow.openPerfilSubpage());