let clicks = 0;

const amount = document.getElementById(`clicker__counter`); //количество кликов
const img = document.getElementById(`cookie`); // куда нажимать
const speed = document.getElementById(`speed__counter`); // скорость кликов


img.onclick = countingClicks;
let originalWidth = 200; // исходный размер изображения

function countingClicks() {
  img.onclick = () => {
    clicks++;
    amount.innerHTML = clicks;
  };
}

img.addEventListener("click", () => {
  clicks++;
  resizeImage();
});

function resizeImage() {

  let originalWidth = img.offsetWidth;
  let newWidth = originalWidth;

  if(originalWidth * 2 > window.innerWidth) {
  newWidth = (window.innerWidth - 30) * 0.5;
  } else {
  newWidth = originalWidth * 2;
  }
  img.style.width = newWidth + 'px';
  }

 
  getClickSpeed = (() => {

    let lastClick = new Date().getTime(); // время последнего клика
    let clickSpeed = 0;

    document.addEventListener("click", () => {
        if ("click" === img) {
            const now = new Date().getTime();
            const timeDiff = now - lastClick;
            const secondsSinceLastClick = timeDiff / 1000;
            clickSpeed = 1 / secondsSinceLastClick;
    
            lastClick = now;
    
            document.querySelector('.speed-counter');
        }
    });
    
    return clickSpeed;
    })();