//Scroll -sticky nav

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50)
});


//Animate on scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// Portfolio Pop-up

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-project-btn')) {
        togglePortfolioPopup();
        document.querySelector('.portfolio-popup').scrollTo(0, 0)
        portfolioItemDetails(e.target.parentElement);
    }
});
function togglePortfolioPopup() {
    document.querySelector('.portfolio-popup').classList.toggle('open');
    document.body.classList.toggle('hide-scrolling');
    document.querySelector('main').classList.toggle('fade-out');
};

//close icon
document.querySelector('.pp-close').addEventListener('click', togglePortfolioPopup);

//outside click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('pp-inner')) {
        togglePortfolioPopup()
    }
})

function portfolioItemDetails(portfolioItem) {
    document.querySelector('.pp-thumbnail img').src =
        portfolioItem.querySelector('.portfolio-item-thumbnail img').src;
    document.querySelector('.pp-header h3').innerHTML =
        portfolioItem.querySelector('h3').innerText;
    document.querySelector('.pp-body').innerHTML =
        portfolioItem.querySelector('.portfolio-item-details').innerHTML;
}

// Menu Pop-up
/*
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu')) {
        toggleMenuPopup();
        document.querySelector('.menu-popup').scrollTo(0, 0)
    }
});

function toggleMenuPopup() {
    document.querySelector('.menu-popup').classList.toggle('open');
    document.body.classList.toggle('hide-scrolling');
    document.querySelector('.main').classList.toggle('fade-out');
};

//close icon
document.querySelector('.close-menu').addEventListener('click', () => {
    toggleMenuPopup()
    document.querySelector('.menu-popup').scrollTo(0, 0)
});
//outside click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-inner')) {
        toggleMenuPopup()
        document.querySelector('.menu-popup').scrollTo(0, 0)
    }
})*/

//Menu



const menu = document.querySelector(".menu")
const menuIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".close-icon")


menuIcon.addEventListener("click", openMenu)
closeIcon.addEventListener("click", closeMenu)
menu.addEventListener("click", closeMenu)

function openMenu (e) {
    menu.classList.add("show")
}
function closeMenu (e) {
    menu.classList.remove("show")
}



