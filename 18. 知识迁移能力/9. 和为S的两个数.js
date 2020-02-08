/**
 *  输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，
 *  如果有多对数字的和等于S，输出两个数的乘积最小的。
 */

function FindNumbersWithSum(array, sum) {
    if(!array || !array.length || sum === null) {
        return []
    }
    let number1, number2
    for(let i=0; i<array.length; i++) {
        number1 = array[i]
        number2 = sum - array[i]
        if(array.includes(number2)) {
            return [number1, number2]
        }
    }
    return []
}

// test
console.log('FindNumbersWithSum :', FindNumbersWithSum([1,2,3,4], 5));