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
  // Toggle the side menu
  const sideMenu = document.querySelector('.side-menu');
  sideMenu.style.display = sideMenu.style.display === 'block' ? 'none' : 'block';
}
function passslide(direction) {
  // implement pass slide functionality
}
// Finalize script
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

function addProductBubble(src, prodName, prodDes, linkProd) {
  var base = document.createElement("div");
  base.className = "product";
  // Add product image
  var Pimage = document.createElement("img");
  Pimage.src = src;
  Pimage.alt = "prodImg";
  base.appendChild(Pimage);
  Pimage = undefined;
  delete (Pimage);
  // Add Product name
  var Pname = document.createElement("h3");
  Pname.textContent = prodName;
  base.appendChild(Pname);
  Pname = undefined;
  delete (Pname);
  // Add product description
  var Pdes = document.createElement("p");
  Pdes.appendChild(document.createTextNode(prodDes));
  base.appendChild(Pdes);
  Pdes = undefined;
  delete (Pdes);
  // Add link to product
  var Plink = document.createElement("a");
  Plink.href = linkProd;
  Plink.appendChild(document.createTextNode("Veja agora!"));
  base.appendChild(Plink);
  Plink = undefined;
  delete (Plink);
  /*
  <div class="product">
    <div id="nail"></div>
    <img src="img/notfound.png" alt="prodImg">
    <h3>Produto</h3>
    <p>Um produto, talvez até demais para você.</p>
    <a href=linkProd>Veja agora!</a>
  </div>
  */
  return (base);
}

var prodtable = document.getElementsByClassName("prodtable")[0]; // Specify the index of the element
prodtable.appendChild(addProductBubble(
  "img/notfound.png",
  "Produto",
  "Um produto, talvez até demais para você.",
  "index.html"
));
// Finalize script
prodtable=undefined;
delete(prodtable);