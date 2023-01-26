const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.controls');
const sectionButton = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    //Button click active class
    for (let i = 0; i < sectionButton.length; i++) {
        sectionButton[i].addEventListener('click', function () {
            let currentButton = document.querySelectorAll('.active-btn');
            currentButton[0].className = currentButton[0].replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    //Sections active
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
    })

}

PageTransitions();