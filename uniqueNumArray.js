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
  console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))