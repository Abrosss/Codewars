var productExceptSelf = function (nums) {
  const length = nums.length;
  const result = new Array(length).fill(1); //[1,1,1,1]
  let productBefore = 1
  let productAfter = 1
  for (let i = 0; i < length; i++) { //[1,2,3,4]
    result[i] *= productBefore //[1*1, 1*1,  1*2, 1*6] => [1,1,2,6]
    productBefore *= nums[i] // 1 1*1,  1*2, 2*3
  }
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= productAfter // start from the last element in result, [1*24,1*12,2*4,6*1] => [24,12,8,6]
    productAfter *= nums[i] // 1, 1*4, 4*3, 12*2
  }
  return result //[24,12,8,6]
}

console.log(productExceptSelf([1, 2, 3, 4]))



