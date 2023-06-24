export default function containsDuplicate(nums) {
    let unique = [...new Set(nums)]
    return unique.length !== nums.length
  
};
// export default function containsDuplicate(nums) {
//     nums.sort((a,b) => a - b)

//     for(let i = 0; i<nums.length-1; i++) {
//         if(nums[i] === nums[i+1]) return true
        
//     }

//     return false
// };

console.log(containsDuplicate([1,2,3,4,5]))