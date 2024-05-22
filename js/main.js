import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

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

const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
leftBtn.addEventListener('click', () => passslide('left'));
rightBtn.addEventListener('click', () => passslide('right'));

function passslide(direction) {
  return;
}