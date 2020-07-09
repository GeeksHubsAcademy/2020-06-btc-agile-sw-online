import { add } from "../../../../../src/es/geekshubs/academy/jest/add";

describe('basic test', () => {
  test('it sums integers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
  test('it sums big integers', () => {
    console.log(Number.MAX_SAFE_INTEGER);

    const result = add(9007199254740991, 1);
    expect(result).toBe(9007199254740992);
  });
  test('it sums negative integers', () => {
    const result = add(10, -2);
    expect(result).toBe(8);
  });
  test('it sums 0', () => {
    const random = Math.random();
    const result = add(random, 0);
    expect(result).toBe(random);
  });
});

describe('decimals test', () => {
  test('it sums decimals', () => {
    const result = add(0.1, 0.4);
    expect(result).toBe(0.5);
  });
  test('it sums decimals', () => {
    const result = add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3, 6);
  });
  test('it sums decimals', () => {
    const result = add(0.1, -0.2);
    expect(result).toBeCloseTo(-0.1, 6);
  });
});

/*
describe('not number inputs', () => {
  test('it sums numbers as strings', () => {
    const result = add('0.1', -0.2);
    expect(result).toBeCloseTo(-0.1, 6);
  });

  test('it returns NaN', () => {
    const result = add('not a 0.1', -0.2);
    expect(result).toBe(NaN);
  });
  test('booleans 1', () => {
    const result = add(true, 0);
    expect(result).toBe(1);
  });
  test('booleans 2', () => {
    const result = add(false, 0);
    expect(result).toBe(0);
  });
});
*/

describe.only('bach test', () => {
  test.each([
    [1,2,3],
    [-1,-2,-3],
    [-1000,500,-500],
    [0.1,0.2,0.3]
  ])
  ('add', (a,b,expected) => {
    expect(add(a,b)).toBeCloseTo(expected, 12);
  })
 test.each(
   [
     1,
     2,
     -1000,
     0.3
  ])('%# add %i sum 0', (a) => {
   expect(add(a, 0)).toBeCloseTo(a, 12);
 });
  test.each`
    a    | b    | expected
    ${'1'} | ${1} | ${2}
    ${1} | ${2} | ${3}
    ${2} | ${1} | ${3}
  `('%# add %i sum 0', ({a, b, expected}) => {
    expect(add(a, b)).toBeCloseTo(expected, 12);
  });

});