import { isPalindrome } from "../../../../../src/es/geekshubs/academy/kata2/puzzle";

describe('Testing for kata2', function () {

    test('isPalindrome - Size: 0 | \"\" === \"\"', function () {
        //Act
        const result = isPalindrome("");
        //Assert
        expect(result).toBeTruthy();
    });

    test('isPalindrome - Size: 1 | a === a', function () {
        //Act
        const result = isPalindrome("a");
        //Assert
        expect(result).toBeTruthy();
    });

    test('isPalindrome - Size: 2 | aa === aa', function () {
        //Act
        const result = isPalindrome("aa");
        //Assert
        expect(result).toBeTruthy();
    });

    test('isPalindrome - Size: 2 | ab != ba', function () {
        //Act
        const result = isPalindrome("ab");
        //Assert
        expect(result).toBeFalsy();
    });

     test('isPalindrome - Size: 2 | ba != ab', function () {
        //Act
         const result = isPalindrome("ba");
        //Assert
        expect(result).toBeFalsy();
    });

    test('isPalindrome - Size: 2 | bb === bb', function () {
        //Act
        const result = isPalindrome("bb");
        //Assert
        expect(result).toBeTruthy();
    });

    test('isPalindrome - Size: 3 |  aba === aba', function () {
        //Act
        const result = isPalindrome("aba");
        //Assert
        expect(result).toBeTruthy();
    });

    test('isPalindrome - Size: 3 | abc != cba', function () {
        //Act
        const result = isPalindrome("abc");
        //Assert
        expect(result).toBeFalsy();
    });

    test('isPalindrome - Size: 7 | rotator === rotator', function () {
        //Act
        const result = isPalindrome("rotator");
        //Assert
        expect(result).toBeTruthy();
    });

    test('isPalindrome - Size: 7 | rovggatop != potaggvor', function () {
        //Act
        const result = isPalindrome("rovggatop");
        //Assert
        expect(result).toBeFalsy();
    });

    test.each([
        undefined,
        null,
    ])('isPalindrome - Invalid input: %s', function (input) {
        // Act
        const invalidInputErrorCall = () => isPalindrome(input)
        // Assert
        const expectedError = new TypeError('Input input: must be a string value')
        expect(invalidInputErrorCall).toThrowError(expectedError)
    });

});

