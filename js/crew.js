const dots = document.querySelectorAll('.dot');
dots[0].classList.add('bg');

dots.forEach((dot)=>{
    dot.addEventListener('click',(e)=>{
        dots.forEach((dot)=>{
            dot.classList.remove('bg');
        });
        e.currentTarget.classList.add('bg');
    });
});