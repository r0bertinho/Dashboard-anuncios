function addProductBubble(src, prodName, prodDes, linkProd) {
  var base=document.createElement("div");
  base.className="product";
  // Add product image
  var Pimage=document.createElement("img");
  Pimage.src=src;
  Pimage.alt="prodImg";
  base.appendChild(Pimage);
  Pimage=undefined;
  delete(Pimage);
  // Add Product name
  var Pname=document.createElement("h3");
  Pname.textContent=prodName;
  base.appendChild(Pname);
  Pname=undefined;
  delete(Pname);
  // Add product description
  var Pdes=document.createElement("p");
  Pdes.appendChild(document.createTextNode(prodDes));
  base.appendChild(Pdes);
  Pdes=undefined;
  delete(Pdes);
  // Add link to product
  var Plink=document.createElement("a");
  Plink.href=linkProd;
  Plink.appendChild(document.createTextNode("Veja agora!"));
  base.appendChild(Plink);
  Plink=undefined;
  delete(Plink);
  /*
  <div>
    <img src=src alt="prodImg">
    <h3>prodName</h3>
    <p>prodDes</p>
    <a href=linkProd>Veja agora!</a>
  </div>
  */
  return(base);
}
var prodtable=document.getElementsByClassName("prodtable");
prodtable.appendChild(addProductBubble(
    "img/notfound.png", 
    "Product", 
    "Um produto talvez até demais para você.", 
    "index.html"
  )
);
// Finalize script
prodtable=undefined;
delete(prodtable);