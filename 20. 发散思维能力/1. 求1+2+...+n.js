/**
 *  求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 */

function Sum_Solution(n) {
    if(!n) {
        return 0
    }
    return n + Sum_Solution(n-1)
}

console.log('Sum_Solution :', Sum_Solution(100));