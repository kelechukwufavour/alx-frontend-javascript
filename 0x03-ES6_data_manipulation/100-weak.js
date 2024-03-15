/**
 * Instance of WeakMap to track queryAPI calls.
 */
export const weakMap = new WeakMap();

/**
 * Tracks the number of times queryAPI is called for each endpoint.
 * @param {Object} endpoint - The API endpoint.
 * @throws {Error} - If the number of queries is >= 5.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
