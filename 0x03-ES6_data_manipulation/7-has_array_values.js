/**
 * Checks if all elements in an array exist within a set.
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array of values.
 * @returns {Boolean} - True if all elements exist, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  if (set instanceof Set && Array.isArray(array)) {
    return array.every((value) => set.has(value));
  }
  return false;
}
