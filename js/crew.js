let elements = [];
const dots = document.querySelectorAll(".dot");
const rightImg = document.querySelector(".rightImg");
const description = document.querySelector(".para p");
const crewRole = document.querySelector(".name-des h3");
const crewName = document.querySelector(".name-des h2");

dots[0].classList.add("bg");
fetch("/starter-code/data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.crew.length; i++) {
      elements.push(data.crew[i]);
    }
  });

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    dots.forEach((dot) => {
      dot.classList.remove("bg");
    });
    e.currentTarget.classList.add("bg");
    const index = e.currentTarget.getAttribute("data-value");
    crewRole.innerText = elements[index].role;
    crewName.innerText = elements[index].name;
    rightImg.src = elements[index].images.webp;
    description.innerText = elements[index].bio;
  });
});
