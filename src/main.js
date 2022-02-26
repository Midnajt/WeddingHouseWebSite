window.addEventListener('DOMContentLoaded', ()=>{
    const hamburgerBtn = document.querySelector('#hamburger');
    const btn = hamburgerBtn.querySelector('.hamburger')
    const upBtn = document.querySelector('.upBtn')
    const galleryBtn = document.querySelector('#galleryBtn')

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

    lightbox.option({
        'resizeDuration': 150,
        'wrapAround': true
    })

    galleryBtn.addEventListener('click', () => {
        $("html, body").animate({ scrollTop: $('.gallery__con').offset().top -150 }, 500);
        const galleryCon = document.querySelector('.gallery__con');
        galleryCon.classList.toggle('show');

        if(galleryCon.classList.contains('show')){
            galleryBtn.innerText = 'Zwiń';
        } else {
            galleryBtn.innerText = 'Pokaż więcej';
        }
    })

    const chagneFoodBgc = () => {
        const foodImg = document.querySelector('#foodImg');
        foodImg.classList.add('animation')
        let time = getComputedStyle(foodImg).animationDuration;
        time = time.replace('s','000')
        let img = 0;

        // ***
        setInterval(() => {
            if(img >= 6){
                img = 0;
                foodImg.src = foodImg.src.replace(`food${img}`, `food${img+1}`)
            }
            foodImg.src = foodImg.src.replace(`food${img}`, `food${img+1}`)
            img++;

        }, time);
    }

    chagneFoodBgc();
})