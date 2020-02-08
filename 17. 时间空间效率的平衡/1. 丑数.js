/**
 *  把只包含质因子2、3和5的数称作丑数（Ugly Number）。
 *  例如6、8都是丑数，但14不是，因为它包含质因子7。 
 *  习惯上我们把 1 当做是第一个丑数。
 *  求按从小到大的顺序的第N个丑数。
 */

function GetUglyNumber_Solution(index){
    if(index <= 0) {
        return 0
    }
    let uglyNumbers = [], 
        uglyIndex = 1, uglyIndex2 = 1, uglyIndex3 = 1, uglyIndex5 = 1,
        uglyNumber2 = 2,
        uglyNumber3 = 3,
        uglyNumber5 = 5
    uglyNumbers[uglyIndex] = 1
    while(uglyIndex < index) {
        uglyIndex++
        uglyNumbers[uglyIndex] = Math.min(uglyNumber2, uglyNumber3, uglyNumber5)
        while(uglyNumber2 <= uglyNumbers[uglyIndex]) {
            uglyNumber2 = uglyNumbers[uglyIndex2] * 2
            uglyIndex2++
        }
        while(uglyNumber3 <= uglyNumbers[uglyIndex]) {
            uglyNumber3 = uglyNumbers[uglyIndex3] * 3
            uglyIndex3++
        }
        while(uglyNumber5 <= uglyNumbers[uglyIndex]) {
            uglyNumber5 = uglyNumbers[uglyIndex5] * 5
            uglyIndex5++
        }
    }
    return uglyNumbers[uglyIndex]
}

// test
console.log('GetUglyNumber_Solution(3) :', GetUglyNumber_Solution(3));


// function isUglyNumber(number) {
//     while(number % 2 === 0) {
//         number /= 2
//     }
//     while(number % 3 === 0) {
//         number /= 3
//     }
//     while(number % 5 === 0) {
//         number /= 5
//     }
//     return number === 1
// }