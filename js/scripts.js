document.addEventListener('DOMContentLoaded', () => {
    navBarScrollSpy();
}, false);

function navBarScrollSpy(){
    let nav = document.querySelector('#navbar');
    let navLinks = document.querySelectorAll(".section-link");
    let indicator = document.querySelector(".indicator");

    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + 50;

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