const hamburgermenu = document.querySelector(".hamburger-menu");
const navmenu = document.querySelector(".navmenu-links");

hamburgermenu.addEventListener("click", () => {
  hamburgermenu.classList.toggle("active");
  navmenu.classList.toggle("show");
});
