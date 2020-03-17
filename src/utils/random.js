/**
 * Get a random element from an array
 *
 * @param {Array} arr
 * @returns {(number|string)}
 */
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export { random };
