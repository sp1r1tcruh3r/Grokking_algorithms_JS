//O(n log n)
const quickSort = arr => {
  if (!arr.length) return [];

  const [head, ...tail] = arr;
  const left = tail.filter(arrayElem => arrayElem < head);
  const right = tail.filter(arrayElem => arrayElem >= head);
  return quickSort(left).concat(head, quickSort(right));
};
