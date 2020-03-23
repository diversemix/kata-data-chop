const { chop } = require('./index');

describe('Test of chop', () => {
    it('throws if not an array', () => {
        expect(() => chop(3, 'chickens')).toThrow('This is not an array');
    })

    it('does not throw if an array', () => {
        expect(() => chop(3, [])).not.toThrow('This is not an array');
    })

    it('returns -1 when empty array', () => {
        expect(chop(3, [])).toBe(-1);
    })

    it('works', () => {
        expect(chop(3, [])).toBe(-1);
        expect(chop(3, [1])).toBe(-1);
        expect(chop(1, [1])).toBe(0);
        expect(chop(1, [1, 3, 5])).toBe(0);
        expect(chop(3, [1, 3, 5])).toBe(1);
        expect(chop(5, [1, 3, 5])).toBe(2);
        expect(chop(0, [1, 3, 5])).toBe(-1);
        expect(chop(2, [1, 3, 5])).toBe(-1);
        expect(chop(4, [1, 3, 5])).toBe(-1);
        expect(chop(6, [1, 3, 5])).toBe(-1);
        expect(chop(1, [1, 3, 5, 7])).toBe(0);
        expect(chop(3, [1, 3, 5, 7])).toBe(1);
        expect(chop(5, [1, 3, 5, 7])).toBe(2);
        expect(chop(7, [1, 3, 5, 7])).toBe(3);
        expect(chop(0, [1, 3, 5, 7])).toBe(-1);
        expect(chop(2, [1, 3, 5, 7])).toBe(-1);
        expect(chop(4, [1, 3, 5, 7])).toBe(-1);
        expect(chop(6, [1, 3, 5, 7])).toBe(-1);
        expect(chop(8, [1, 3, 5, 7])).toBe(-1);
    })
});