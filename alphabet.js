function twoSort(s) {
let sorted = s.sort()
console.log(sorted[0])
let output = ''
for (let i = 0; i< sorted[0].length; i++) {
  console.log(sorted[i])
output = sorted[i] + '***'
}
  return output
}

console.log(twoSort(['love', 'sski', 'kesfsf']))