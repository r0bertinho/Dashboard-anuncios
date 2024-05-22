const perfilBtn = document.getElementById('perfil-image');
perfilBtn.addEventListener('click', () => openPerfilSubpage())

function openPerfilSubpage() {
  const subpage = document.querySelector('.subpage-perfil');
  subpage.computedStyleMap.display='block';
  return;
}
