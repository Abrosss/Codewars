function sortArray(array) {
    const odd = array.filter((num) => num % 2).sort((a,b) => a - b);
    return array.map((num) => num % 2 ? odd.shift() : num);
  }

  console.log(sortArray([ 1, 5, 11, 11, 2, 1, 111, +0 ]))