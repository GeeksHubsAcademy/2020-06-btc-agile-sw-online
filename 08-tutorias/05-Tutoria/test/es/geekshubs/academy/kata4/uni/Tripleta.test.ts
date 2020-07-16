import { tripleta } from "../../../../../../src/es/geekshubs/academy/kata4/tripleta";

describe('Testing for kata4 - Tripleta', function () {

    
    test("Tripleta con valores 3 positivos, 0 negativos y 0 neutro da como resultado [1, 0, 0] ", ()=> {   
        const expected = [1, 0, 0]
        const result = tripleta([3, 4, 1 ])
        expect(result).toEqual(expected)
    });

    test("Tripleta con valores 1 positivos, 3 negativos y 0 neutro da como resultado [0.25, 0.75, 0] ", ()=> {   
        const expected = [0.25, 0.75, 0]
        const result = tripleta([-3, -4, -1, 1])
        expect(result).toEqual(expected)
    });

    test("Tripleta con valores 3 positivos, 0 negativos y 3 neutro da como resultado [0.5, 0.333333, 0.166667] ", ()=> {   
        const expected = [0.5, 0.0, 0.500000]
        const result = tripleta([3, 4, 1, 0, 0, 0 ])
        expect(result).toEqual(expected)
    });

    test("Tripleta con valores 3 positivos, 2 negativos y 1 neutro da como resultado [0.5, 0.333333, 0.166667] ", ()=> {   
        const expected = [0.5, 0.333333, 0.166667]
        const result = tripleta([-4, 3, -9, 0, 4, 1])
        expect(result).toEqual(expected)
    });

    test("Tripleta con valores 4 positivos, 3 negativos y 1 neutro da como resultado  [0.5, 0.375, 0.125] ", ()=> {   
        const expected = [0.5, 0.375, 0.125]
        const result = tripleta([4, 3, 2, 5, -9, 0, -4, -1])
        expect(result).toEqual(expected)
    });

    
    test("Tripleta con valores 0 positivos, 2 negativos y 0 neutro da como resultado [0, 1, 0] ", ()=> {   
        const expected = [0, 1, 0]
        const result = tripleta([-4 -9])
        expect(result).toEqual(expected)
    });
    
    test("Tripleta con valores 0 positivos, 0 negativos y 0 neutro da como resultado  [0, 0, 1] ", ()=> {   
        const expected = [0.0, 0.0, 1.0]
        const result = tripleta([-0, -0])
        expect(result).toEqual(expected)
    });

});

