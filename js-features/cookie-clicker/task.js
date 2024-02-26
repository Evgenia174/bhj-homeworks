let clicks = 0;

const amount = document.getElementById(`clicker__counter`); //количество кликов
const img = document.getElementById(`cookie`); // куда нажимать
const speed = document.getElementById(`speed__counter`); // скорость кликов

let originalWidth = 200; //изначальный размер

img.onclick = countingClicks;

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
  let newWidth = img.offsetWidth; // текущий размер изображения

  if (newWidth === originalWidth) {
    originalWidth *= 2; // Удваиваем исходный размер
    newWidth = originalWidth; // Устанавливаем новый размер
  } else {
    originalWidth = originalWidth; // Обновляем исходный размер
  }
  img.style.width = originalWidth + "px"; // Устанавливаем новый размер изображения
}



/*function resizeImage() {
  button.onclick = () => {
    let newWidth = button.offsetWidth;
  if (newWidth === originalWidth) {
    originalWidth *= 2;
    newWidth = originalWidth;
  } else {
    originalWidth = newWidth;
  }
  button.style.width = newWidth + "px";
  } 
}

button.addEventListener("click", () => {
  clicks++;

  if (clicks % 2 === 0) {
    resizeImage();
  }
});*/
