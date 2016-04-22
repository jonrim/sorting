'use strict';
//O(nlogn)
function mergeSort(arr) { // mergeSortNumTimes*(2n + 4) steps
	if (arr.length <= 1) return arr; // 1 step
	var subArrays = split(arr), // n steps
	    left = subArrays[0], // 1 step
	    right = subArrays[1], // 1 step
			mergedLeft = mergeSort(left), // we end up repeating logn times because left is half of n
			mergedRight = mergeSort(right); // logn
	return merge(mergedLeft, mergedRight); // n steps
}

// O(n) where n is array length
function split(arr) { // array.length + 2 steps
	var center = arr.length / 2; // 1 step
	var left = arr.slice(0, center); // array.length/2 steps
	var right = arr.slice(center); // array.length/2 steps
	return [left, right]; // 1 step
}

// O(n)
function merge(left, right) {
	var merged = [],
	    leftIdx = 0,
	    rightIdx = 0,
	    leftVal,
	    rightVal;

	while (leftIdx < left.length || rightIdx < right.length) {
		leftVal = left[leftIdx];
		rightVal = right[rightIdx];
		if (leftVal < rightVal || rightVal === undefined) {
			merged.push(leftVal);
			leftIdx++;
		} else {
			merged.push(rightVal);
			rightIdx++;
		}
	}
	return merged;
}



// function split(arr) {
// 	var arr2;
// 	if (arr.length % 2 == 0) {
// 		// splicing the 'arr' changes 'arr', which will make
// 		// arr.sort fail since arr will only have 1 element
// 		// by the end
// 		//arr2 = arr.splice(arr.length/2);
// 		return [arr.slice(0, arr.length/2), arr.slice(arr.length/2)];
// 	}
// 	else {
// 		//arr2 = arr.splice(arr.length/2+1);
// 		return [arr.slice(0, arr.length/2 + 1), arr.slice(arr.length/2 + 1)];
// 	}
// 	return [arr, arr2];
// }

// function merge(arr1, arr2) {
// 	return arr1.concat(arr2);
// }

// function mergeSort(arr) {
// 	if (arr.length <= 1) {
// 		return arr;
// 	}
// 	var subArrays = split(arr);
// 	var subArray1 = mergeSort(subArrays[0]);
// 	var subArray2 = mergeSort(subArrays[1]);
// 	return (merge(subArray1, subArray2)).sort(function comparator(a, b) {
// 		return a - b;
// 	});
// }