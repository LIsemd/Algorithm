/**
 *  给定单链表的头指针和一个节点指针，定义一个函数在O(1)时间内删除链表节点
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function deleteNode(pHead, pNode) {
    if(!pHead || !pNode) {
        return
    }
    // 只有一个节点
    if(pHead.next == null) {
        pHead = null
        return
    }
    // node是尾节点 O(n)
    if(pNode.next == null) {
        let p = pHead
        while(p.next !== pNode) {
            p = p.next
        }
        p.next = null
        return
    }
    // 其他情况 O(1)
    const nextNode = pNode.next
    pNode.val = nextNode.val
    pNode.next = nextNode.next
}
// 平均复杂度 O(1)  必须排除链表中不存在节点的情况