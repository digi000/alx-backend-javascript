export default function createInt8TypedArray(length, position, value) {
	const buffer = new ArrayBuffer(length);
	const int8View = new Int8Array(buffer);
	if (position  > int8View.length) {
		throw new Error('Position Outside range')
	}
	int8View[position] = value;
	return new DataView(buffer);
}
