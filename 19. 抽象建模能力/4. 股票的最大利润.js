/**
 *  假设把某股票的价格按时间先后顺序存储在数组内，请问买卖该股票一次可能获得的最大利润是多少？
 *  例如：一只股票的价格为 [9,11,8,5,7,12,16,14]
 *  如果我们能在价格为 5 的时候买入，价格为 16 的时候卖出，则能获得最大利润 11
 */

// 最大利润 -> 维护两个变量
function getMaxValue(numbers) {
    if (!numbers || numbers.length < 2) {
        return 0
    }
    let min = numbers[0]
    let maxValue = numbers[1] - min
    for (let i = 2; i < numbers.length; i++) {
        min = Math.min(numbers[i - 1], min)
        maxValue = Math.max(maxValue, numbers[i] - min)
    }
    return maxValue
}

// test
console.log('getMaxValue :', getMaxValue([19, 18, 8, 9, 7, 12, 15, 18]));