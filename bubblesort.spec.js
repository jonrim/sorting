

describe('Bubble Sort', function() {

// beforeEach(function(){
// 	spyOn(window, 'SE').and.callthrough();
	
// });

	it('handles an empty array', function() {
		expect(bubbleSort([])).toEqual([]);
		// expect(SE.calls.count()).toEqual(0);
	});
	it('handles an array of 1', function() {
		expect(bubbleSort([2])).toEqual([2]);
	});
	it('handles an array of 2', function() {
		expect(bubbleSort([4, 2])).toEqual([2, 4]);
	});
	it('handles an array of 3', function() {
		expect(bubbleSort([4, 2, 1])).toEqual([1, 2, 4]);
		expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
		expect(bubbleSort([1, 4, 3])).toEqual([1, 3, 4]);
	});
	it('handles an array of any number', function() {
		expect(bubbleSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
		expect(bubbleSort([1,3,2,5,4])).toEqual([1,2,3,4,5]);
		expect(bubbleSort([4,25,3,16,17,10,21,14])).toEqual([3,4,10,14,16,17,21,25]);
	});
	it('handles a large array', function() {
		var arr = [];
		for (var i = 200; i > 0; i--) {
			arr.push(i);
		}
		expect(bubbleSort(arr)).toEqual(arr.sort());
	});
});