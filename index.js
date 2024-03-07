/* eslint-disable no-unused-vars */
export const arrayLenght = (array) => {
  let r = 0;
  for (const iterator of array) {
    r++;
  }

  return r;
};

export const arrayPush = (array, ...elements) => {
  for (const element of elements) {
    array[arrayLenght(array)] = element;
  }

  return arrayLenght(array);
};

export const arrayPop = (array) => {
  const lastElement = array[array.length - 1];
  array.length -= 1;
  return lastElement;
};

export const arrayShift = (arr) => {
  const firstElement = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length--;

  return firstElement;
};

export const arrayIndexOf = (array, element) => {
  let elementIndex = -1;
  for (let i = 0; i < arrayLenght(array); i++) {
    if (element === array[i]) {
      elementIndex = i;
      break;
    }
  }

  return elementIndex;
};

export const arrayUnshift = (array, element) => {
  const newArray = [element, ...array];
  return newArray.length;
};

export const arrayMap = (array, funcio) => {
  const newArray = [];
  for (const iterator of array) {
    const element = funcio(iterator);
    arrayPush(newArray, element);
  }

  return newArray;
};

export const arrayFilter = (array, funcion) => {
  const newArray = [];
  for (const iterator of array) {
    const element = funcion(iterator);
    if (funcion(iterator) === true) {
      arrayPush(newArray, iterator);
    }
  }

  return newArray;
};

export const arrayFind2 = (array, funcion) => {
  for (const iterator of array) {
    if (funcion(iterator) === true) {
      return iterator;
    }
  }
};
// De acabar => JOIN
/* const arrayJoin = (array, e) => {
  if ((e = '')) {
    const string = array + e;
    return string;
  }
};
 */
