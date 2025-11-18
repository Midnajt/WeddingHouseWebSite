const hamburgerBtn = document.querySelector("#hamburger");
const btn = hamburgerBtn.querySelector(".hamburger");
const upBtn = document.querySelector(".upBtn");
const galleryBtn = document.querySelector("#galleryBtn");

hamburgerBtn.addEventListener("click", () => {
  const menuScreen = document.querySelector(".menu-screen");
  btn.classList.toggle("cross-animation");
  menuScreen.classList.toggle("show");
});

document.addEventListener("scroll", function () {
  const heightToMenu = $(".mainMenu__con").offset().top;

  if (window.scrollY >= heightToMenu) {
    btn.classList.add("bgcColor");
    upBtn.classList.add("show");
  } else {
    btn.classList.remove("bgcColor");
    upBtn.classList.remove("show");
  }
});

const moveScreen = (e) => {
  if (btn.classList.contains("cross-animation")) {
    console.log("warunek spełniony");
    hamburgerBtn.click();
  }
  const direction = e.target.dataset.direction;
  const chosenSection = document.querySelector(`.${direction}`);
  $("html, body").animate({ scrollTop: $(chosenSection).offset().top - 90 }, 500);
};

$(upBtn).click(function () {
  $("html, body").animate({ scrollTop: $(".main").offset().top }, 500);
});

lightbox.option({
  resizeDuration: 150,
  wrapAround: true,
});

galleryBtn.addEventListener("click", () => {
  $("html, body").animate({ scrollTop: $(".gallery__con").offset().top - 90 }, 500);
  const galleryCon = document.querySelector(".gallery__con");
  galleryCon.classList.toggle("show");

  if (galleryCon.classList.contains("show")) {
    galleryBtn.innerText = "Zwiń";
  } else {
    galleryBtn.innerText = "Pokaż więcej";
  }
});

// Animacja emotikonek w sekcji sylwestrowej
const casinoIcons = document.querySelectorAll(".newYear__casinoTextIcon");
if (casinoIcons.length > 0) {
  const animateRandomIcon = () => {
    // Usuń klasę sparkle ze wszystkich ikon
    casinoIcons.forEach(icon => icon.classList.remove("sparkle"));
    
    // Losowo wybierz jedną ikonę
    const randomIndex = Math.floor(Math.random() * casinoIcons.length);
    const randomIcon = casinoIcons[randomIndex];
    
    // Dodaj klasę sparkle do wybranej ikony
    randomIcon.classList.add("sparkle");
    
    // Usuń klasę po zakończeniu animacji
    setTimeout(() => {
      randomIcon.classList.remove("sparkle");
    }, 1200);
  };

  // Uruchom animację co 1-3 sekundy
  const scheduleNextAnimation = () => {
    const delay = Math.random() * 2000 + 1000; // 1-3 sekundy
    setTimeout(() => {
      animateRandomIcon();
      scheduleNextAnimation();
    }, delay);
  };

  // Rozpocznij animację
  scheduleNextAnimation();
}