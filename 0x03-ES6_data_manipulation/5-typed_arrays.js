export default function createInt8TypedArray(length, position, value) {
	const buffer = new ArrayBuffer(length);
	const int8View = new Int8Array(buffer);
	for (let i = 0; i < int8View.length; i++) {
		if (i === position) {
			int8View[i] = value;
		}
	}
	return buffer
}
