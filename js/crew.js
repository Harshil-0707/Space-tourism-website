const dots = document.querySelectorAll(".dot");
dots[0].classList.add("bg");

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

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    dots.forEach((dot) => {
      dot.classList.remove("bg");
    });
    e.currentTarget.classList.add("bg");
  });
});
