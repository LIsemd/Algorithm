/**
 *  判断一个整数是否是2的整数次方
 */

function check(number) {
    if(number && !(number & (number - 1))) {
        return true
    }
    return false
}

// let number = 32
// console.log('check(number) :', check(number));