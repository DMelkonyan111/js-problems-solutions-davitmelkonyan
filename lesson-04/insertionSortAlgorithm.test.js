let {insertionSort} = require('./insertionSortAlgorithm');

describe("Insertion sort algorithm tests", () => {
    test("[2, 4, 5, 3, 1] to be [1, 2, 3, 4, 5]", () => {
        expect(insertionSort([2, 4, 5, 3, 1])).toStrictEqual([1, 2, 3, 4, 5]);
    })

    test("[1, 2, 3, 4, 5] to be [1, 2, 3, 4, 5]", () => {
        expect(insertionSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
    })

    test("[5, 4, 3, 2, 1] to be [1, 2, 3, 4, 5]", () => {
        expect(insertionSort([5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5]);
    })
})