function tribonacci(signature,n){
    let array = signature

    while (array.length < n) {
        let next = array[array.length-1] + array[array.length-2] + array[array.length-3]
        array.push(next)
    }
    return array.slice(0,n)
    
  }

console.log(tribonacci([1,1,1], 12))

