function getCount(str) {
  let vowelsCount = 0;
  for(let i = 0; i<str.length;i++){
  if(str[i].match(/[aeiou]/ig)){
    vowelsCount++
  }
}
  
  return vowelsCount;
}
