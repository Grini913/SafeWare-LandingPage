document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("navbar-toggle");
  const menu = document.getElementById("navbar-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    // cambia el ícono al cerrar/abrir
    toggle.textContent = menu.classList.contains("active") ? "✕" : "☰";
  });
});
