function bubbleSort(arr) {
	for (let j = 0; j < arr.length; j++) {
		let swapped = false;
		for (let i = 0; i < arr.length - j; i++) {
			if (arr[i] > arr[i + 1]) {
				const temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
		if (!swapped) break;
	}

	return arr;
}

module.exports = bubbleSort;
