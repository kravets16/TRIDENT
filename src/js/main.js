// menu 
const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu__hamburger');
const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    });

    menu.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        });
    });
};
/* ============================================================= */
//smooth scroll muenu
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();

        const blockId = anchor.getAttribute('href').substring(1);

        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

/* =============hero slider============ */

const swiperHero = new Swiper('.hero__wrapper .hero__swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 400,
    effect:'slide',// 'creative',//'fade'
    grabCursor: true,
    navigation: {
        nextEl: '.hero__wrapper-next',
        prevEl: '.hero__wrapper-prev',
    },
});
/* ==================main tabs================ */

const tabsBtn   = document.querySelectorAll(".tab-btn");
const tabsItems = document.querySelectorAll(".tab__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('tab-active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('tab-active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('tab__item-active');
            });
    
            currentBtn.classList.add('tab-active');
            currentTab.classList.add('tab__item-active');
        }
    });
};

document.querySelector('.tab-btn').click();

/* =======houses slider======== */
const swiperHouses = new Swiper('.houses__swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 29,
    navigation: {
        nextEl: '.tab__item-next',
        prevEl: '.tab__item-prev',
    },
});
/* ============carusel slider============ */


const swiperCarusel = new Swiper('.carusel__swiper', {
    loop: true,
    speed: 400,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
        577: {
            spaceBetween: 10,
            slidesPerView: 1.2,
        },
        767: {
            spaceBetween: 21,
            slidesPerView: 1.5,
        },
        1024: {
            spaceBetween: 21,
            slidesPerView: 1.9,
        },
    },
    navigation: {
        nextEl: '.carusel__swiper-next',
        prevEl: '.carusel__swiper-prev',
    },
});

/* ============= read more ================= */

function readMore () {
    let dots = document.getElementById('dots');
    let more = document.getElementById('more');
    let btn = document.getElementById('btn');

    if(dots.style.display === 'none') {
        dots.style.display='inline';
        btn.innerHTML='Read more';
        more.style.display='none';
    } else {
        dots.style.display='none';
        btn.innerHTML='Show less';
        more.style.display='inline';
    }
}









    
