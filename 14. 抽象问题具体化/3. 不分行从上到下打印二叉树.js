/**
 *  不分行从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
    if(!pRoot || root.val === undefined) {
        return []
    }
    let arr = [], res = [], node
    arr.push(root)
    while(arr.length) {
        node = arr.shift()
        res.push(node.val)
        node.left && arr.push(node.left)
        node.right && arr.push(node.right)
    }
    return res
}