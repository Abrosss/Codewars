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
