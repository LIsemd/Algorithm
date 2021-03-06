/**
 *  给定一棵二叉搜索树，请找出其中的第k小的结点。
 *  例如（5，3，7，2，4，6，8）中，按结点数值大小顺序第三小结点的值为4。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function KthNode(pRoot, k) {
    if(!pRoot || k <= 0) {
        return null
    }
    const arr = []
    inOrderTraverse(pRoot,arr)
    return arr[k-1]
}

function inOrderTraverse(root, arr) {
    root.left && inOrderTraverse(root.left, arr)
    arr.push(root)
    root.right && inOrderTraverse(root.right, arr)
}