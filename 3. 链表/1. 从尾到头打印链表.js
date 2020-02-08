/**
 *  输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
 */

function printListFromTailToHead(head)
{
    let arr = []
    while(head != null) {
        arr.unshift(head.val)
        head = head.next
    }
    return arr
}