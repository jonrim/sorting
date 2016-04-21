function split(arr) {
	if (arr.length % 2 == 0)
		return [arr.slice(0, arr.length/2), arr.slice(arr.length/2)];
	else
		return [arr.slice(0, arr.length/2 + 1), arr.slice(arr.length/2 + 1)];
}

function merge(arr1, arr2) {
	return arr1.concat(arr2);
}

function mergeSort(arr) {

}