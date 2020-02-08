/**
 *  数字以 0123456789101112... 的格式序列化到一个字符序列中
 *  在这个序列中，第5位（从0开始计数）是5，第13位是1，第19位是4
 *  写一个函数，求任意第n位对应的数字
 */

function digitAtIndex(str, index) {
    return index > str.length ? -1 : str.charAt(index)
}

// test
console.log('digitAtIndex(01234567891011121314) :', digitAtIndex('01234567891011121314', 120));