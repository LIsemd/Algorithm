/**
 *  输入一个字符串,按字典序打印出该字符串中字符的所有排列。
 *  例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 */

function permutation(str) {
    let res = []
    let arr = str.split('')
    _permutation(arr, 0, arr.length-1, res)
    for(let i = 0; i < res.length; i++) {
        res[i] = res[i].join('')
    }
    // set 去重
    let set = new Set()
    res.forEach(item => {
        set.add(item)
    })
    res = Array.from(set).sort()
    return res
}

function _permutation(arr, start, end, res) {
    if(start === end) {
        res.push(arr.slice())
        return
    }
    for (let i = start; i <= end; i++) {
        [arr[start], arr[i]] = [arr[i], arr[start]]
        _permutation(arr, start + 1, end, res);
        [arr[start], arr[i]] = [arr[i], arr[start]]
    }
}

let str = "abc";
console.log('permutation(str) :', permutation(str));