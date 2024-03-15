/**
 * Updates quantities of items in a map where quantity is 1.
 * @param {Map} map - The map of items.
 * @throws {Error} - If the argument is not a map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
}
