import './scss/style.scss';

const h1 = document.createElement('h1');
h1.textContent = 'Try to win!';
document.body.append(h1);

const field = document.createElement('div');
field.className = 'field';
document.body.append(field);
const cellSize = 80;

const empty = {
  value: 0,
  top: 0,
  left: 0,
};

const cells = [];
cells.push(empty);

const menu = document.createElement('div');
menu.className = 'menu';
document.body.appendChild(menu);

const buttonNewGame = document.createElement('button');
buttonNewGame.className = 'button';
buttonNewGame.textContent = 'new game';
menu.appendChild(buttonNewGame);

buttonNewGame.addEventListener('click', () => {
  document.location.reload();
});

const moves = document.createElement('div');
moves.classList = 'moves';
moves.textContent = 'moves: 0';
menu.appendChild(moves);

let numbersMoves = 0;

function move(index) {
  const cell = cells[index];
  const leftDiff = Math.abs(empty.left - cell.left);
  const topDiff = Math.abs(empty.top - cell.top);

  if (leftDiff + topDiff > 1) {
    return;
  }

  numbersMoves += 1;
  moves.textContent = `moves: ${numbersMoves}`;

  cell.element.style.left = `${empty.left * cellSize}px`;
  cell.element.style.top = `${empty.top * cellSize}px`;

  const emptyLeft = empty.left;
  const emptyTop = empty.top;
  empty.left = cell.left;
  empty.top = cell.top;
  cell.left = emptyLeft;
  cell.top = emptyTop;

  const isFinished = cells.every(cell => {
    return cell.value === cell.top * 4 + cell.left;
  });

  if (isFinished) {
    document.getElementById('congratulation').style.display = 'block';
    const winner = document.createElement('h2');
    winner.textContent = 'Congratulation!!';
    field.before(winner);
    h1.remove();
  }
}

function game() {
  let numbers = [...Array(15).keys()];
  numbers.sort(() => Math.random() - 0.5);

  for (let i = 1; i <= 15; i += 1) {
    const cell = document.createElement('div');
    const value = numbers[i - 1] + 1;
    cell.className = 'cell';
    cell.innerHTML = value;

    const left = i % 4;
    const top = (i - left) / 4;

    cells.push({
      value,
      left,
      top,
      element: cell,
    });

    cell.style.left = `${left * cellSize}px`;
    cell.style.top = `${top * cellSize}px`;

    field.appendChild(cell);

    cell.addEventListener('click', () => {
      move(i);
    });

    setTimeout(() => {
      field.removeChild(cell);
    }, 300000);
  }
  localStorage.setItem('storage', JSON.stringify(numbers));
  numbers = JSON.parse(localStorage.getItem('storage'));
}
game();

function autoGame() {
  const numbers = [...Array(15).keys()];
  for (let i = 1; i <= 15; i += 1) {
    const cell = document.createElement('div');
    const value = numbers[i - 1] + 1;
    cell.className = 'cell';
    cell.innerHTML = value;

    const left = i % 4;
    const top = (i - left) / 4;

    cells.push({
      value,
      left,
      top,
      element: cell,
    });

    cell.style.left = `${left * cellSize}px`;
    cell.style.top = `${top * cellSize}px`;

    field.appendChild(cell);
  }
}

const timeOver = document.createElement('h3');
const time = document.createElement('div');
time.className = 'time';

let seconds = 300;
function setTime() {
  const min = parseInt((seconds / 60) % 60, 10);
  const sec = parseInt(seconds % 60, 10);
  time.textContent = `Game time: ${min}:${sec}`;
  seconds -= 1;
  setTimeout(setTime, 1000);
  if (seconds === 0) {
    autoGame();
    timeOver.textContent = 'Time over! Try one more time. Good luck!';
    h1.remove();
    time.remove();
  }
}
field.before(time);
field.before(timeOver);
setTime();
