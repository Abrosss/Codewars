export default function bouncingBall(h,  bounce,  window) {
    let height = h
    let result = 1
    if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1
    }
    while (height >=window) {
        height = height * bounce
        if(height > window) result+=2

    }
    return result
  }

  console.log(bouncingBall(3.0, 1.0, 1.5))

  //- h = 3, bounce = 0.66, window = 1.5, result is 3

  //Float parameter "h" in meters must be greater than 0
////Float parameter "bounce" must be greater than 0 and less than 1
//Float parameter "window" must be less than h.