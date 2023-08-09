import { getTimeObject, removeElements, addElements } from "./helper.js";

function Stopwatch() {
  let currentLap = [];
  let millisecondsPassed = 0;
  let timerRef;

  Object.defineProperty(this, "startTimer", {
    get: function () {
      timerRef = setInterval(() => {
        millisecondsPassed += 1;
        const clockData = getTimeObject(millisecondsPassed);
        const { hrs, mins, seconds, milliseconds } = clockData;
        const clockString = `${mins}:${seconds}.${milliseconds}`;
        timerElement.innerHTML = clockString;
      }, 10);
    },
  });
  Object.defineProperty(this, "stopTimer", {
    get: function () {
      clearInterval(timerRef);
    },
  });
  Object.defineProperty(this, "addLap", {
    get: function () {
      const clockData = getTimeObject(millisecondsPassed);
      currentLap.push(clockData);
    },
  });

  Object.defineProperty(this, "resetTimer", {
    get: function () {
      millisecondsPassed = 0;
      const clockString = `00:00.00`;
      timerElement.innerHTML = clockString;
      currentLap = [];
    },
  });
  Object.defineProperty(this, "getLaps", {
    get: function () {
      return currentLap;
    },
  });
}

const stopWatch = new Stopwatch();
const timerElement = document.querySelector(".stop-watch__timer");
const lapContainer = document.querySelector(".stop-watch__lap");
const lapBtn = document.querySelector(".stop-watch__btn--lap");
const startButton = document.querySelector(".stop-watch__btn--start");
const stopButton = document.querySelector(".stop-watch__btn--stop");
const resumeButton = document.querySelector(".stop-watch__btn--resume");
const resetButton = document.querySelector(".stop-watch__btn--reset");

function getLapRow(clockData) {
  const trElement = document.createElement("p");
  const { mins, seconds, milliseconds } = clockData;
  trElement.innerText = `${mins}:${seconds}.${milliseconds}`;
  return trElement;
}

startButton.addEventListener("click", function () {
  stopWatch.startTimer;
  removeElements([startButton]);
  addElements([stopButton, lapBtn]);
});

stopButton.addEventListener("click", function () {
  stopWatch.stopTimer;
  removeElements([stopButton, lapBtn]);
  addElements([resumeButton, resetButton]);
});

resumeButton.addEventListener("click", function () {
  stopWatch.startTimer;
  removeElements([resumeButton, resetButton]);
  addElements([stopButton, lapBtn]);
});

resetButton.addEventListener("click", function () {
  stopWatch.resetTimer;
  addElements([startButton]);
  removeElements([resumeButton, resetButton]);
  lapContainer.innerHTML = "";
});

lapBtn.addEventListener("click", function () {
  stopWatch.addLap;
  console.log(lapContainer);
  const lapData = stopWatch.getLaps;
  const lastElement = [...lapData].pop();
  const rowElment = getLapRow(lastElement);
  lapContainer.appendChild(rowElment);
});
