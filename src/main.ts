import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

let root:HTMLElement = document.getElementsByClassName('root');

class operation {
  constructor() {
    // implementation
  }

  search(query: string): void {
    // implementation
  }

  filterElements(filterTag: string): void {
    // implementation
  }

  passslide(direction: string): void {
    // implementation
  }

  createByTemplate(tmplt: string): void {
    // implementation
  }
}

class subWindow {
  constructor() {
    // implementation
  }

  openfiltertab(): void {
    const sideMenu: HTMLElement | null = document.querySelector('.side-menu');
    sideMenu?.style.display = sideMenu?.style.display === 'block'? 'none' : 'block';
  }

  openPerfilSubpage(): void {
    const subpage: HTMLElement | null = document.querySelector('.subpage-perfil');
    subpage?.style.display = 'block';
  }
}

let searchInput: HTMLElement | null = document.getElementById('search-input');
let searchBtn: HTMLElement | null = document.getElementById('search-btn');
let filterBtn: HTMLElement | null = document.getElementById('filter-btn');
let base: HTMLElement | null = document.getElementById("prod-template");
let prodList: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("prodtable");
let leftBtn: HTMLElement | null = document.getElementById('left-btn');
let rightBtn: HTMLElement | null = document.getElementById('right-btn');
let perfilBtn: HTMLElement | null = document.getElementById('perfil-image');
searchBtn?.addEventListener('click', () => operation.search());
rightBtn?.addEventListener('click', () => operation.passslide('right'));
leftBtn?.addEventListener('click', () => operation.passslide('left'));
filterBtn?.addEventListener('click', () => subWindow.openfiltertab());
perfilBtn?.addEventListener('click', () => subWindow.openPerfilSubpage());
