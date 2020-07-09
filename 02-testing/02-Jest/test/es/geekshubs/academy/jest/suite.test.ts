import { add } from "../../../../../src/es/geekshubs/academy/jest/add";

describe('Calucalte Add', function (){
    
    test('Tittle - cmp string ', function () {
        //Arrange
        var expected = 101;
        //Act
        var result = add(1, 100);
        //Assert
        expect(result).toBe(expected);
    });

});