// 不稳定
// 时间复杂度 O(n·log2n)
// 最差时间分析 O(n²)
// 空间复杂度 O(log2n)~O(n)

function quickSort(arr) {
    const pivot = arr[0]
    const left = [], right = []
    if(arr.length < 2) {
        return arr
    }
    for(let i=1; i<arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

// const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
// console.log(quickSort(arr));