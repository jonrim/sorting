// O(n^2)
function bubbleSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	var sorted = false;
	for (var end = arr.length; end > 0 && !sorted; end--) { // O(n)
		sorted = true;
		for (var i = 0; i < arr.length-1; i++) { // O(n-1)*O(1) = O(n-1)
			if (!inOrder(arr, i)) { // O(1)
				swap(arr, i); // O(1)
				sorted = false;
			}
		}
	}
	return arr;
}

function inOrder(arr, i) { // pure function
	return arr[i] < arr[i+1];
}

function swap(arr, i) { // function with side effects
	var temp = arr[i];
	arr[i] = arr[i+1];
	arr[i+1] = temp;
}

// function bubbleSort(arr) {
// 	if (arr.length <= 1) {
// 		return arr;
// 	}
// 	var swapped = [true];
// 	while (swapped[0]) {
// 		swapped[0] = false;
// 		for (var i = 0; i < arr.length-1; i++) {
// 			compare(arr, i, swapped);
// 		}
// 	}
// 	return arr;
// }

// function compare(arr, i, swapped) { // pure function
// 	if(arr[i] > arr[i+1]){
// 		swap(arr, i, swapped);
// 	}	
// }

// function swap(arr, i, swapped) { // function with side effects
// 	var temp = arr[i];
// 	arr[i] = arr[i+1];
// 	arr[i+1] = temp;
// 	swapped[0] = true;
// }