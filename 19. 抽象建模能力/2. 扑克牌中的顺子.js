/**
 *  从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的
 *  2~10为数字本身，A为1，J为11，Q为12，K为13，而小王和大王可以看成任意数字
 */

function IsContinuous(numbers) {
    if(!numbers || numbers.length !== 5) {
        return false
    }
    const length = numbers.length
    // 1. 数组排序
    numbers.sort((a, b) => a > b)

    // 2. 统计0的个数
    let count = 0
    numbers.forEach(item => {
        if(item === 0) {
            count ++
        }
    })
    // 3. 判断是否连续
    if(count === 0) {
        return numbers.every((elem, index) => {
            return !numbers[index + 1] || elem + 1 === numbers[index + 1]
        })
    }
    let min = count,
        max = count + 1,
        gap = 0;
    while(max < length) {
        // 出现对子，不符合
        if(numbers[min] === numbers[max]) {
            return false
        }
        gap += numbers[max] - numbers[min] - 1
        min = max
        max ++
    }
    return count >= gap
}

// test
console.log('IsContinuous() :', IsContinuous([3,0,0,0,0]));