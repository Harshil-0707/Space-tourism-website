const planets = document.querySelectorAll('.rightPart ul .planets');
planets[0].classList.add('afterbg');

planets.forEach((planet)=>{
    planet.addEventListener('click',(e)=>{
        planets.forEach((planet)=>{
            planet.classList.remove('afterbg');
        });
        e.currentTarget.classList.add('afterbg');
    });
});