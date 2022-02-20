const hamburgerBtn = document.querySelector('#hamburger');
const btn = hamburgerBtn.querySelector('.hamburger')
const upBtn = document.querySelector('.upBtn')

hamburgerBtn.addEventListener('click', () => {
    const menuScreen = document.querySelector('.menu-screen')
    btn.classList.toggle('cross-animation')
    menuScreen.classList.toggle('show')
})

document.addEventListener('scroll', function(){
    const heightToMenu = $('.mainMenu__con').offset().top;

    if(window.scrollY >= heightToMenu){
        btn.classList.add('bgcColor');
        upBtn.classList.add('show');
    } else {
        btn.classList.remove('bgcColor');
        upBtn.classList.remove('show');
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

$(upBtn).click(function() {
    $("html, body").animate({ scrollTop: $('.main').offset().top }, 500);
});