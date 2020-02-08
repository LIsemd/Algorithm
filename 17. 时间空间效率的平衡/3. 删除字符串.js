/**
 *  定义一个函数，输入两个字符串，从第一个字符串中删除在第二个字符串中出现的所有字符
 */

function deleteChar(str1, str2) {
    if(!str1) {
        return ''
    }
    if(!str2) {
        return str1
    }
    let charSet = new Set()
    let res = ''
    for(let i=0; i<str2.length; i++) {
        charSet.add(str2.charAt(i))
    }
    for(let i=0; i<str1.length; i++) {
        if(!charSet.has(str1.charAt(i))) {
            res += str1.charAt(i)
        }
    }
    return res
}

// test
console.log('deleteChar :', deleteChar('We are students.', 'aeiou'));
