/* eslint-disable no-unused-vars */
import {
  arrayLenght,
  arrayPush,
  arrayPop,
  arrayShift,
  arrayIndexOf,
  arrayUnshift,
  arrayMap,
  arrayFilter,
  arrayFind2,
} from './index';

describe('arrayLenght', () => {
  test('When parameter is [1,2,3,4,5], we expect 5 ', () => {
    const a = [1, 2, 3, 4, 5];
    const expected = 5;
    const r = arrayLenght(a);
    expect(r).toBe(expected);
  });
});

describe('arrayPush', () => {
  test('When parameter is [1,2,3], we expect [1,2,3,4] ', () => {
    const a = [1, 2, 3];
    const b = 4;
    const expected = [1, 2, 3, 4];
    const r = arrayPush(a, b);
    expect(r).toStrictEqual(expected);
  });
  test('When parameter is [1,2,3] and push 4, we expect a lenght of 4', () => {
    const a = [1, 2, 3];
    const b = 4;
    const expected = 4;
    const r = arrayPush(a, b);
    expect(r).toBe(expected);
  });
});

describe('arrayPop', () => {
  test('When parameter is [pizza, pasta, lasagna], we expect [lasagna] ', () => {
    const a = ['pizza', 'pasta', 'lasagna'];
    const expected = 'lasagna';
    const r = arrayPop(a);
    expect(r).toBe(expected);
  });
});

describe('arrayShift', () => {
  test('When parameter is [1,2,3], we expect 1 ', () => {
    const a = [1, 2, 3];
    const expected = 1;
    const r = arrayShift(a);
    expect(r).toBe(expected);
  });
});

describe('arrayFilter', () => {
  test('When parameter is [1,2,3,4,5], we expect [4,5] ', () => {
    const a = [1, 2, 3, 4, 5];
    const y = (element) => element > 4;
    const expected = [5];
    const r = arrayFilter(a, y);
    expect(r).toStrictEqual(expected);
  });
});

describe.only('arrayFind', () => {
  test('When parameter is [1,2,3,4,5], we expect 3 ', () => {
    const a = [1, 2, 3, 4, 5];
    const y = (element) => element > 2;
    const expected = 3;
    const r = arrayFind2(a, y);
    expect(r).toStrictEqual(expected);
  });
});
