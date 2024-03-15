/**
 * Returns a string of set values that start with a specific string.
 * @param {Set} set - The set of values.
 * @param {String} startString - The string to match.
 * @returns {String} - Concatenated string of matched values.
 */
export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new TypeError('Invalid arguments. Expected Set and String.');
  }
  let result = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      result += value.slice(startString.length) + '-';
    }
  }
  return result.slice(0, -1);
}
