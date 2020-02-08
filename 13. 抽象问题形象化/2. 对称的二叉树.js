/**
 *  请实现一个函数，用来判断一颗二叉树是不是对称的。
 *  注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。空树也是对称的
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
    return _isSymmetrical(pRoot, pRoot)
}

function _isSymmetrical(pRoot1, pRoot2) {
    if(!pRoot1 && !pRoot2) {
        return true
    }
    if(!pRoot1 || !pRoot2) {
        return false
    }
    if(pRoot1.val !== pRoot2.val) {
        return false
    }
    return _isSymmetrical(pRoot1.left,pRoot2.right) && _isSymmetrical(pRoot1.right, pRoot2.left)
}