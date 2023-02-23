function sumDigPow(a, b) {
let output = []
 for (let num = a; num <= b; num++) {
    let digits = num.toString().split('')
    let sum = 0
    for (let n = 0; n < digits.length; n++) {
        sum += Math.pow(digits[n], n + 1);
      }
    if(sum === num) output.push(sum)


    
 }
 return output
  }


  console.log(sumDigPow(90,150))