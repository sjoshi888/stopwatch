import { getTimeObject, removeElements, addElements } from "./helper.js";
/**
 * The 'code_under_test' code snippet defines a class called 'Stopwatch' that represents a stopwatch functionality.
 * It provides features like start, stop, resume, reset, and lap.
 * The stopwatch uses helper functions from the 'helper.js' file to manipulate the DOM and calculate time.
 *
 * Example Usage:
 * const stopWatch = new Stopwatch();
 *
 * The Stopwatch class has the following properties and methods:
 *
 * Properties:
 * - currentLap: An array to store lap data.
 * - millisecondsPassed: A variable to keep track of the milliseconds passed.
 * - timerRef: A reference to the setInterval timer.
 *
 * Methods:
 * - startTimer: Starts the timer by incrementing 'millisecondsPassed' every 10 milliseconds.
 *               It also updates the timer display on the webpage.
 * - stopTimer: Stops the timer by clearing the interval timer.
 * - addLap: Adds the current lap data (in the format of { hrs, mins, seconds, milliseconds }) to the 'currentLap' array.
 * - resetTimer: Resets the timer by setting 'millisecondsPassed' to 0, updating the timer display to "00:00.00",
 *               and clearing the 'currentLap' array.
 * - getLaps: Returns the 'currentLap' array.
 *
 * The code snippet also defines event listeners for buttons on the webpage:
 * - startButton: Starts the timer when clicked, hides the start button, and shows the stop and lap buttons.
 * - stopButton: Stops the timer when clicked, hides the stop and lap buttons, and shows the resume and reset buttons.
 * - resumeButton: Resumes the timer when clicked, hides the resume and reset buttons, and shows the stop and lap buttons.
 * - resetButton: Resets the timer when clicked, hides the resume and reset buttons, shows the start button, and clears the lap container.
 * - lapBtn: Adds a lap when clicked, gets the lap data from the stopwatch, creates a new lap row element, and appends it to the lap container.
 *
 * Overall, the code snippet provides a functional stopwatch with lap functionality on a webpage.
 */

function Stopwatch() {
  let currentLap = [];
  let millisecondsPassed = 0;
  let timerRef;

  Object.defineProperty(this, "startTimer", {
    set: function (callback) {
      timerRef = setInterval(() => {
        millisecondsPassed += 1;
        const clockData = getTimeObject(millisecondsPassed);
        callback(clockData);
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
const minsClock = document.querySelector(".stop-watch__timer--mins");
const secsClock = document.querySelector(".stop-watch__timer--secs");
const millSecsClock = document.querySelector(".stop-watch__timer--milliSec");

/**
 * Creates a new lap row element with the given clock data.
 * @param {Object} clockData - The clock data object containing minutes, seconds, and milliseconds.
 * @param {number} lapId - The ID of the lap.
 * @returns {HTMLElement} - The lap row element.
 */
function getLapRow(clockData, lapId) {
  const lapRowElement = document.createElement("p");
  const { mins, seconds, milliseconds } = clockData;
  lapRowElement.innerText = `Lap ${lapId}  \xa0\xa0\xa0\xa0\xa0\xa0\xa0 ${mins}:${seconds}.${milliseconds}\xa0\xa0\xa0\xa0\xa0\xa0\xa0`;
  return lapRowElement;
}

startButton.addEventListener("click", function () {
  stopWatch.startTimer = function (clockData) {
    const { hrs, mins, seconds, milliseconds } = clockData;
    const currentMins = minsClock.innerText;
    const currentSecs = secsClock.innerText;
    const currentMillSecs = millSecsClock.innerText;
    if (currentMins !== mins) {
      minsClock.innerText = mins;
    }
    if (currentSecs !== seconds) {
      secsClock.innerText = seconds;
    }
    if (currentMillSecs !== milliseconds) {
      millSecsClock.innerText = milliseconds;
    }
    // const clockString = `${mins}:${seconds}.${milliseconds}`;
    // timerElement.innerHTML = clockString;
  };
  removeElements([startButton]);
  addElements([stopButton, lapBtn]);
});

stopButton.addEventListener("click", function () {
  stopWatch.stopTimer;
  removeElements([stopButton, lapBtn]);
  addElements([resumeButton, resetButton]);
});

resumeButton.addEventListener("click", function () {
  stopWatch.startTimer = function (clockData) {
    const { hrs, mins, seconds, milliseconds } = clockData;
    const currentMins = minsClock.innerText;
    const currentSecs = secsClock.innerText;
    const currentMillSecs = millSecsClock.innerText;
    if (currentMins !== mins) {
      minsClock.innerText = mins;
    }
    if (currentSecs !== seconds) {
      secsClock.innerText = seconds;
    }
    if (currentMillSecs !== milliseconds) {
      millSecsClock.innerText = milliseconds;
    }
  };
  removeElements([resumeButton, resetButton]);
  addElements([stopButton, lapBtn]);
});

resetButton.addEventListener("click", function () {
  stopWatch.resetTimer;
  addElements([startButton]);
  removeElements([resumeButton, resetButton]);
  minsClock.innerText = "00";
  secsClock.innerText = "00";
  millSecsClock.innerText = "00";
  lapContainer.innerHTML = "";
});

lapBtn.addEventListener("click", function () {
  stopWatch.addLap;
  const lapData = stopWatch.getLaps;
  const lastElement = lapData[lapData.length - 1];
  const secondLastElement = lapData[lapData.lenght - 2];
  const rowElment = getLapRow(lastElement, lapData.length);
  lapContainer.appendChild(rowElment);
  lapContainer.scrollTop = lapContainer.scrollHeight;
});
