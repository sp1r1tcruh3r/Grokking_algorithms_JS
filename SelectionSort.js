//O(n^2)
const selectionSort = arr => {
  const len = arr.length;
  
  for (let i = 0; i < len; i++) {
    let min = i; //  storing the index of minimum element

    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j; // updating the index of minimum element
      }
    }

    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]]; //swap
    }
  }
  return arr;
};

//let bs = [6,1,3,4,5,8]
//selectionSort(bs)
