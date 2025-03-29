let navbar = document.querySelector('#navbar');

let menu = document.querySelector('#menu-icon');

menu.addEventListener('click', () =>{
    navbar.classList.toggle('active');
});

menu.addEventListener('click', () =>{
    menu.classList.toggle('menu-active');
    
});

window.addEventListener('resize', () =>{
    const screenWidth = window.innerWidth;
    const breakpoint = 720;

    if(screenWidth > breakpoint) {
        navbar.classList.remove('active');
        menu.classList.remove('menu-active');
    }
})

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60, 
                behavior: 'smooth'
            });
        }
    });
});
