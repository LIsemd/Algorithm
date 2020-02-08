/**
 * 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
    if(!pHead || !pHead.next) {
        return null
    }
    const length = getLengthOfLoop(pHead)
    if(length === -1) {
        return null
    }
    let p = pHead, q = pHead
    for(let i=0; i<length; i++) {
        q = q.next
    }
    while(p !== q) {
        p = p.next
        q = q.next
    }
    return p
}

function getLengthOfLoop(pHead) {
    let p = pHead, q = pHead.next
    while(q.next && p !== q) {
        p = p.next
        q = q.next.next
    }
    if(!p.next) {
        return -1
    }
    // 为了包含最后一步，因此 count 初始化为 1
    let count = 1
    while(p.next !== q) {
        p = p.next
        count ++
    }
    return count
}