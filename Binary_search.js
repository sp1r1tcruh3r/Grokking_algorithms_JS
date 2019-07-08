//O(log n);
const binarySearch = (arr, elem) =>{
  let low = 0;
  let high = arr.length - 1;
  while(low<=high){
    let mid = low + high;
    let searched = arr[mid];
    if (!arr.includes(elem)) return 'you are searching for wrong data';
    if (searched === elem) return `index of searched elem is ${mid}`;
    searched>elem ? high = mid - 1 : low = mid + 1;
  }
}
// let searchMyAss = [1, 4, 7, 9, 10, 15, 19, 22, 122, 144 ,340];
// binarySearch(searchMyAss, 3)
// binarySearch(searchMyAss, 7);
/* O(log n) => best
O(n) => simplest
O(n log n) => worse
O(n^2) => even worse
O(n!) => fuck me why use this lol
*/
//ALSO REFACTOR THIS SHIT LATER COZ PYTHON SUCKS
