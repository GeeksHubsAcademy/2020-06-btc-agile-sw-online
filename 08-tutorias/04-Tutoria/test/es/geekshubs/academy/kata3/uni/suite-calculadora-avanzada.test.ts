import { factorial } from "../../../../../../src/es/geekshubs/academy/kata3/calculadora-avanzada";
import { fibonacci } from "../../../../../../src/es/geekshubs/academy/kata3/calculadora-avanzada";

describe('Testing for kata3 Calculadora avanzada', function () {

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


    test("Operación fibonacci: 0 = 0", ()=> {   
        const expected = 0
        const result = fibonacci(0)
        expect(result).toBe(expected)
    });

    test("Operación fibonacci: 1 = 1", ()=> {   
        const expected = 1
        const result = fibonacci(1)
        expect(result).toBe(expected)
    });

    test("Operación fibonacci: 10 = 55", ()=> {   
        const expected = 55
        const result = fibonacci(10)
        expect(result).toBe(expected)
    });


});