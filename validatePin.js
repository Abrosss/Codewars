function validatePIN (pin) {
    var pattern = /^\d+$/;
    return pattern.test(pin) && (pin.length === 4 ||pin.length === 6)
   

  }

  console.log(validatePIN('1234'))