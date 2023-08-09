/**
 * Adds a leading zero to single digit numbers.
 * @param {number} n - The number to prepend with a zero if necessary.
 * @returns {string} - The number with a leading zero if necessary.
 */
function prependToSingleDigit(n) {
  return n > 9 ? String(n) : "0" + n;
}

/**
 * Converts tenths of a second to an object representing hours, minutes, seconds, and milliseconds.
 * @param {number} onTenthSecond - The value representing tenths of a second.
 * @returns {object} - The time object with hours, minutes, seconds, and milliseconds.
 */
function getTimeObject(onTenthSecond) {
  let milliseconds = prependToSingleDigit(onTenthSecond % 100);
  let remaining = (onTenthSecond - milliseconds) / 100;
  let seconds = prependToSingleDigit(remaining % 60);
  remaining = (remaining - seconds) / 60;
  let mins = prependToSingleDigit(remaining % 60);
  remaining = (remaining - mins) / 60;
  let hrs = prependToSingleDigit(remaining % 60);
  //   You can add days months years to extend this functionality
  return { hrs, mins, seconds, milliseconds };
}

/**
 * Hides the specified elements by setting their display style property to "none".
 * @param {Array} elements - The elements to be hidden.
 */
function removeElements(elements) {
  elements.forEach((element) => (element.style.display = "none"));
}

/**
 * Shows the specified elements by setting their display style property to "block".
 * @param {Array} elements - The elements to be shown.
 */
function addElements(elements) {
  elements.forEach((element) => (element.style.display = "block"));
}

export { getTimeObject, removeElements, addElements };
