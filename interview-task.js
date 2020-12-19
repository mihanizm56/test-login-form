/* eslint-disable no-console */

const getTail = (head, tail = null) => ({ value: head, next: tail });

const list = getTail(5, getTail(7, getTail(12, getTail(45))));

const getValuesArray = tree => {
  const tempArray = [];

  const recursiveFillValues = obj =>
    Object.keys(obj).forEach(fieldName => {
      if (fieldName === 'value') {
        tempArray.push(obj[fieldName]);

        return;
      }

      if (obj[fieldName] && typeof obj[fieldName] === 'object') {
        recursiveFillValues(obj[fieldName]);
      }
    });

  recursiveFillValues(tree);

  return tempArray;
};

const buildTreeFromArray = items =>
  items.reduce((acc, item, index) => {
    if (index === 0) {
      return {
        ...acc,
        value: item,
        next: buildTreeFromArray(items.slice(1)),
      };
    }

    return acc;
  }, null);

const func = testTree => {
  // получаем прямой список значений
  const valuesArray = getValuesArray(testTree);

  // получаем отсортированный список значений
  const sortedValuesArray = valuesArray.sort((a, b) => b - a);

  // строим дерево
  const resultTree = buildTreeFromArray(sortedValuesArray);

  return resultTree;
};

console.log(func(list)); // {"value":45,"next":{"value":12,"next":{"value":7,"next":{"value":5,"next":null}}}}
