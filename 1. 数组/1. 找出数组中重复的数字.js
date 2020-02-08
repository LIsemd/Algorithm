/**
 *  在一个长度为n的数组里的所有数字都在0到n-1的范围内。 
 *  数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 
 *  例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
 */

function duplicate(numbers, duplication)
{
    if(isError(numbers)) {
        return false
    }
    for(let i=0; i<numbers.length; i++) {
        while(numbers[i] !== i) {
            const j = numbers[i]
            if(numbers[i] === numbers[j]) {
                duplication[0] =numbers[i]
                return true
            }
            [numbers[i],numbers[j]] = [numbers[j],numbers[i]]
        }
    }
    return false
}

function isError(numbers) {
    const length = numbers.length
    if(length <= 1) {
        console.log('数组长度为1，不存在重复元素');
        return true
    }
    for(let i=0; i<length; i++){
        if(numbers[i]<0 || numbers[i] > length-1) {
            console.log('输入数组元素非法');
            return true
        }
    }
    return false
}