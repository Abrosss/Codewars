function squareDigits(num){
  let stringNum = num.toString()
  let squares = []
  for(let i =0; i<stringNum.length;i++){
    squares[i]=stringNum[i]*stringNum[i]
  }
  return Number(squares.join(''))
}
