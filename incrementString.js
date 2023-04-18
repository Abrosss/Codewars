function incrementString(strng) {
    let numbers = ''
    let i = strng.length - 1;
    while (i >= 0 && !isNaN(strng[i])) {
        numbers = strng[i] + numbers;
        i--;
    }
    let incremented = Number(numbers) + 1
    return numbers === "" ? strng + "1" : strng.slice(0, strng.lastIndexOf(numbers) ) + String(incremented).padStart(numbers.length, "0")

}

console.log(incrementString('fo99obar99'))
  //foobar23 -> foobar24
  //foo -> foo1