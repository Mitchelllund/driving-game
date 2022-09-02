var car = {
  position: '',
  positionX: 0,
  positiony: 0
};

var $car = document.querySelector('#car');

document.addEventListener('keydown', rotateCar);

function rotateCar(event) {
  if (event.key === 'ArrowUp') {
    $car.className = 'up';
  }
  if (event.key === 'ArrowDown') {
    $car.className = 'down';
  }
  if (event.key === 'ArrowLeft') {
    $car.className = 'left';
  }
  if (event.key === 'ArrowRight') {
    $car.className = 'right';
  }
  car.position = $car.className;
}

document.addEventListener('keydown', startMoving);

function startMoving(event) {
  if (event.code === 'Space') {
    window.setInterval(function () {
      car.positionX += 5;
      $car.style.left = car.positionX + 'px';
    }, 16);
  }
}
