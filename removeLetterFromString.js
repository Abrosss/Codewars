function printerError(s) {
    let excluded = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let errors = 0
    for (let i = 0; i< s.length; i++) {
      if(excluded.includes(s[i].toUpperCase())) {
        errors++
      }
    }
    return `${errors}/${s.length}`
}

function printerError2(s) {
    let excluded = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let errors = s.split('').filter(letter => excluded.includes(letter.toUpperCase()))
    return `${errors.length}/${s.length}`
}

function printerError3(s) {
    let errors = s.split('').filter(letter => letter > 'm')
    return errors.length + '/' + s.length
}
console.log(printerError3("aaaxbbbbyyhwawiwjjjwwm"))