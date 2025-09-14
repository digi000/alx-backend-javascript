export default function cleanSet(set, start) {
	let arr = [];
	let sl = start.length;
	if (sl === 0) {
		sl++;
	}
	set.forEach(item => {
		if (item.slice(0, sl) === start) {
			arr.push(item.slice(sl));
		}
	});
	if (arr.length > 0) {
		return arr.join('-');
	}
	return '';
}
