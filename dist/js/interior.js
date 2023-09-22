//menu 
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
//interior tabs
const tabsBtn   = document.querySelectorAll(".tab-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

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
                item.classList.remove('tabs__item-active');
            });
    
            currentBtn.classList.add('tab-active');
            currentTab.classList.add('tabs__item-active');
        }
    });
}

document.querySelector('.tab-btn').click();

//swipers
const swiperNav = new Swiper('.gallery__secondary', {
    loop: true,
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 14,
});
const swiperMain = new Swiper('.gallery__main', {
    loop: true,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 14,
    navigation: {
      nextEl: '.gallery__main-next',
      prevEl: '.gallery__main-prev',
    },
    
});
