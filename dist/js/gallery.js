//dropdown
const chooseDropdown = document.querySelectorAll('.choose-dropdown');

chooseDropdown.forEach(dropdown => {

    const chooseSelect = document.querySelector('.choose-select');
    const chooseCaret = document.querySelector('.choose-caret');
    const chooseMenu = document.querySelector('.choose-menu');
    const options = document.querySelectorAll('.choose-menu li');
    const chooseSelected = document.querySelector('.choose-selected');

    chooseSelect.addEventListener('click', () => {
        chooseSelect.classList.toggle('select-cliked');
        chooseCaret.classList.toggle('caret-rotate');
        chooseMenu.classList.toggle('menu_open');
    });

    options.forEach(option =>{
        option.addEventListener('click', () => {
            chooseSelected.innerText = option.innerText;
            chooseSelect.classList.remove('select-cliked');
            chooseCaret.classList.remove('caret-rotate');
            chooseMenu.classList.remove('menu_open');
            options.forEach(option => {
                option.classList.remove('choose-active');
            });
            option.classList.add('choose-active');
        });
    });
});

//filter

const list = document.querySelector('.choose-menu');
const items = document.querySelectorAll('.gallery__wrapper-pic');

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id 

        switch(targetId) {
            case 'all':
                getItems('gallery__wrapper-pic')
                break
            case 'garden':
                getItems(targetId)
                break
            case 'modular':
                getItems(targetId)
                break
            case 'standart':
                getItems(targetId)
                break
            case 'mediterranean':
                getItems(targetId)
                break
            case 'scandinavian':
                getItems(targetId)
                break
        }
    })
}

filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
} 


//gallery prew

let modal = document.getElementById('gallery-modal');
let img = document.getElementById('gallery-img');
let modalImg = document.getElementById('img01');
let captionText = document.getElementById('caption');

img.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.lastChild;
}

let span = document.getElementsByClassName('gallery-close')[0];
span.onclick = function () {
    modal.style.display = 'none';
}