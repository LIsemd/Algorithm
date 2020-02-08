/**
 *  输入一个链表，反转链表后，输出新链表的表头。
 */

function ReverseList(pHead) {
    if(!pHead) {
        return null
    }
    if(!pHead.next) {
        return pHead
    }
    let node = pHead, prev = null, reverseHead = null
    while(node) {
        let p = node.next
        if(!p) {
            reverseHead = node
        }
        node.next = prev
        prev = node
        node = p
    }
    return reverseHead
}