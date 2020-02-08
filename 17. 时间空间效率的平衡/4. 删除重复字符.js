/**
 *  定义一个函数，删除字符串中所有重复出现的字符
 */

function deleteDuplicateChar(str) {
    if(!str) {
        return ''
    }
    let charSet = new Set()
    let res = ''
    for(let i=0; i<str.length; i++) {
        charSet.add(str.charAt(i))
    }

    charSet.forEach(char => {
        res += char
    })
    return res
}

// test
console.log('deleteDuplicateChar :', deleteDuplicateChar('google'));
