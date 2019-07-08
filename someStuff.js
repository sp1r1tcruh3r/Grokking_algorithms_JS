const sum = (array) => (array.length === 0) ? 0 : array[0] + sum(array.slice(1)) //recursive sum of array

var sum = (array) => array.reduce((prev, next)=> prev+next, 0) //reduce-style(same shit, reduce uses recursion)
//voting as a js object
let voted = {}
const letThemVote = voter =>{

  let x = Object.keys(voted);
  if(x.includes(voter)) return 'nope, u voted';
  voted[voter]=true;
}
letThemVote('fuckkk')
letThemVote('killme')
letThemVote('killme')
letThemVote('fuckkk')
