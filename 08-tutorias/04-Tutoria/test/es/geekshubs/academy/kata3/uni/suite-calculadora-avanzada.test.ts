import { factorial } from "../../../../../../src/es/geekshubs/academy/kata3/calculadora-avanzada";

describe('Testing for kata3 Calculadora avanzada - factorial | https://www.omnicalculator.com/math/factorial', function () {

    test("Operación factorial: 0 = 1", ()=> {   
        const expected = 1
        const result = factorial(0)
        expect(result).toBe(expected)
    });

    test("Operación factorial: 1 = 1", ()=> {   
        const expected = 1
        const result = factorial(1)
        expect(result).toBe(expected)
    });

    test("Operación factorial: 4 = 4*3*2*1 = 24", ()=> {   
        const expected = 24
        const result = factorial(4)
        expect(result).toBe(expected)
    });

});

