function isTriangle(a,b,c)
{
  if(a < 0 || b < 0 || c < 0)
   return false;
  if(a+b > c && b + c > a && c + a > b) return true
  else return false
}
function isTriangle2(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}
console.log(isTriangle(7,2,2))