var isPalindrome = function(x) {
    let originalNumber = x.toString().split('').reverse().join('')
    return Number(originalNumber) === x ? true : false
};

console.log(isPalindrome(1212))