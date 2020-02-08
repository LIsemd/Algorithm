/**
 *  在英语中，如果两个单词中出现的字母相同，并且每个字母出现的次数也相同，那么他们互为变位词
 *  例如 evil 和 live
 *  请实现一个函数，判断输入的两个字符串是否是变位词
 */

function checkAnagram(str1, str2) {
    if(!str1 || !str2) {
        return false
    }
    let charMap = new Map()
    let count = 0, char, res = true
    for(let i=0; i<str2.length; i++) {
        char = str2.charAt(i)
        if(charMap.has(char)) {
            count = charMap.get(char)
            charMap.set(char, count+1)
        }else {
            charMap.set(char, 1)
        }
    }
    for(let i=0; i<str1.length; i++) {
        char = str1.charAt(i)
        if(charMap.has(char)) {
            count = charMap.get(char)
            charMap.set(char, count-1)
        }else {
            charMap.set(char, 1)
        }
    }
    charMap.forEach(value => {
        if(value !== 0) {
            res = false
        }
    })
    return res
}

// test
console.log('checkAnagram:', checkAnagram('silent', 'listen'));
console.log('checkAnagram:', checkAnagram('silent', 'listea'));