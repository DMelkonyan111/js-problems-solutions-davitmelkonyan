const {spiral} = require('./spiral');

describe("Spirals", () => {
    test("n = 3", () => {
        let spiral3 = [
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5]
        ]

        expect(spiral(3)).toStrictEqual(spiral3);
    })

    test("n = 4", () => {
        let spiral4 = [
            [1,  2,  3,  4],
            [12, 13, 14, 5],
            [11, 16, 15, 6],
            [10, 9,  8,  7]
        ]

        expect(spiral(4)).toStrictEqual(spiral4);
    })

    test("n = 5", () => {
        let spiral5 = [
            [1,  2,  3,  4,   5],
            [16, 17, 18, 19,  6],
            [15, 24, 25, 20,  7],
            [14, 23, 22, 21,  8],
            [13, 12, 11, 10,  9]
        ]

        expect(spiral(5)).toStrictEqual(spiral5);
    })
})