/**
 *  输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
 *  要求不能创建任何新的结点，只能调整树中结点指针的指向。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function Convert(pRootOfTree) {
    if(!pRootOfTree) {
        return
    }
    let arr = []
    _getSortArr(pRootOfTree, arr)
    const length = arr.length
    for(let i=1; i<length-1; i++) {
        arr[i].left = arr[i-1]
        arr[i].right = arr[i+1]
    }
    _fixBorderNode(arr, length)
    return arr[0]
}

function _getSortArr(node, arr) {
    if(!node) {
        return
    }
    node.left && _getSortArr(node.left, arr)
    arr.push(node)
    node.right && _getSortArr(node.right, arr)
}

function _fixBorderNode(arr, length) {
    arr[0].left = null
    arr[0].right = arr[1]
    arr[length-1].right = null
    arr[length-1].left = arr[length-2]
}