/*import { fibonacci } from "../../../../../../src/es/geekshubs/academy/kata3/calculadora-avanzada";

jest.mock("../../../../../../src/es/geekshubs/academy/kata3/calculadora-avanzada");
const mockFibonacci = fibonacci as jest.MockedFunction<typeof fibonacci>;

describe('Testing-Mock for kata3 Calculadora avanzada', function () {

    test("(Spy) Operación sin implementacion de fibonacci: 0 = 0", ()=> {
        const expected = 0   
        const inputs = 0
        mockFibonacci.mockReturnValue(expected)
        const result = mockFibonacci(inputs)
        expect(mockFibonacci).toBeCalledWith(inputs)
    })

    
    test("(Spy) Operación sin implementacion de fibonacci: 1 = 1", ()=> {
        const expected = 1
        const inputs = 1
        mockFibonacci.mockReturnValue(expected)
        const result = mockFibonacci(inputs)
        expect(mockFibonacci).toBeCalledWith(inputs)
    })

    
    test("(Spy) Operación sin implementacion de fibonacci: 10 = 55", ()=> {
        const expected = 55
        const inputs = 10
        mockFibonacci.mockReturnValue(expected)
        const result = mockFibonacci(inputs)
        expect(mockFibonacci).toBeCalledWith(inputs)
    })

    test("(Spy) Operación sin implementacion de fibonacci: 250 = 7896325826131730509282738943634332893686268675876375", ()=> {
        const expected = 7896325826131730509282738943634332893686268675876375
        const inputs = 250
        mockFibonacci.mockReturnValue(expected)
        const result = mockFibonacci(inputs)
        expect(mockFibonacci).toBeCalledWith(inputs)
    })

});*/