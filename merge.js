function merge(a, b) {
	const out = [];
	let aindex = 0;
	let bindex = 0;
	while (aindex < a.length && bindex < b.length) {
		if (a[aindex] < b[bindex]) {
			out.push(a[aindex]);
			aindex++;
		} else {
			out.push(b[bindex]);
			bindex++;
		}
	}
	while (aindex < a.length) {
		out.push(a[aindex]);
		aindex++;
	}
	while (bindex < b.length) {
		out.push(b[bindex]);
		bindex++;
	}
	return out;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

module.exports = { merge, mergeSort };
