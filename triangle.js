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
// console.log(isTriangle(7,2,2))

const nums = [1,6,7,8,9,10,15,18]

const result = []

for (let i = 0; i < nums.length; i++) 
{     if (nums[i] % 2 === 0) result.push(nums[i]) }
console.log(result)