var car = {
  position: ''
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
