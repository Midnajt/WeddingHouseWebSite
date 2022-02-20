console.log('elo');

const hamburgerBtn = document.querySelector('#hamburger');

hamburgerBtn.addEventListener('click', () => {
    const btn = hamburgerBtn.querySelector('.hamburger')
    const menuScreen = document.querySelector('.menu-screen')
    btn.classList.toggle('cross-animation')
    menuScreen.classList.toggle('show')
})




// class Controller {
//     constructor(){
//         this.init();
//     }

//     #hamburgerMenu = document.querySelector('#hamburger');

//     init(){
//         console.log('init');
//         this.addEvents();
//     }

//     addEvents(){
//         console.log('events');
//         console.log(this.#hamburgerMenu);
//         this.#hamburgerMenu.addEventListener('click', (event) => {
//             console.log('klik');
//             console.log(event.target);
//         })
//     }
// }

// const controller = new Controller();

