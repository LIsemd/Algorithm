/**
 *  请从字符串中找出一个最长的不包含重复字符的子字符串并计算该字符串长度
 *  假设字符串只包含a-z的字符
 *  例如：字符串 'arabcacfr' 中最长的不含重复字符的子字符串是 'acfr' 长度为4
 */

function getLongestSubstring(str) {
    if(!str) {
        return 0
    }
    let head = 0, tail = 0, maxCount = 0, count = 0
    const length = str.length
    while(tail < length) {
        if(!str.slice(head, tail).includes(str.charAt(tail))) {
            tail ++
            count ++
        }else {
            maxCount = count > maxCount ? count : maxCount
            head ++
            // 初始化 tail 和 count
            tail = head
            count = 0
        }
    }
    return maxCount
}

// console.log('getLongestSubstring :', getLongestSubstring('arabcacfr'));