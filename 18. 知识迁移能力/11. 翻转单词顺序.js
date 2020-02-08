/**
 *  输入一个英文单词，翻转句子中单词的顺序，但单词内字符的顺序不变
 *  标点符号和普通字母一样处理
 *  例如：输入 'I am a student.' 输出 'student. a am i'
 */

function ReverseSentence(str) {
    if(!str) {
        return ''
    }
    return str.split(' ').reverse().join(' ')
}

// test
console.log('ReverseSentence:', ReverseSentence('I am a student.'));