/**
 *  在一个长度为n+1的数组里的所有数字都在1~n的范围内，所以数组中至少有一个数字是重复的。
 *  请找出数组中任意一个重复的数字，但不能修改输入的数组。
 *  例如，如果输入长度为8的数组{2,3,5,4,3,2,6,7}，那么对应输出的重复数字2或者3
 */

function getDuplicate(numbers) {
    if(isError(numbers)) {
        return -1
    }
    let start = 1, end = numbers.length - 1
    while(end >= start) {
        let middle = start + ((end - start) >> 1)
        let count = countRange(numbers, start, middle)
        if(end === start) {
            if(count > 1) {
                return start
            }else {
                break
            }
        }
        if(count > (middle - start + 1)) {
            end = middle
        }else {
            start = middle + 1
        }
    }
    return -1
}

function countRange(numbers, start, end) {
    const length = numbers.length
    let count = 0
    for(let i=0; i<length; i++) {
        if(numbers[i] >= start && numbers[i] <= end) {
            count ++
        }
    }
    return count
}

function isError(numbers) {
    const length = numbers.length
    if(length <= 1) {
        console.log('数组长度为1，不存在重复元素');
        return true
    }
    for(let i=0; i<length; i++) {
        if(numbers[i] < 1 || numbers[i] >= length) {
            console.log('输入数组元素非法');
            return true
        }
    }
    return false
}
