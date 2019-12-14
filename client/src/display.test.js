import '@testing-library/jest-dom/extend-expect';

const display = require('./display');

describe('data function', () => {
    it('displays data', () => {
        const expected = true;
        const actual = display(true);
        expect(actual).toBe(expected);
    })
})
