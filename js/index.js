const hamburger = document.getElementById("hamburger");

function openMenu() {
  hamburger.classList.toggle("active");
  if (hamburger.classList.contains("active")) {
    hamburger.src = "../starter-code/assets/shared/icon-close.svg";
  } else {
    hamburger.src = "../starter-code/assets/shared/icon-hamburger.svg";
  }
}
