function deleteNth(arr,n){
    let map = {}
    let result = []

    for (num of arr) {
        if(map.hasOwnProperty(num)) {
            map[num]++
            if(map[num] <= n) result.push(num)
        } 
        else {
            map[num] = 1
            result.push(num)
        } 
    }
    return result
  }

console.log(deleteNth([1,1,3,7,2,2,2,2], 3))