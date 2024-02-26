let time = 60;

const countDownElement = document.getElementById("timer");

const interval = setInterval(updateCountDown, 1000);

function updateCountDown() {
  if (time >= 0) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor((time % 60) / 1);

    countDownElement.innerHTML = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    time--;

  } else {
    alert("Вы победили в конкурсе!");
    clearInterval(interval);
  }
}
