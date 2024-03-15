/**
 * Creates an Int8 typed array with a value at a specific position.
 * @param {Number} length - The length of the array buffer.
 * @param {Number} position - The position to add the value.
 * @param {Number} value - The value to add.
 * @returns {DataView} - The created Int8 typed array.
 */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  if (position >= 0 && position < length) {
    view.setInt8(position, value);
  } else {
    throw new Error('Position outside range');
  }
  return view;
}
