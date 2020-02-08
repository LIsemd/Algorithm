function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        const newPivotIndex = partition(arr, left, right)
        quickSort(arr, left, newPivotIndex - 1)
        quickSort(arr, newPivotIndex + 1, right)
    }
    return arr
}

function partition(arr, left, right) {
    const pivotIndex = left + Math.ceil((right - left) / 2)
    const pivot = arr[pivotIndex]
    let newPivotIndex = left
    swap(arr, pivotIndex, right)
    for(let i=newPivotIndex; i < right; i++) {
        if(arr[i] < pivot) {
            swap(arr, i, newPivotIndex)
            newPivotIndex ++
        }
    }
    swap(arr, right, newPivotIndex)
    return newPivotIndex
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(quickSort(arr));