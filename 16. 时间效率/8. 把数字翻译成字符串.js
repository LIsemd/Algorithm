/**
 *  给定一个数字，我们按照如下规则翻译为字符串
 *  0 = a, 1 = b, ... , 25 = z
 *  计算一个数字有多少种翻译方法
 */

function getTranslationCount(number) {
    if(number < 0) {
        return 0
    }
    return _getTranslationCount(number.toString())
}

function _getTranslationCount(str) {
    const length = str.length
    let counts = []
    counts[length-1] = 1
    for(let i=length-2; i>=0; i--) {
        let count = counts[i+1]
        let converted = str[i] * 10 + str[i+1] * 1
        if(converted >= 10 && converted <= 25) {
            if(i < length-2) {
                count += counts[i+2]
            }else {
                count += 1
            }
        }
        counts[i] = count
    }
    return counts[0]
}

// test
console.log('getTranslationCount(12258) :', getTranslationCount(12258));