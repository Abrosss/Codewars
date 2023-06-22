var groupAnagrams = function (strs) {
    let sortedAnagrams = {}
    for (let word of strs) {
        let anagram = word.split('').sort().join('')
        sortedAnagrams[anagram] ? sortedAnagrams[anagram].push(word) : sortedAnagrams[anagram] = [word];
    }
    return Object.values(sortedAnagrams)
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

//Input: strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]/