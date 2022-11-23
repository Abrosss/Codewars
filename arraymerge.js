function arrayDiff(a, b) {
  let result = a

  for(let i = 0; i<b.length; i++) {
   result = result.filter(num => num!== b[i])
  }
  return result
}
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }
//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result. It should remove all values from list a, which are present in list b keeping their order.
console.log(array_diff([1,2,3,4,5],[1,5])) 