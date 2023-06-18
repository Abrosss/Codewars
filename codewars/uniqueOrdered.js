function uniqueInOrder(iterable){
    let result = []
   for (let i = 0; i< iterable.length; i++) {
    if(iterable[i] !== iterable[i+1])
    result.push(iterable[i])
   }
   return result
  }

  function uniqueInOrder2(iterable) {
    return [...iterable].filter((a, i) => a !== iterable[i+1]);
  }
 console.log( uniqueInOrder([1,2,2,3,3]))