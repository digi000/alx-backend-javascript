export default function updateStudentGradeByCity(students, city, grades){
	const citySt = students.filter((student) => student.location === city)
	const ids = grades.map(student => student.studentId);
	const arr = citySt.map((student) => {
		if (ids.includes(student.id)){
			const idx = grades.findIndex(st => st.studentId === student.id)
			student.grade = grades[idx].grade
		}else {
			student.grade = 'N/A';
		}
		return student;
	})
	return arr;
}
