/**
 *  字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部
 *  例如：输入 'abcdefg' 和 2 ; 输出 'cdefgab'
 */

function LeftRotateString(str, n) {
    if(!str || n < 0 || n > str.length) {
        return ''
    }
    return str.slice(n) + str.slice(0, n)
}

// test
console.log('LeftRotateString :', LeftRotateString('abcdefg', 2));
