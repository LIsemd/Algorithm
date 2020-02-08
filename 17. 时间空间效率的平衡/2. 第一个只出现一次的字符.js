/**
 *  在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
 *  并返回它的位置, 如果没有则返回 -1（需要区分大小写）.
 */

function FirstNotRepeatingChar(str) {
    if(!str) {
        return -1
    }
    let map = new Map()
    let count, res
    for(let i=0; i<str.length; i++) {
        let char = str.charAt(i)
        if(map.has(char)) {
            count = map.get(char)
            map.set(char, count+1)
        }else {
            map.set(char, 1)
        }
    }
    map.forEach((value, key) => {
        if(value === 1 && !res) {
            res = key
        }
    })
    return res ? str.indexOf(res) : -1
}
