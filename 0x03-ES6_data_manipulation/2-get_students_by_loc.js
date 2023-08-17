export default function getStudentsByLocation(studentsArray, city) {
  return studentsArray.filter((obj) => obj.location === city);
}
