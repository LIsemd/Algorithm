/**
 *  输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 *  允许额外空间
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 循环法
function Merge(pHead1, pHead2) {
    if(!pHead1) {
        return pHead2 
    }
    if(!pHead2) {
        return pHead1
    }
    let mergeHead = null, p, q, preNode, curNode
    // p 表示本次改变的链表， q 表示本次未改变的链表
    if(pHead1.val < pHead2.val) {
        mergeHead = pHead1
        p = pHead1
        q = pHead2
    }else {
        mergeHead = pHead2
        p = pHead2
        q = pHead1
    }
    while(p && q) {
        while(p.next && p.next.val < q.val) {
            p = p.next
        }
        preNode = p
        curNode = q
        q = p.next
        p = curNode
        preNode.next = curNode
    }
    return mergeHead
}

// 递归法
function Merge(pHead1, pHead2) {
    if(!pHead1) {
        return pHead2 
    }
    if(!pHead2) {
        return pHead1
    }
    let mergeHead = null
    if(pHead1.val < pHead2.val) {
        mergeHead = pHead1
        mergeHead.next = Merge(pHead1.next, pHead2)
    }else {
        mergeHead = pHead2
        mergeHead.next = Merge(pHead1, pHead2.next)
    }
    return mergeHead
}