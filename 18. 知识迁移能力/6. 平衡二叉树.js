/**
 *  输入一棵二叉树，判断该二叉树是否是平衡二叉树。
 *  如果某二叉树中任意节点的左右子树深度相差不超过1，那么它就是一颗平衡二叉树
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 借助一个获取树深度的递归函数，根据该结点的左右子树高度差判断是否平衡，然后递归地对左右子树进行判断。
// 在判断上层结点的时候，会多次重复遍历下层结点，增加了不必要的开销

// function IsBalanced_Solution(pRoot)
// {
//     if(!pRoot){
//         return true
//     }
//     return Math.abs(TreeDepth(pRoot.left)-TreeDepth(pRoot.right)) <= 1 
//         && IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
// }

// function TreeDepth(pRoot)
// {
//     if(!pRoot){
//         return 0
//     }
//     return Math.max(TreeDepth(pRoot.left),TreeDepth(pRoot.right)) + 1
// }

// 如果改为从下往上遍历，如果子树是平衡二叉树，则返回子树的高度；
// 如果发现子树不是平衡二叉树，则直接停止遍历，这样至多只对每个结点访问一次

function IsBalanced_Solution(pRoot) {
    return getTreeDepth(pRoot) !== -1
}

function getTreeDepth(root) {
    if(!root) {
        return 0
    }
    let left = getTreeDepth(root.left)
    if(left === -1) {
        return -1
    }
    let right = getTreeDepth(root.right)
    if(right === -1) {
        return -1
    }
    return Math.abs(left - right) <= 1 ? Math.max(left, right) + 1 : -1
}