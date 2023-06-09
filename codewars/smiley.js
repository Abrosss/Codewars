//return the total number of smiling faces in the array
function countSmileys(arr) {
    const regex = /^[:;][-~]?[)D]$/; // regular expression to match valid smiley faces
    let smileys = arr.filter(face => regex.test(face));
    return smileys.length;
  }
  console.log(countSmileys((([';D', ':-(', ':-)', ';~)']))))