export const factorial = (n:number) : number => {
    return (n === 0)
    ? 1
    : n * factorial(n - 1)
}