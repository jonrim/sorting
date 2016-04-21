describe("Split Array function", function(){
	it("is able to split an array into two halves", function(){
		expect(split([1,2,3,4,5,6])).toEqual([[1,2,3],[4,5,6]]);
		expect(split([1,2,3,4,5])).toEqual([[1,2,3],[4,5]]);
	});
});

describe("Merge", function() {
	it("is able to merge two sorted arrays into one sorted array", function() {
		expect(merge([1,2], [3,4])).toEqual([1,2,3,4]);
	});
});

describe("Merge Sort", function() {
	it("returns an empty array as is", function() {
		expect(mergeSort([])).toEqual([]);
	});
	it("is able to sort an array of size 1", function() {
		expect(mergeSort([4])).toEqual([4]);
	});
	it("is able to sort an array", function() {
		expect(mergeSort([4,1,3,2])).toEqual([1,2,3,4]);
	});
});
