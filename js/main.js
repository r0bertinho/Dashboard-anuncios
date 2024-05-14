const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterBtn = document.getElementById('filter-btn');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
searchBtn.addEventListener('click', search);
filterBtn.addEventListener('click', openfiltertab);
leftBtn.addEventListener('click', () => passslide('left'));
rightBtn.addEventListener('click', () => passslide('right'));

function search(query) {
}

function filterElements(filterTag) {

}

function openfiltertab() {
  const sideMenu = document.querySelector('.side-menu');
  sideMenu.style.display = sideMenu.style.display === 'block' ? 'none' : 'block';
}

function passslide(direction) {
}

searchInput=undefined;
delete(searchInput);
searchBtn=undefined;
delete(searchBtn);
filterBtn=undefined;
delete(filterBtn);
leftBtn=undefined;
delete(leftBtn);
rightBtn=undefined;
delete(rightBtn);