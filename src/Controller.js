console.log('elo');

const hamburgerBtn = document.querySelector('#hamburger');
const btn = hamburgerBtn.querySelector('.hamburger')

hamburgerBtn.addEventListener('click', () => {
    const menuScreen = document.querySelector('.menu-screen')
    btn.classList.toggle('cross-animation')
    menuScreen.classList.toggle('show')
})

document.addEventListener('scroll', function(){
    const heightToMenu = $('.mainMenu__con').offset().top;

    if(window.scrollY >= heightToMenu){
        btn.classList.add('bgcColor');
        // włącz tutaj przycisk przewijający na górę
    } else {
        btn.classList.remove('bgcColor');
        // ukryj przycisk przewijający na górę
    }
});

const moveScreen = (e) => {

    if(hamburgerBtn.classList.contains('cross-animation')){
        hamburgerBtn.click();
    }
    const direction = e.target.dataset.direction
    const chosenSection = document.querySelector(`.${direction}`)
    $("html, body").animate({ scrollTop: $(chosenSection).offset().top }, 500);
}

// powrót na górę strony

// $(".upBtn").click(function() {
//     $("html, body").animate({ scrollTop: 0 }, 500);
//   });




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

