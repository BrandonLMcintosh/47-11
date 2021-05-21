function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
}

function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);
	for (let i = 0; i < maxDigitCount; i++) {
		let buckets = Array.from({ length: 10 }, () => []);
		for (let j = 0; j < nums.length; j++) {
			let num = nums[j];
			let digit = getDigit(num, i);
			buckets[digit].push(num);
		}
		nums = [].concat(...buckets);
	}
	return nums;
}

module.exports = { getDigit, digitCount, mostDigits, radixSort };
