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
    // const heightToOffer = $('.offer').offset().top;
    // console.log(heightToOffer);

    if(window.scrollY >= heightToMenu){
        btn.classList.add('bgcColor');
        upBtn.classList.add('show');
    } else {
        btn.classList.remove('bgcColor');
        upBtn.classList.remove('show');
    }

    // if (window.scrollY >= heightToOffer){
    //     console.log('spełnił warunek');
    //     $('.offer__h2').addClass('show');
    // } else {
    //     $('.offer__h2').removeClass('show');
    // }
});

const moveScreen = (e) => {
    if(btn.classList.contains('cross-animation')){
        console.log('warunek spełniony');
        hamburgerBtn.click();
    }
    const direction = e.target.dataset.direction
    const chosenSection = document.querySelector(`.${direction}`)
    $("html, body").animate({ scrollTop: $(chosenSection).offset().top }, 500);
}

$(upBtn).click(function() {
    $("html, body").animate({ scrollTop: $('.main').offset().top }, 500);
});