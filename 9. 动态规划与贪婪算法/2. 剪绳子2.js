function cutRope(number)
{
    if(number < 2) {
        return 0
    }
    if(number === 2) {
        return 1
    }
    if(number === 3) {
        return 2
    }

    // 尽可能多地剪取长度为3的绳子
    let timesOf3 = number / 3

    // 当绳子剩下4时，不能再剪去长度为3的绳子
    if(number - timesOf3 * 3 === 1) {
        timesOf3 --
    }
    let timesOf2 = (number - timesOf3 * 3) / 2
    return Math.floor(Math.pow(3, timesOf3) * Math.pow(2, timesOf2))
}