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

let SubWindow = new SubWindow();