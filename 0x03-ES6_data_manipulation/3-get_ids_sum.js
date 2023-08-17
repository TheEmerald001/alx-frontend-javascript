export default function getStudentIdsSum(studentsArray) {
  return studentsArray.reduce((prev, student) => prev + student.id, 0);
}
