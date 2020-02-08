/**
 *  输入两个整数m和n，计算需要改变m的二进制表示中的多少位才能得到n
 *  比如10的二进制是1010，13的二进制是1101，则输出3
 */
function changeInto(m, n) {
    let res = m ^ n
    let count = 0
    while(res) {
        res = res & (res - 1)
        count ++
    }
    return count
}

// test
// const m = 10
// const n = 13
// console.log('changeInto(m,n) :', changeInto(m,n));