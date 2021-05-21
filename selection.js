function selectionSort(arr) {
	for (let j = 0; j < arr.length; j++) {
		let smallest = j;
		for (let i = j + 1; i < arr.length; i++) {
			if (arr[i] < arr[smallest]) smallest = i;
		}

		const temp = arr[j];
		arr[j] = arr[smallest];
		arr[smallest] = temp;
	}
	return arr;
}

module.exports = selectionSort;
