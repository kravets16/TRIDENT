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

/* ======================================== */
//main tabs

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

/* document.querySelector('.tab-btn').click(); */


//==========================================







    
