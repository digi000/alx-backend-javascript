export default function getStudentsByLocation(students, city) {
	const arr = students.filter((student) => student.location === city);
	return arr;
}
