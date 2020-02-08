function quickSort(arr) {
    const pivot = arr.shift()
    const left = [], right = []
    if(arr.length < 2) {
        return arr
    }
    arr.forEach(elem => {
        elem < pivot ? left.push(elem) : right.push(elem)
    })
    return quickSort(left).concat([pivot], quickSort(right))
}

// const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
// console.log(quickSort(arr));