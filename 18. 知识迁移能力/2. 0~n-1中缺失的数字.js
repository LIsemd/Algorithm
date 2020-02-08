/**
 *  一个长度位n-1的递增排序数组中所有的数字都是唯一的，并且每一个数字都在0~n-1范围内
 *  在范围0~n-1中的n个数字中有且仅有一个不在数组中，请找出来
 */

// 暴力法
function getMissingNumber(array) {
    if(!array || array.length < 2) {
        return -1
    }
    const length = array.length
    for(let i=0; i<length; i++) {
        if(array[i] !== i) {
            return i
        }
    }
    return -1
}


// 二分查找
function getMissingNumber2(array) {
    if(!array || array.length < 2) {
        return -1
    }
    let min = 0,
        max = array.length-1,
        mid;
    while(min <= max) {
        mid = min + Math.ceil((max - min) >> 1)
        if(array[mid] !== mid && array[mid-1] && array[mid-1] === mid-1) {
            return mid
        }else if(array[mid] !== mid) {
            max = mid - 1
        }else if(array[mid] === mid){
            min = mid + 1
        }
    }
    return -1
}

// test
console.log('getMissingNumber() :', getMissingNumber2([0,1,2,4,5,6,7,8,9]));