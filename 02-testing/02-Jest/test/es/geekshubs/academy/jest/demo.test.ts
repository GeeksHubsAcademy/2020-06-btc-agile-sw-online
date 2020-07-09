describe.skip('basic examples', () => {
    describe('passing test examples', () => {
      test('this test pass', () => {
        let a = 2;
        const b = a * 2;
        console.log(b);
      });

      test('this test pass too', () => {
        console.log(2);
      });
    });

    describe('failing tests examples', () => {
      test('this test fail ', () => {
        let a;
        a.hola;
      });
      test('this test fail too', () => {
        throw new Error('manual error');
      });
    });

})