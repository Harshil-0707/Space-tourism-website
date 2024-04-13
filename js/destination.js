const travel = document.querySelector(".travel");
const distance = document.querySelector(".distance");
const planet = document.querySelector(".rightPart h2");
const description = document.querySelector(".description");
const planets = document.querySelectorAll(".rightPart ul .planets");
planets[0].classList.add("afterbg");
let elements = [];

fetch(
  "https://Harshil-0707.github.io/Space-tourism-website/starter-code/data.json"
)
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.destinations.length; i++) {
      elements.push(data.destinations[i]);
    }
  });

planets.forEach((Currentplanet) => {
  Currentplanet.addEventListener("click", (e) => {
    e.preventDefault();
    planets.forEach((planet) => {
      planet.classList.remove("afterbg");
    });
    e.currentTarget.classList.add("afterbg");
    switch (e.target.innerText) {
      case "MOON":
        planet.innerText = elements[0].name;
        travel.innerText = elements[0].travel;
        distance.innerText = elements[0].distance;
        description.innerText = elements[0].description;
        break;
      case "MARS":
        planet.innerText = elements[1].name;
        travel.innerText = elements[1].travel;
        distance.innerText = elements[1].distance;
        description.innerText = elements[1].description;
        break;
      case "EUROPA":
        planet.innerText = elements[2].name;
        travel.innerText = elements[2].travel;
        distance.innerText = elements[2].distance;
        description.innerText = elements[2].description;
        break;
      case "TITAN":
        planet.innerText = elements[3].name;
        travel.innerText = elements[3].travel;
        distance.innerText = elements[3].distance;
        description.innerText = elements[3].description;
        break;
      default:
        break;
    }
  });
});
