// 不稳定
// 时间复杂度 O(n²)
// 最差时间分析 O(n²)
// 空间复杂度 O(1)

function selectionSort(arr) {
    const length = arr.length
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }

    return arr;
}

// test
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(selectionSort(arr));