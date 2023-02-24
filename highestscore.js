function high(x){
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let words = x.split(' ')
let highestScore = 0
let highestScoreWord
for (const word of words) {
    let score = word.split('').reduce((acc, val) => acc + alphabet.indexOf(val) + 1, 0)
    if(score>highestScore) {
        highestScore = score
        highestScoreWord = word
    }
}
return highestScoreWord
}
// for (let i = 0; i < x.length; i++) {
//     let index = alphabet.split('').indexOf(x[i]) + 1
//     output += index
// }
// const alphabetScores = [];
// for (let i = 97; i <= 122; i++) {
//   alphabetScores.push(i - 96);
// }
//YOU CAN FIND A ORDER NUMBER LIKE THAT ^
function high1(x) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return x.split('').reduce((acc, val) => acc + alphabet.indexOf(val) + 1, 0);
  }

console.log(high('man i need a taxi up to ubud'))
