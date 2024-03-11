const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

function getHole( index ) {
    return document.getElementById('hole' + index);
}

for (let i = 1; i < 10; i++) {
  const elementHole = getHole(i);
    elementHole.addEventListener("click", function() {
      if ( elementHole.className.includes( 'hole_has-mole' ) ) {
        deadCounter.textContent = Number(deadCounter.textContent) + 1;
        if (Number(deadCounter.textContent) == 10) alert("Победа!");
        clearStatistics();
        startNewGame();
      }
      else {
        lostCounter.textContent = Number(lostCounter.textContent) + 1;
        if (Number(lostCounter.textContent) == 5) alert("Вы проиграли!");
        clearStatistics();
        startNewGame();
      }
    });
}