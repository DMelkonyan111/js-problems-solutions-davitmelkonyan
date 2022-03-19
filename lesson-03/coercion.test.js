const {customParseInt, customParseFloat} = require('./coercion');

describe('parseInt function logics', () => {
    test('parseInt("11.5")', () => {
        expect(customParseInt('11.5')).toBe(11);
    })

    test('parseInt("    115     ")', () => {
        expect(customParseInt('    115     ')).toBe(115);
    })

    test('parseInt("11a")', () => {
        expect(customParseInt('11a')).toBe(11);
    })

    test('parseInt("a11")', () => {
        expect(customParseInt('a11')).toBe(NaN);
    })
})

describe('parseFloat function logics', () => {
    test('parseFloat("11.5")', () => {
        expect(customParseFloat('11.5')).toBe(11.5);
    })

    test('parseFloat("    11.5     ")', () => {
        expect(customParseFloat('    11.5     ')).toBe(11.5);
    })

    test('parseFloat("11a")', () => {
        expect(customParseFloat('11.5a')).toBe(11.5);
    })

    test('parseFloat("a11")', () => {
        expect(customParseFloat('a11.5')).toBe(NaN);
    })

    test('parseFloat("15.5.6")', () => {
        expect(customParseFloat('15.5.6')).toBe(15.5);
    })
})