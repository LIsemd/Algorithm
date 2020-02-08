/**
 *  写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。
 */

function Add(num1, num2) {
    let sum, carry
    while(num2) {                       // 假设 1 + 3 第一轮：             第二轮：                       第三轮：
        sum = num1 ^ num2               // sum = 01 ^ 11 = 10 = 2         sum = 10 ^ 10 = 0             sum = 000 ^ 100 = 4
        carry = (num1 & num2) << 1      // carry = (01 & 11) << 1 = 2     carry = (10 & 10) << 1 = 4    carry = (000 & 100) << 1 = 0
        num1 = sum                      // num1 = 2                       num1 = 0                      num1 = 4
        num2 = carry                    // num2 = 2                       num2 = 4                      num2 = 0  break
    }
    return num1
}

console.log('Add :', Add(1,3));