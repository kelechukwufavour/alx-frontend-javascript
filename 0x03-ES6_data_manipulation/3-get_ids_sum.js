/**
 * Calculates the sum of student IDs.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns {Number} - Sum of student IDs.
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((sum, student) => sum + student.id, 0);
  }
  return 0;
}
