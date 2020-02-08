/**
 *  数字、字符串和数组全排列
*/ 

function permutation(param) {
    if(typeof param !== 'number' && typeof param !== 'string' && !(param instanceof Array)) {
        return new Error('输入参数需为数组或字符串')
    }
    let array = [], isNumber = false
    if(typeof param === 'number') {
        array = param.toString().split('')
        isNumber = true
    }

    if(typeof param === 'string') {
        array = param.split('')
    }

    if(param instanceof Array) {
        array = param
    }

    let res = []
    _permutation(array, 0, array.length-1, res)

    for(let i = 0; i < res.length; i++) {
        res[i] = res[i].join('')
    }

    let set = new Set()
    res.forEach(item => {
        set.add(item)
    })
    res = Array.from(set).sort()

    if(isNumber) {
        res.forEach(item => {
            item *= 1
        })
    }
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

let str = '100'
console.log('permutation(str) :', permutation(str));