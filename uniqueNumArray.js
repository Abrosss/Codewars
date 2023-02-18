function findUniq(arr) {
    let count = {}
    for (const num of arr) {
        if(count[num]) count[num]++
        else count[num] = 1
      }

  for (const [num, freq] of Object.entries(count)) {
    if (freq === 1) {
      return Number(num);
    }
  }
}
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  }
  function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }
  console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))