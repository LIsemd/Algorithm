/**
 *  将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 
 *  数值为0或者字符串不是一个合法的数值则返回0
 */

function StrToInt(str) {
    if(!str || !str.length) {
        return 0
    }
    let res = 0,
        flag = 1,   // 标识正负
        start = 0   // 遍历起点，如果首位是符号位，则从第二位开始
    if (str[0] === '-' || str[0] === '+') {
        start = 1
        if(str[0] === '-') {
            flag = -1
        }
    }
    for (let i = start; i < str.length; i++) {
        if (!(str[i] >= '0' && str[i] <= '9')) {
            return 0;
        }
        res = res * 10 + (str[i] - '0')
    }
    return res * flag < -2147483648 || res * flag > 2147483647 ? 0 : res * flag 
}