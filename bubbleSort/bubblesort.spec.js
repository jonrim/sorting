function numerically(a,b) { return a - b;}
function generateArray(size, lower, upper) {
	var randomArray = [];
	while (size--) {
		var randomNum = Math.floor(lower + Math.random() * upper);
		randomArray.push(randomNum);
	}
	return randomArray;
}

describe('Bubble Sort', function() {

beforeEach(function(){
	spyOn(window, 'inOrder').and.callThrough();
	
});

	it('handles an empty array', function() {
		expect(bubbleSort([])).toEqual([]);
		expect(inOrder.calls.count()).toEqual(0);
	});
	it('handles an array of 1', function() {
		expect(bubbleSort([2])).toEqual([2]);
	});
	it('handles an array of 2', function() {
		expect(bubbleSort([4, 2])).toEqual([2, 4]);
		expect(inOrder.calls.count()).toEqual(2);
	});
	it('handles an array of 3', function() {
		expect(bubbleSort([4, 2, 1])).toEqual([1, 2, 4]);
		expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
		expect(bubbleSort([1, 4, 3])).toEqual([1, 3, 4]);
		expect(inOrder.calls.count()).toEqual(12);
	});
	it('handles an array of any number', function() {
		expect(bubbleSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
		expect(bubbleSort([1,3,2,5,4])).toEqual([1,2,3,4,5]);
		expect(bubbleSort([4,25,3,16,17,10,21,14])).toEqual([3,4,10,14,16,17,21,25]);
		expect(inOrder.calls.count()).toEqual(63);	
	});
	it('handles a large array', function() {
		var arr = [];
		for (var i = 200; i > 0; i--) {
			arr.push(i);
		}
		expect(bubbleSort(arr)).toEqual(arr.sort());
		expect(inOrder.calls.count()).toEqual(39800);
	});
	for (var i = 2; i < 103; i += 20) {
		it('sorts an array of ' + i + ' random items', function() {
			var arr = generateArray(i, 0, 100);
			var sorted = arr.slice(0).sort(numerically);
			expect(bubbleSort(arr)).toEqual(sorted);
		});
	}
});