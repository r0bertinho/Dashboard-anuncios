import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

const perfilBtn = document.getElementById('perfil-image');
perfilBtn.addEventListener('click', () => openPerfilSubpage())

function openPerfilSubpage() {
  const subpage = document.querySelector('.subpage-perfil');
  subpage.computedStyleMap.display='block';
  return;
}
