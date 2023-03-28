function gimme (triplet) {
   return triplet.indexOf([...triplet].sort((a,b) => a-b)[1])
   
  }

  console.log(gimme([2, 3, 1]))