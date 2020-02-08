/**
 * 写一个函数，输入n，求斐波那契数列第n项
 */

function Fibonacci(n)
{
    if(n <= 1) {
        return n
    }
    let a = 0, b = 1
    for(let i=2; i<=n; i++) {
        [a, b] = [b, a + b]
    }
    return b
}