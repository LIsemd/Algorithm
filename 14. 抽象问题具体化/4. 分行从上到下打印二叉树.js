/**
 *  从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
    if(!pRoot || pRoot.val === undefined) {
        return []
    }
    let res = [], rootArr = [], nextNodes = 0, node, currentNodes = 1, depth = 0
    res.push([])
    rootArr.push(pRoot)
    while(rootArr.length) {
        node = arr.shift()
        res[depth].push(node.val)
        node.left && arr.push(node.left) && nextNodes ++
        node.right && arr.push(node.right) && nextNodes ++
        currentNodes--
        if(!currentNodes && nextNodes) {
            res.push([])
            depth ++
            currentNodes = nextNodes
            nextNodes = 0
        }
    }
    return res
}
