/**
 *  操作给定的二叉树，将其变换为源二叉树的镜像。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root) {
    if(!root) {
        return
    }
    swapChildrenNode(root)
    root.left && Mirror(root.left)
    root.right && Mirror(root.right)
}

function swapChildrenNode(root) {
    let temp = root.left
    root.left = root.right
    root.right = temp
}