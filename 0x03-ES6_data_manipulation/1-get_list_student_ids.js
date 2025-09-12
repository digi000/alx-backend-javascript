export default function getListStudentIds(arr) {
	if (!Array.isArray(arr)) {
		return []
	}

	const studentIds = arr.map((student) => student.id );
	return studentIds;
}
