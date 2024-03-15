/**
 * Returns a string of set values that start with a specific string.
 * @param {Set} set - The set of values.
 * @param {String} startString - The string to match.
 * @returns {String} - Concatenated string of matched values.
 */
export default function cleanSet(set, startString) {
  if (set instanceof Set) {
    return Array.from(set)
      .filter((value) => value.startsWith(startString))
      .map((value) => value.slice(startString.length))
      .join('-');
  }
  return '';
}
