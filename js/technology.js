let elements = [];
let index = 0;
const bio = document.querySelector(".bio");
const numbers = document.querySelectorAll(".numbers");
const RightImage = document.querySelector(".rightPart img");
const bodyContentRight = document.querySelector(".bodyContentRight h2");
numbers[0].classList.add("bg-color");
let img = "landscape";
fetch(
  "https://Harshil-0707.github.io/Space-tourism-website/starter-code/data.json"
)
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
    // This line containes bug about right image.
    // TODO : fix image bug!!!
    RightImage.src = elements[index].images.landscape;
  });
});
