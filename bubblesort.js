function bubbleSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	var swapped = [true], count = 0;
	while (swapped[0]) {
		swapped[0] = false;
		for (var i = 0; i < arr.length-1; i++) {
			count++;
			SE(arr, i, swapped);
		}
	}
	console.log(count);
	return arr;
}

function SE (arr, i, swapped){
		if(arr[i] > arr[i+1]){
				var temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				swapped[0] = true;
		}	
}
		


// (function swapElems() {
// 				if (arr[i] > arr[i+1]) {
// 					var temp = arr[i];
// 					arr[i] = arr[i+1];
// 					arr[i+1] = temp;
// 					swapped = true;
// 				}
// 			})();