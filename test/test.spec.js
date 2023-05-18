describe('calcSurfTest', () => {

    it('input 50, 50', () => {
        let actual = calcSurface(50, 50);
        expect(actual).toBe(31415.926535897932)

    });

    it('input 100, 150', () => {
        let actual = calcSurface(100, 150);
        expect(actual).toBe(157079.63267948967)

    });

    it('input 35, 40', () => {
        let actual = calcSurface(35, 40);
        expect(actual).toBe(16493.361431346413)

    });

});