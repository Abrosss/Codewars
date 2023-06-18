function moveZeros(arr) {
    let noZeroArray = arr.filter(num => num !== 0)
    for (let i = 0; i < arr.length; i++) {
        if (arr [i] === 0) noZeroArray.push(arr[i])
    }
    return noZeroArray
  }

  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]