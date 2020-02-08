/**
 *  有两个排序的数组 A1 和 A2 ，内存在 A1 的末尾有足够多的空余空间容纳 A2
 *  实现一个函数，把 A2 中的数字插入 A1 中，并且所有数字都是排序的
 */

function mergeArray(array1, array2) {
    if(isError(array1, array2)) {
        return new Error('输入有误')
    }
    return array1.concat(array2).sort() 
}

function isError(array1, array2) {
    if(!Array.isArray(array1) || !Array.isArray(array2)) {
        return true
    }
    return false
}