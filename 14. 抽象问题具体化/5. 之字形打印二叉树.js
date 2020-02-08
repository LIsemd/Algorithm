/**
 *  请实现一个函数按照之字形打印二叉树，
 *  即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    if(!pRoot || pRoot.val === undefined) {
        return []
    }
    let res = [], rootArr = [], currentNodes = 1, nextNodes = 0, depth = 0, status = false, node
    res.push([])
    rootArr.push(pRoot)
    while(rootArr.length) {
        node = rootArr.shift()
        res[depth].push(node.val)
        node.left && rootArr.push(node.left) && nextNodes ++
        node.right && rootArr.push(node.right) && nextNodes ++
        currentNodes --

        if(!currentNodes) {
            if(status) {
                res[depth].reverse()
            }
            if(nextNodes) {
                res.push([])
                depth ++
            }
            currentNodes = nextNodes
            nextNodes = 0
            status = !status
        }
    }
    return res
}