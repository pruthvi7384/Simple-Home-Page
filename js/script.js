  // Style to nav bar on scroll
    const nav= document.querySelector('.container-fluid nav');
    const firstSection = document.querySelector('#home');
    const sectionOneOption ={
        rootMargin: "-300px 0px 0px 0px"
    }
    const sectionOneObserver = new IntersectionObserver(function(
        entries,
        sectionOneObserver
    ){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                nav.classList.add("nav_color");
            }else{
                nav.classList.remove("nav_color");
            }
        })
    },sectionOneOption);
    sectionOneObserver.observe(firstSection);
// End nav bar onscroll functionality

// Responsive Navigation bar
    const nav_open = document.querySelector('.container-fluid nav .toggle .fa-bars');
    const nav_close = document.querySelector('.container-fluid nav .toggle .fa-times');
    const nav_menu = document.querySelector('.container-fluid nav .nav_iteam');
    nav_open.addEventListener('click',function(){
        nav_menu.style.display = 'initial';
        nav_open.style.display = 'none';
        nav_close.style.display = 'initial';
    })
    nav_close.addEventListener('click',function(){
        nav_menu.style.display = 'none';
        nav_open.style.display = 'initial';
        nav_close.style.display = 'none';
    })
// End Responsive Navigation Bar

// Exploer Functionality
    const button = document.querySelector('.expoler-container .row-expoler-btn #expoler');
    const section = document.querySelector('.expoler-container .expoler-container-display');
    button.addEventListener('click',()=>{
        button.style.display = 'none';
        section.style.display = 'initial';
    })
// End Exploer Functionality