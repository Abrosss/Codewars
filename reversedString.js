function reverseWords(str) {
  let array = str.split(' ')
  let words = []
  array.map(word => {
      let reversed = word.split("").reverse().join("")
      words.push(reversed)
  })
  return words.join(' ')
}

console.log(reverseWords('Love you'))