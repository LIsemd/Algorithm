/**
 *  给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
 *  保证base和exponent不同时为0
 */

function Power(base, exponent)
{
    if(base === 0) {
        return 0
    }
    if(exponent === 0) {
        return 1
    }
    if(exponent === 1) {
        return base
    }
    let status = false, res = 1
    if(exponent < 0) {
        status = true
        exponent = -exponent
    }
    for(let i=0; i<exponent; i++) {
        res *= base
    }
    if(status) {
        res = 1 / res
    }
    return res
}
