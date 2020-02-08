/**
 *  输入两个链表，找出它们的第一个公共结点。
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
    if(!pHead1 || !pHead2) {
        return null
    }
    let longList = pHead1, shortList = pHead2,
        length1 = getListLength(pHead1),
        length2 = getListLength(pHead2),
        gap = length1 - length2
    if(length2 > length1) {
        gap = length2 - length1
        longList = pHead2
        shortList = pHead1
    }
    for(let i=0; i<gap; i++) {
        longList = longList.next
    }
    while(longList && shortList) {
        if(longList === shortList) {
            return longList
        }
        longList = longList.next
        shortList = shortList.next
    }
    return null
}

function getListLength(root) {
    let p = root, count = 0
    while(p) {
        p = p.next
        count ++
    }
    return count
}