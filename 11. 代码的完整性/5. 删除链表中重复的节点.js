/**
 *  在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 
 *  例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function deleteDuplication(pHead) {
    let newHead = new ListNode('head');
    newHead.next = pHead;
    let p = newHead;
    let q = p.next;
    while (q) {
        while ((q.next != null) && (q.val == q.next.val)) {
            q = q.next;
        }
        if (p.next === q) {
            p = p.next
            q = q.next;
        }else {
            q = q.next
            p.next = q
        }
    }
    return newHead.next;
}