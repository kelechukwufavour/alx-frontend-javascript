/**
 * Creates a Set from an array.
 * @param {Array} array - The input array.
 * @returns {Set} - The created Set.
 */
export default function setFromArray(array) {
  if (Array.isArray(array)) {
    return new Set(array);
  }
  return new Set();
}
