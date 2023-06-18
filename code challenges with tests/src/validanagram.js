var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    if (s.length === 1) return s === t
    const sorted = (word) => {
        return word.split('').sort().join('')
    }
    return sorted(s) === sorted(t)


};
var isAnagram2 = function (s, t) {
    if (s.length !== t.length) return false
    if (s.length === 1) return s === t
    let charMap = {}
    let word2 = Array.from(t)
    for(let i = 0; i<s.length ; i++) {   
     if(word2.includes(s[i])) {
        if (charMap.hasOwnProperty(s[i])) {
            charMap[s[i]]++
            word2.splice(word2.indexOf(s[i]), 1)
        } else {
            charMap[s[i]] = 1
            word2.splice(word2.indexOf(s[i]), 1)
        }
     }
     else return false
        
    }
    return true


};

console.log(isAnagram2('anagram', 'nagaram'))
console.log(isAnagram2('rat', 'car'))
console.log(isAnagram2('a', 'b'))