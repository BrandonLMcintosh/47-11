/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, beg = 0, end = arr.length - 1) {
	function swap(arr, first, second) {
		[arr[first], arr[second]] = [arr[second], arr[first]];
	}

	let pivot = arr[beg];
	let swapIndex = beg;

	for (let i = beg + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIndex++;
			swap(arr, swapIndex, i);
		}
	}

	swap(arr, beg, swapIndex);
	return swapIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, beg = 0, end = arr.length - 1) {
	if (beg < end) {
		let pivotIndex = pivot(arr, beg, end);
		quickSort(arr, beg, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, end);
	}
	return arr;
}

module.exports = quickSort;
