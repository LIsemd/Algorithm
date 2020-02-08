/**
 *  我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
 *  请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 */

function rectCover(number)
{
    if(number <= 1) {
        return number
    }
    let a = 1, b = 2
    for(let i=2; i<number; i++) {
        [a, b] = [b, a + b]
    }
    return b
}