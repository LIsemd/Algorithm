/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
    if(!head || !k) {
        return null
    }
    let p = head, q = head
    for(let i=0; i<k-1; i++) {
        if(!p.next) {
            return null
        }
        p = p.next
    }
    while(p.next) {
        p = p.next
        q = q.next
    }
    return q
}

// function FindKthToTail(head, k) {
//     if(!head || !k) {
//         return null
//     }
//     let p = head, arr = []
//     while(p) {
//         arr.push(p)
//         p = p.next
//     }
//     return arr[arr.length - k]
// }


