function computeDepth (x){
    let arr = []
    let counter = 1
    while (arr.length < 10) {

        let number = (x * counter).toString().split('')
        number.forEach(num => {
            if (!arr.includes(num)) {
                arr.push(num);
            }})
        if (arr.length < 10) counter++

    }
    return counter
  }

  console.log(computeDepth(42))