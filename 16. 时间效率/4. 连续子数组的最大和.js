/**
 *  输入一个整形数组，数组内有正数和负数。数组中的一个或连续多个整数组成一个子数组。
 *  求所有连续子数组的最大值，要求时间复杂度为O(n)
 */

function FindGreatestSumOfSubArray(array) {
    if(!array || !array.length) {
        return 0
    }
    let maxSum = -Infinity, currentSum = 0
    array.forEach(item => {
        currentSum = currentSum <= 0 ? item : currentSum + item
        maxSum = maxSum > currentSum ? maxSum : currentSum
    })
    return maxSum
}