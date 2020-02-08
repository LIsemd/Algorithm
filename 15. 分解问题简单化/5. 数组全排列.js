/**
 *  实现数组全排列
 */


function permutation(arr) {
    let res = []
    _permutation(arr, 0, arr.length-1, res)
    for(let i = 0; i < res.length; i++) {
        res[i] = res[i].join('')
    }
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


let arr = [2, 2, 2];
console.log('permutation(arr) :', permutation(arr));



