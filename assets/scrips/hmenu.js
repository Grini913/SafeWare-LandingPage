// --- MENÚ HAMBURGUESA ---
let menuBtn = document.querySelector('#menu-btn');
let menuWrapper = document.querySelector('.menu-wrapper');

if (menuBtn && menuWrapper) {
  menuBtn.onclick = () => {
    menuWrapper.classList.toggle('active');
  };
}

window.onscroll = () => {
  if (menuWrapper) {
    menuWrapper.classList.remove('active');
  }
};
