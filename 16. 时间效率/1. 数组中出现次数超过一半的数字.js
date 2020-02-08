/**
 *  数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 *  例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 *  由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 */

function MoreThanHalfNum_Solution(numbers) {
    if (!numbers || !numbers.length) {
        return 0
    }
    const length = numbers.length
    let array = []
    numbers.forEach(item => {
        if (!array[item]) {
            array[item] = 1
        } else {
            array[item]++
        }
    })
    for (let i = 0; i < array.length; i++) {
        if (array[i] && array[i] > Math.floor(length / 2)) {
            return i
        }
    }
    return 0
}

MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2])