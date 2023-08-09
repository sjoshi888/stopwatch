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
