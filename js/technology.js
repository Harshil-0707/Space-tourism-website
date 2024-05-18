let index = 0;
let elements = [];
const bio = document.querySelector(".bio");
const numbers = document.querySelectorAll(".numbers");
const RightImage = document.querySelector(".rightPart img");
const bodyContentRight = document.querySelector(".bodyContentRight h2");
numbers[0].classList.add("bg-color");

fetch("/starter-code/data.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.technology.length; i++) {
      elements.push(data.technology[i]);
    }
  });

numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    numbers.forEach((num) => {
      num.classList.remove("bg-color");
    });
    e.currentTarget.classList.add("bg-color");
    index = num.innerText - 1;
    bio.innerText = elements[index].description;
    bodyContentRight.innerText = elements[index].name;
    RightImage.src = elements[index].images.portrait;
  });
});
