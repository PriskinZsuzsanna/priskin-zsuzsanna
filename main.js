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


//Toggle color
let targetTheme;
let storedTheme = localStorage.getItem('color-theme');
if (storedTheme)
    document.body.setAttribute('data-theme', storedTheme);

const colorsDiv = document.querySelectorAll('.color-toggle')

colorsDiv.forEach(toggleDiv => toggleDiv.addEventListener("click", (e) => {
    if(e.target.classList.contains('circle-beige')) {
        targetTheme = 'beige';
        document.body.setAttribute('data-theme', 'beige');
        localStorage.setItem('color-theme', targetTheme);
    } else  if(e.target.classList.contains('circle-pink')) {
        targetTheme = 'pink';
        document.body.setAttribute('data-theme', 'pink');
        localStorage.setItem('color-theme', targetTheme);
    } else  if(e.target.classList.contains('circle-blue')) {
        targetTheme = 'blue';
        document.body.setAttribute('data-theme', 'blue');
        localStorage.setItem('color-theme', targetTheme);
    } else  if(e.target.classList.contains('circle-silver')) {
        targetTheme = 'blue';
        document.body.setAttribute('data-theme', 'silver');
        localStorage.setItem('color-theme', targetTheme);
    } 
}))



