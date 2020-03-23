const { chop } = require('./index');

describe('Test of chop', () => {
    it('works', () => {
        expect(chop(0, 5)).toBe(0);
    })
});