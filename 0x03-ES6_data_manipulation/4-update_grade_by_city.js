/**
 * Updates student grades by city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {String} city - The location.
 * @param {{
 *   studentId: Number,
 *   grade: String|Number
 * }[]} newGrades - The new grades.
 * @returns {Object[]} - Array of updated students with their grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array) {
    return students.map((student) => {
      const grade = newGrades.find((grade) => grade.studentId === student.id)?.grade || 'N/A';
      return { ...student, grade };
    }).filter((student) => student.location === city);
  }
  return [];
}
