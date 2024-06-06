import { AfterViewInit, ElementRef } from '@angular/core';

class SubWindow {
  #isOpen;

  constructor(private elementRef: ElementRef) {
    this.#isOpen = false;
  }

  ngAfterViewInit() {
    // Initialize the side menu and subpage elements
    this.sideMenu = this.elementRef.nativeElement.querySelector('.side-menu');
    this.subpagePerfil = this.elementRef.nativeElement.querySelector('.subpage-perfil');
  }

  openfiltertab() {
    this.#isOpen =!this.#isOpen;
    this.sideMenu.style.display = this.#isOpen? 'block' : 'none';

    if (this.#isOpen) {
      this.sideMenu.style.width = '0%';
      setTimeout(() => {
        this.sideMenu.style.transition = 'width 0.5s';
        this.sideMenu.style.width = '25%';
      }, 10);
    } else {

    }
  }

  openPerfilSubpage() {
    this.subpagePerfil.style.display = 'block';
  }
}

class SearchOperations {
  // implementation
}

class NetOperations {
  // implementation
}

@Component({
  selector: 'app-root',
  template: '<!-- your template here -->'
})
export class AppComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    const searchInput = this.elementRef.nativeElement.querySelector('#search-input');
    const searchBtn = this.elementRef.nativeElement.querySelector('#search-btn');
    const filterBtn = this.elementRef.nativeElement.querySelector('#filter-btn');
    const base = this.elementRef.nativeElement.querySelector("#prod-template");
    const prodList = this.elementRef.nativeElement.querySelectorAll(".prodtable");
    const leftBtn = this.elementRef.nativeElement.querySelector('#left-btn');
    const rightBtn = this.elementRef.nativeElement.querySelector('#right-btn');
    const perfilBtn = this.elementRef.nativeElement.querySelector('#perfil-btn');

    let searchOperations = new SearchOperations();
    let netOperations = new NetOperations();
    let subWindow = new SubWindow(this.elementRef);

    searchBtn.addEventListener('click', () => searchOperations.search(searchInput.value));
    rightBtn.addEventListener('click', () => searchOperations.passslide('right'));
    leftBtn.addEventListener('click', () => searchOperations.passslide('left'));
    filterBtn.addEventListener('click', () => subWindow.openfiltertab());
    perfilBtn.addEventListener('click', () => subWindow.openPerfilSubpage());
  }
}
