/**
 *  输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 *  如果是则输出true,否则输出false。假设输入的数组的任意两个数字都互不相同。
 */

function VerifySquenceOfBST(sequence) {
    if(!sequence.length) {
        return false
    }
    return _VerifySquenceOfBST(sequence, 0, sequence.length-1)
}

// end is rootIndex
function _VerifySquenceOfBST(sequence, start, end) {
    if(start >= end) {
        return true
    }
    let i = start
    while(i < end && sequence[i] < sequence[end]) {
        i++
    }
    for(let j=i; j<end; j++) {
        if(sequence[j] < sequence[end]) {
            return false
        }
    }
    return _VerifySquenceOfBST(sequence, start, i-1) && _VerifySquenceOfBST(sequence, i, end-1)
}