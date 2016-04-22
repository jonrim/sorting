describe("Merge Sort", function(){

	beforeEach(function(){
		spyOn(window, 'mergeSort').and.callThrough();
	});

	it("is able to split an array into two halves", function(){
		expect(split([1,2,3,4,5,6])).toEqual([[1,2,3],[4,5,6]]);
		expect(split([1,2,3,4,5])).toEqual([[1,2,3],[4,5]]);
	});

	it("is able to merge two sorted arrays into one sorted array", function() {
		expect(merge([1,2], [3,4])).toEqual([1,2,3,4]);
	});

	it("returns an empty array", function() {
		expect(mergeSort([])).toEqual([]);
	});
	it("is able to sort an array of size 1", function() {
		expect(mergeSort([4])).toEqual([4]);
		expect(mergeSort.calls.count()).toEqual(1);
	});
	it("is able to sort an array", function() {
		expect(mergeSort([4,1,3,2])).toEqual([1,2,3,4]);
		expect(mergeSort.calls.count()).toEqual(7);

	});
	it("is able to sort an array of size 200", function() {
		var arr = [];
		for (var i = 200; i > 0; i--) {
			arr.push(i);
		}
		expect(mergeSort(arr)).toEqual(arr.sort(function comparator(a,b){ return a-b }));
		expect(mergeSort.calls.count()).toEqual(399);
	});

});
