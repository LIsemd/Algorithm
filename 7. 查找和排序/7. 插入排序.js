// 稳定
// 时间复杂度 O(n²)
// 最差时间分析 O(n²)
// 空间复杂度 O(1)

function insertionSort(arr) {
    const length = arr.length
    for (let i = 1; i < length; i++) {
        const temp = arr[i]
        const insertIndex = binarySearch(arr, i - 1, arr[i])
        for (let j = i - 1; j >= insertIndex; j--) {
            arr[j + 1] = arr[j]
        }
        arr[insertIndex] = temp
    }
    return arr
}

function binarySearch(arr, maxIndex, value) {
    let min = 0
    let max = maxIndex
    while (min <= max) {
        const mid = min + Math.ceil((max - min) / 2)
        if (arr[mid] === value) {
            return mid
        } else if (arr[mid] > value) {
            max = mid - 1
        } else {
            min = mid + 1
        }
    }
    return min;
}

const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(insertionSort(arr));