

function fib() {
    cache ={}
    return function inner (n) {
        if (n in cache) {
            return cache[n];
          }
          if (n <= 1) {
            return n;
          } else {
            const result = inner(n - 1) + inner(n - 2);
            console.log(result)
            cache[n] = result;
        
            return result;
          }
    }
  
}
const jim = fib()
console.log(jim(5))