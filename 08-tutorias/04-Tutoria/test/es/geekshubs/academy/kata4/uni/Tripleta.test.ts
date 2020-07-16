import { tripleta } from "../../../../../../src/es/geekshubs/academy/kata4/tripleta";

describe('Testing for kata4 - Tripleta', function () {

    test("Operación suma: 0 + 0 = 0", ()=> {   
        const expected = 0
        const result = tripleta()
        expect(result).toBe(expected)
    });

});

