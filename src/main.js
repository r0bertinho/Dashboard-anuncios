const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterBtn = document.getElementById('filter-btn');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

searchBtn.addEventListener('click', search);
filterBtn.addEventListener('click', openfiltertab);
leftBtn.addEventListener('click', () => passslide('left'));
rightBtn.addEventListener('click', () => passslide('right'));

function search() {
  // implement search functionality
}
function openfiltertab() {
  // implement filter tab functionality
}
function passslide(direction) {
  // implement pass slide functionality
}