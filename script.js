function toggleMenu() {
  const navList = document.getElementById("nav-list");
  const hamburger = document.querySelector(".hamburger");

  navList.classList.toggle("show");
  hamburger.classList.toggle("open");
}