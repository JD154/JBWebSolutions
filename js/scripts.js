document.addEventListener('DOMContentLoaded', () => {
    navBarScrollSpy();
    displayMobileNav();
}, false);

function navBarScrollSpy(){
    let nav = document.querySelector('#navbar');
    let navLinks = document.querySelectorAll(".section-link");
    let indicator = document.querySelector(".indicator");
    let bigHeroSection = document.querySelector('#hero').clientHeight;
    
    window.addEventListener('scroll', () => {
        const sectionPadding = 50;
        let fromTop = window.scrollY + sectionPadding;

        navLinks.forEach(link => {
            let sectionHash = document.querySelector(link.hash);
            
            if (
                sectionHash.offsetTop <= fromTop &&
                sectionHash.offsetTop + sectionHash.offsetHeight > fromTop
                ) {
                    link.classList.add("current");
                    animateIndicator(link, indicator);
              } else {
                link.classList.remove("current");
              }

        });

        if(this.scrollY <= 10) 
            nav.className = 'hero-header'; 
        else 
            nav.className = 'hero-header scroll';

        if(this.scrollY > (bigHeroSection - sectionPadding))
         nav.className = 'hero-header scroll box-shadow';
    })
}

function animateIndicator(link, indicator){
    let position = link.getBoundingClientRect()
    let indicatorWidth = position.right - position.left;

    indicator.style.width = indicatorWidth + "px";
    indicator.style.left = (link.offsetLeft) + "px";
    indicator.style.right = (link.offsetLeft  + indicatorWidth) + "px";
    indicator.classList.add("active");

    setTimeout(() => {
        indicator.classList.remove("active");
    }, 400);
}

function displayMobileNav(){
    let burgerBtn = document.querySelector(".sidenav-trigger");
    let sideNav = document.querySelector(".sidenav");
    let darkOverlay = document.querySelector(".dark-overlay");
    let sideNavLinks = document.querySelectorAll(".sidenav-links > li > a");

    burgerBtn.addEventListener('click', () => {
        sideNav.classList.add("sidenav-visible");
        darkOverlay.classList.add("overlay-visible");

        darkOverlay.addEventListener('click', () => {
            sideNav.classList.remove("sidenav-visible");
            darkOverlay.classList.remove("overlay-visible");
        }, false);

        sideNavLinks.forEach(anchor => {
            anchor.addEventListener("click", () =>{
                sideNav.classList.remove("sidenav-visible");
                darkOverlay.classList.remove("overlay-visible");
            }, false);
        });

    }, false);
}
