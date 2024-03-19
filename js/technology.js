const numbers = document.querySelectorAll(".numbers");
numbers[0].classList.add("bg-color");

numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    numbers.forEach((num) => {
      num.classList.remove("bg-color");
    });
    e.currentTarget.classList.add("bg-color");
  });
});
