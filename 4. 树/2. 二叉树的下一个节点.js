/**
 *  给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
 *  注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
 */

function GetNext(pNode) {
    if(!pNode) {
        return null
    }
    let p = null
    if(pNode.right) {
        p = pNode.right
        while(p.left) {
            p = p.left
        }
    }else {
        p = pNode.next
        if(pNode.next && pNode.next.right === pNode) {
            while(p.next && p.next.right === p) {
                p = p.next
            }
            if(p.next === null) {
                p = null
            }else {
                p = p.next
            }
        }
    }
    return p
}
