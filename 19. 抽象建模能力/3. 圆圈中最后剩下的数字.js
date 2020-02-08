/**
 *  0,1,...,n-1 这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字
 *  求最后一个数字
 */

// 约瑟夫环公式-递归
function LastRemaining_Solution1(n, m) {
    if (m < 1) {
        return -1;
    }
    switch (n) {
        case 0:
            return -1;
        case 1:
            return 0;
        default:
            return (LastRemaining_Solution1(n - 1, m) + m) % n;
    }
}

// 约瑟夫环公式-循环
function LastRemaining_Solution2(n, m) {
    if (n < 1 || m < 1) {
        return -1
    }
    let last = 0
    for (let i = 2; i <= n; i++) {
        last = (last + m) % i
    }
    return last
}
// console.time('1')
console.log('LastRemaining_Solution :', LastRemaining_Solution1(5, 2));
// console.timeEnd('1')

// console.time('2')
console.log('LastRemaining_Solution :', LastRemaining_Solution2(5, 2));
// console.timeEnd('2')
