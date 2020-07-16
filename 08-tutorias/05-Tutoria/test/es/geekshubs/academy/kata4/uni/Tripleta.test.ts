import { tripleta } from "../../../../../../src/es/geekshubs/academy/kata4/tripleta";

describe('Testing for kata4 - Tripleta', function () {

    
    test("Tripleta con valores 3 positivos, 0 negativos y 0 neutro da como resultado [1, 0, 0] ", ()=> {   
        const expected = [1, 0, 0]
        const result = tripleta([3, 4, 1 ])
        expect(result).toEqual(expected)
    });

    test("Tripleta con valores 1 positivos, 3 negativos y 0 neutro da como resultado [0.250000, 0.750000, 0] ", ()=> {   
        const expected = [0.25, 0.75, 0]
        const result = tripleta([-3, -4, -1, 1 ])
        expect(result).toEqual(expected)
    });

    test("Tripleta con valores 3 positivos, 0 negativos y 3 neutro da como resultado [0.500000, 0.333333, 0.166667] ", ()=> {   
        const expected = [0.500000, 0.0, 0.500000]
        const result = tripleta([3, 4, 1, 0, 0, 0 ])
        expect(result).toBe(expected)
    });

    test("Tripleta con valores 3 positivos, 2 negativos y 1 neutro da como resultado [0.500000, 0.333333, 0.166667] ", ()=> {   
        const expected = [0.500000, 0.333333, 0.166667]
        const result = tripleta([-4, 3, -9, 0, 4, 1])
        expect(result).toBe(expected)
    });

});

