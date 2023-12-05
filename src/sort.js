/* eslint-disable no-restricted-syntax */
export default function orderByProps(object, sortProps) {
  const result1 = [];
  const result2 = [];

  sortProps.forEach((sortProp) => {
    result1.push({
      key: sortProp,
      value: object[sortProp],
    });
  });

  for (const objectProp in object) {
    if (!sortProps.includes(objectProp)) {
      result2.push({
        key: objectProp,
        value: object[objectProp],
      });
    }
  }

  result2.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...result1, ...result2];
}
