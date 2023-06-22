export default function twoSum(numbers, target) {

    for (let i = 0; i< numbers.length; i++) {
        let difference = target - numbers[i]
        if(numbers.includes(difference) && numbers.lastIndexOf(difference) !== i) return [i, numbers.lastIndexOf(difference)]
    }

  
}





console.log(twoSum([-444, 727, 349, -469], -913))
