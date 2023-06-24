var topKFrequent = function(nums, k) {
    let obj = {}
    for(let num of nums) {
        obj[num] = obj[num] + 1 || 1
    }
    
    return Object.keys(obj).sort((a, b) => obj[b] - obj[a]).slice(0, k)
};

console.log(topKFrequent([1,1,1,2,2,3], 2))
//Input: nums = [1,1,1,2,2,3], k = 2
//Output: [1,2]