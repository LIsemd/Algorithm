/**
 *  把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 *  输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
 *  例如数组 {3,4,5,1,2} 为 {1,2,3,4,5} 的一个旋转，该数组的最小值为1。
 */

function minNumberInRotateArray(rotateArray)
{
    const length = rotateArray.length
    if(length === 0) {
        return 0
    }
    let left = 0, right = length - 1
    while(left < right - 1) {
        let mid = left + Math.ceil((right - left) / 2)
        if(rotateArray[left] <= rotateArray[mid]) {
            left = mid
        }else {
            right = mid
        }
    }
    return rotateArray[right]
}
