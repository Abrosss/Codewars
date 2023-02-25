function checkExam(array1, array2) {
    let score = 0
   for (let i = 0; i< array2.length; i++) {
     if(array1[i] === array2[i]) {
       score = score + 4
     }
     else if(array2[i] === '') {
       score = score + 0
     }
     else if(array1[i] !== array2[i]) {
       score = score - 1
     }
   }
    return score
  }

  function checkExam2(array1, array2) {
    let score = 0
    array2.forEach((answer, i) => {
        score += answer === '' ? 0 : array1[i] === answer ? 4 : -1;
      });
      return score < 0 ? 0 : score;
  }


  console.log(checkExam2(["a", "a", "b", "c"], ["a", "a", "b", "c"]))