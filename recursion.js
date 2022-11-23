function digitalRoot(n) {
    //is input length === 1 
    if(n.toString().length === 1) return n
    let numbers = Array.from(String(n), Number);
    let sum = numbers.reduce((acc, current) => acc+current,0)
    return digitalRoot(sum)
//make it an array [4,2]

// reduce the array and get the sum and run the function again
  }
  
  function digital_root(n) {
    return (n - 1) % 9 + 1;
  }
//   Given n, take the sum of the digits of n. 
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
//The input will be a non-negative integer.

//input => number
//if(length of the number === 1) return 

//find the sum, num.reduce
//run the function again with the sum as an argument

console.log(digital_root(4255) ) //6
digitalRoot(6)
//is input length === 1 
//make it an array [4,2]

// reduce the array and get the sum and run the function again