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
    
  

  console.log(order2("4of Fo1r pe6ople g3ood th5e the2"))
  console.log(order2(""))