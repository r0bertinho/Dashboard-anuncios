const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', search);

function search(query) {
  return;
}

const filterBtn = document.getElementById('filter-btn');
filterBtn.addEventListener('click', openfiltertab);

function openfiltertab() {
  const sideMenu = document.querySelector('.side-menu');
  sideMenu.style.display = sideMenu.style.display === 'block' ? 'none' : 'block';
  return;
}

function filterElements(filterTag) {
  return;
}

const base=document.getElementById("prod-template");
const prodList=document.getElementsByClassName("prodtable");

function createByTemplate(tmplt) {
  return;
}

const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
leftBtn.addEventListener('click', () => passslide('left'));
rightBtn.addEventListener('click', () => passslide('right'));

function passslide(direction) {
  return;
}

const perfilBtn = document.getElementById('perfil-image');
perfilBtn.addEventListener('click', () => openPerfilSubpage())

function openPerfilSubpage() {
  const subpage = document.querySelector('.subpage-perfil');
  subpage.computedStyleMap.display='block';
  return;
}
