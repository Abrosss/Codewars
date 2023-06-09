function longestConsec(strarr, k) {
    let longest = "";
    if(k>strarr.length || k<0) return ''
    for(let i=0;i<=strarr.length-k;i++){
        let word = strarr.slice(i,i+k).join('')
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2))