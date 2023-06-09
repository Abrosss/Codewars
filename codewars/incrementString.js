function incrementString(strng) {
    let numbers = extractedLastDigits(strng)
    let incremented = numbers + 1
    return numbers === "" ? strng + "1" : strng.slice(0, strng.lastIndexOf(numbers) ) + String(incremented).padStart(numbers.length, "0")

}

function extractedLastDigits(string) {
    let result = ''
    let i = string.length - 1;
     while (i >= 0 && !isNaN(string[i])) {
        result = string[i] + result;
        i--;
    }
    return result === "" ? "" : Number(result)
}


console.log(incrementString('fo99obar99'))
  //foobar23 -> foobar24
  //foo -> foo1