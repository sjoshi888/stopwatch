function prependToSingleDigit(n) {
  return n > 9 ? "" + n : "0" + n;
}

function getTimeObject(onTenthSecond) {
  let milliseconds = prependToSingleDigit(onTenthSecond % 100);
  let remaining = (onTenthSecond - milliseconds) / 100;
  let seconds = prependToSingleDigit(remaining % 60);
  remaining = (remaining - seconds) / 60;
  let mins = prependToSingleDigit(remaining % 60);
  remaining = (remaining - mins) / 60;
  let hrs = prependToSingleDigit(remaining % 60);
  remaining = (remaining - hrs) / 60;
  //   You can add days months years to extend this functionality
  return { hrs, mins, seconds, milliseconds };
}

function removeElements(elements) {
  elements.forEach((element) => (element.style.display = "none"));
}
function addElements(elements) {
  elements.forEach((element) => (element.style.display = "block"));
}
export { getTimeObject, removeElements, addElements };
