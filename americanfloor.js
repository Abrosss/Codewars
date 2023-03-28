function getRealFloor(n) {
    if(n<=0) return n
    else if (n<=12) return n-1
    else if(n>12) return n-2
}

console.log(getRealFloor(13))