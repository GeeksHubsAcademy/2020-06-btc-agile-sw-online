const SALTO_LINEA = "\n";
const FIZZ = "Fizz";
const BUZZ = "Buzz";
const FIZZBUZZ = FIZZ+BUZZ;
const ZERO = 0;
const TRES = 3;
const CINCO = 5;
const CADENA_VACIA = "";

export function fizzBuzz(it: number): string {
    let res = CADENA_VACIA;

    for (let i = 1; i <= it; i++) {
        if ((i % TRES === ZERO) && (i % CINCO === ZERO)) {
            res += FIZZBUZZ;
        } else if (i % TRES === ZERO) {
            res += FIZZ;
        } else if (i % CINCO === ZERO) {
            res += BUZZ;
        } else {
            res += i;
        }

        res += SALTO_LINEA;
    }

    return res;
}
