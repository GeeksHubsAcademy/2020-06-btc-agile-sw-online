export const factorial = (n:number) : number => {
    return (n === 0)
    ? 1
    : n * factorial(n - 1)
}

export const fibonacci = (n: number) : number => {
    if( n === 0)
        return 0;

    return (n <= 1)
    ? 1
    : fibonacci(n - 1) + fibonacci (n - 2)
  };
  