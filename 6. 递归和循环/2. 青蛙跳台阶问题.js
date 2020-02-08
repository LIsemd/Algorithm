/**
 *  一只青蛙一次可以跳上1级台阶，也可以跳上2级。
 *  求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 */
function jumpFloor(number)
{
    if(number <= 1) {
        return number
    }
    let a = 1, b = 1
    for(let i=2; i<=number; i++) {
        [a, b] = [b, a + b]
    }
    return b
}