/**
 *  输入一个整数数组，判断该数组是不是某二叉搜索树的前序遍历的结果。
 *  如果是则输出true,否则输出false。假设输入的数组的任意两个数字都互不相同。
 */

function VerifySquenceOfBST(sequence) {
    if(!sequence.length) {
        return false
    }
    return _VerifySquenceOfBST(sequence, 0, sequence.length-1)
}

function _VerifySquenceOfBST(sequence, start, end) {
    if(start >= end) {
        return true
    }
    let i = end
    while(i > start && sequence[i] > sequence[start]) {
        i--
    }
    for(let j=i; j > start + 1; j--) {
        if(sequence[j] > sequence[start]) {
            return false
        }
    }
    return _VerifySquenceOfBST(sequence, 1, i) && _VerifySquenceOfBST(sequence, i+1, end)
}