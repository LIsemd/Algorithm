/**
 *  求链表的中间节点。如果链表中的节点总数是奇数，则返回中间节点，如果是偶数，则返回其中任意一个
 */

function FindMiddle(head) {
    if(!head) {
        return null
    }
    if(!head.next || !head.next.next) {
        return head
    }
    let p = head, q = head
    while(q && q.next) {
        p = p.next
        q = q.next.next
    }
    return p
}