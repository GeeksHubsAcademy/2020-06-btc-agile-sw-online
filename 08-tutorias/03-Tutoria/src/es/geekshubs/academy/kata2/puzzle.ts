/**
 * Check if a provided input is a palindrome word
 *
 * Samples:
 *  '' -> ''       (T)
 *  a  -> a        (T)
 *  bu -> ub       (F)
 *  qwe -> ewq     (F)
 *  aba -> aba     (T)
 *  hola -> aloh   (F)
 *  anna -> anna   (T)
 *  civic -> civic (T)
 *  kayak -> kayak (T)
 *
 * @param   input  the word to check if is palindrome
 * @return  true when input is palindrome and false if doesn't was
 */
export function isPalindrome(input: string): boolean {
    if (typeof(input) !== 'string')
        throw new TypeError('Input input: must be a string value')

    const length = input.length - 1;

    const limit = Math.floor(length / 2) + 1
    for (let i = 0; i < limit; i++)
        if (input.charAt(i) !== input.charAt(length - i))
            return false;

    return true;
}
