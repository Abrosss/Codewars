function secondSymbol(s, symbol) {
    let index = 0
    if(s.indexOf(symbol) === -1) return -1
   for (let i =0; i< s.length; i++) {
    
       if(symbol === s[i]) {
         if(index === 0) {
           index = s.indexOf(symbol)
           console.log(index)
         }
         else return s.indexOf(s[i])
       } 
     
     
   }
  }
  console.log(secondSymbol('lovel', 'l'))