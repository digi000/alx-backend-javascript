export default function hasValuesFromArray(set, arr) {
	let i = 0;
	arr.forEach(item => {
		set.forEach(item1 => {
			if (item === item1) {
				i+=1;
			}
		})
	})
	if (i === arr.length){
		return true;
	}
	return false;
}
