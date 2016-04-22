function split(arr) {
	var arr2;
	if (arr.length % 2 == 0) {
		// splicing the 'arr' changes 'arr', which will make
		// arr.sort fail since arr will only have 1 element
		// by the end
		//arr2 = arr.splice(arr.length/2);
		return [arr.slice(0, arr.length/2), arr.slice(arr.length/2)];
	}
	else {
		//arr2 = arr.splice(arr.length/2+1);
		return [arr.slice(0, arr.length/2 + 1), arr.slice(arr.length/2 + 1)];
	}
	return [arr, arr2];
}

function merge(arr1, arr2) {
	return arr1.concat(arr2);
}

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	var subArrays = split(arr);
	var subArray1 = mergeSort(subArrays[0]);
	var subArray2 = mergeSort(subArrays[1]);
	return (merge(subArray1, subArray2)).sort(function comparator(a, b) {
		return a - b;
	});
}