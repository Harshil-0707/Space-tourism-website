const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

function openMenu() {
  hamburger.classList.toggle("active");
  if (hamburger.classList.contains("active")) {
    hamburger.src = "../starter-code/assets/shared/icon-close.svg";
    showNavBar();
  } else {
    showNavBar();
    hamburger.src = "../starter-code/assets/shared/icon-hamburger.svg";
  }
}

function showNavBar() {
  nav.classList.toggle("show");
}
