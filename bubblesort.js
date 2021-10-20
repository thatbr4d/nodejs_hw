
const main = () => {
    let numbers = [33, 11, 55, 23, 44, 67, 100]
    console.log(numbers)
    bubblesort(numbers)
    console.log(numbers)
}

const bubblesort = (nums) => {
    let length = nums.length
    
    for (let i = 0; i < length - 1; i++){
        for(let j = 0; j < length - i - 1; j++)
            if(nums[j] > nums[j + 1]){
                var temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
    }
}

module.exports = { main }