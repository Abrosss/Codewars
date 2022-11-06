function getMiddle(s)
{
    let middle = s.length/2
    return s.length % 2 == 0 ?  s.slice(middle-1, middle+1) : s.charAt(Math.floor(middle))
}

String.prototype.toJadenCase = function () {
   return this.split(" ").map(word=>{return word[0].toUpperCase() + word.slice(1)}).join(' ')

   
  };
let stringi = "Jason loves us so much omg"
stringi = stringi.toJadenCase()

function maskify(cc) {
    return cc.slice(-4).padStart(cc.length, '*')
}
function solution(str, ending){
   return str.endsWith(ending)
  }

function order(words){
    if(words == "") return ""
    else {
        let wordsArray = words.split(' ')
        let numbers = []
        let final = []
        for(let i = 0; i<wordsArray.length; i++) {
    
            let number = wordsArray[i].match(/\d/)
            numbers.push({number: Number(number[0]),text: number.input})
            numbers.sort((a,b)=>a.number-b.number)
          
        }
       numbers.forEach(num=> final.push(num.text))
       return final.join(' ')
    }
    
  }
  function order2(words){
    return words.split(' ').sort((a,b)=>a.match(/\d/)-b.match(/\d/)).join(" ")
    }
    
  

    var isSquare = function(n){
     let root  = Math.sqrt(n)
     let square = root * root
     return square === n && Number.isInteger(root)

    }
    var isSquare = function(n){
      return Number.isInteger(Math.sqrt(n))
 
     }
   
     function XO(str) {
      let x = 0
      let o = 0
      let word = str.toLowerCase().split("")
      word.map(letter => {
        if (letter === "x") x++
        if (letter === "o") o++
      })
      return x===o
  }
  function XO(str) {
    let x = str.match(/x/gi)
    let o = str.match(/o/gi)
    return x || o ? x.length === o.length : "no x or o"
}

function sumTwoSmallestNumbers(numbers) {  

  numbers = numbers.sort((a,b) => a - b)
 return numbers[0] + numbers[1]
  
}

console.log(sumTwoSmallestNumbers([2, 10, 5]))