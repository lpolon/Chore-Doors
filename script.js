/* eslint-disable default-case */
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');

const startButton = document.getElementById('start');

const botDoorPath =
  'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

const beachDoorPath =
  'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

const spaceDoorPath =
  'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

const closedDoorPath =
  'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

let currentlyPlaying = true;

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  switch (choreDoor) {
    case 0:
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 1:
      openDoor1 = beachDoorPath;
      openDoor2 = botDoorPath;
      openDoor3 = spaceDoorPath;
      break;
    case 2:
      openDoor1 = spaceDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = botDoorPath;
      break;
  }
};

const isBot = (doorImage) => {
  if (doorImage.src === botDoorPath) return true;
  return false;
};

const isClicked = (doorImage) => {
  if (doorImage.src === closedDoorPath) {
    return false;
  }
  return true;
};

const playDoor = (doorImage) => {
  numClosedDoors -= 1;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(doorImage)) {
    gameOver('lose');
  }
};

const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
    currentlyPlaying = false;
  } else if (status === 'lose') {
    startButton.innerHTML = 'You lose! Play again?';
    currentlyPlaying = false;
  }
};

doorImage1.onclick = () => {
  if (currentlyPlaying === true && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};
doorImage2.onclick = () => {
  if (currentlyPlaying === true && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};
doorImage3.onclick = () => {
  if (currentlyPlaying === true && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

const startRound = () => {
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Good luck!';
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  randomChoreDoorGenerator();
};

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
};

startRound();
