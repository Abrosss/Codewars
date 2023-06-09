function zipWith(fn,a0,a1) {
    const length = Math.min(a0.length, a1.length)
    let output = []
    for (let i = 0; i < length; i++) {
        output[i] = fn(a0[i], a1[i]);
    }
    return  output
  }


console.log(zipWith(Math.max, [1,4,7,1,4,7,8], [4,7,1,4,7,1]))