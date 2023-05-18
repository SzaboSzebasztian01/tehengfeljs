describe('input check 1', () => {

    it('15', () => {
        let act = isGoodInput(15);
        expect(true).toBe(act);
    });
    it('"le"', () => {
        let act = isGoodInput("le");
        expect(false).toBe(act);
    });
    it('"é"', () => {
        let act = isGoodInput(100);
        expect(true).toBe(act);
    });
    it('"145s"', () => {
        let act = isGoodInput("145s");
        expect(false).toBe(act);
    });
});