/**
 *  假设一个单调递增的数组中每个元素都是整数并且唯一
 *  请找出数组中任意一个数值等于其下标的元素，若不存在则输出-1
 *  例如：在数组[-3, -1, 1, 3, 5]中，数字3和它的下标相等
 */

// 暴力法
function getNumberSameAsIndex(array) {
    if(!array || !array.length) {
        return -1
    }
    const length = array.length
    for(let i=0; i<length; i++) {
        if(array[i] === i) {
            return array[i]
        }
    }
    return -1
}

// 二分法
function getNumberSameAsIndex2(array) {
    if(!array || !array.length) {
        return -1
    }
    let min = 0,
        max = array.length-1,
        mid;
    while(min <= max) {
        mid = min + Math.ceil((max - min) / 2)
        if(array[mid] === mid) {
            return array[mid]
        }else if(array[mid] > mid) {
            max = mid - 1
        }else {
            min = mid + 1
        }
    }
    return -1
}


// test
console.log('getNumberSameAsIndex :', getNumberSameAsIndex2([-3, -1, 1, 3, 5]));