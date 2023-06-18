function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor((seconds%3600) / 60)
    let remainingSeconds  = seconds % 60
    let pad = (n) => n < 10 ? "0"+ n : n
    return pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds)
  }


console.log(humanReadable(3599)), '00:59:59'


  //8000 seconds = 8000 / 60 = 133.33 minutes

//133.33 minutes = 133.33 / 60 = 2.22 hours/