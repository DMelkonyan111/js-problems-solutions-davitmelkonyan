const {fromPairs, getHead, getTail, zipObject, groupBy} = require('./objects');

describe('function fromPairs', () => {
    test("[['a', 1], ['b', 2], ['c', 3]] to be {a: 1, b: 2, c: 3}", () => {
        expect(fromPairs([['a', 1], ['b', 2], ['c', 3]])).toStrictEqual({a: 1, b: 2, c: 3})
    })

    test("[[1, 1], [2, 2], [3, 3]] to be {'1': 1, '2': 2, '3': 3}", () => {
        expect(fromPairs([[1, 1], [2, 2], [3, 3]])).toStrictEqual({'1': 1, '2': 2, '3': 3})
    })
})

describe('functions getHead and getTail', () => {
    test('getHead([1, 2, 3, 4, 5]) to be [1]', () => {
        expect(getHead([1, 2, 3, 4, 5])).toStrictEqual([1]);
    })

    test('getTail([1, 2, 3, 4, 5]) to be [2, 3, 4, 5]', () => {
        expect(getTail([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5]);
    })
})

describe('function zipObject', () => {
    test('(["a", "b"], [1, 2]) to be {a: 1, b: 2}', () => {
        expect(zipObject(["a", "b"], [1, 2])).toStrictEqual({a: 1, b: 2});
    })

    test('(["a", "b", "c], [1, 2]) to be {a: 1, b: 2, c: null}', () => {
        expect(zipObject(["a", "b", "c"], [1, 2])).toStrictEqual({a: 1, b: 2, c: null});
    })
})

describe('function groupBy', () => {
    test('([6.1, 4.2, 6.3], "Math.floor") to be {"6": [6.1, 6.3], "4": [4.2]}', () => {
        expect(groupBy([6.1, 4.2, 6.3], "Math.floor")).toStrictEqual({"6": [6.1, 6.3], "4": [4.2]});
    })

    test('([6.1, 4.2, 6.3, 6.3], "Math.floor") to be {"6": [6.1, 6.3], "4": [4.2]}', () => {
        expect(groupBy([6.1, 4.2, 6.3, 6.3], "Math.floor")).toStrictEqual({"6": [6.1, 6.3], "4": [4.2]});
    })

    test('(["one", "two", "three"], "(i) => i.length") to be {"3": ["one, "two"], "5": ["three"]}', () => {
        expect(groupBy(["one", "two", "three"], "(i) => i.length")).toStrictEqual({"3": ["one", "two"], "5": ["three"]});
    })

    test('(["one", "two", "three", "three"], "(i) => i.length") to be {"3": ["one, "two"], "5": ["three"]}', () => {
        expect(groupBy(["one", "two", "three", "three"], "(i) => i.length")).toStrictEqual({"3": ["one", "two"], "5": ["three"]});
    })
})