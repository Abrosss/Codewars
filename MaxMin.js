function minMax(arr){
  let max = Math.max(...arr)
  let min = Math.min(...arr)
  let output = []
  output.push(min)
  output.push(max)
  return [min, max]; // fix me!
}
console.log(minMax([0,1,22,5,6]))