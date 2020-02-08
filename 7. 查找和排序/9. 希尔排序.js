// 不稳定
// 时间复杂度 O(n^1.3)
// 最差时间分析 O(n²)
// 空间复杂度 O(1)

function shellSort(arr) {
    const length = arr.length;
    let gap = 1;
    while (gap < length / 3) {
        gap = gap * 3 + 1;
    }
    while (gap > 0) {
        for (let i = gap; i < length; i++) {
            const temp = arr[i];
            let preIndex = i - gap;
            while (arr[preIndex] > temp) {
                arr[preIndex + gap] = arr[preIndex];
                preIndex -= gap;
            }
            arr[preIndex + gap] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    return arr;
}

const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(shellSort(arr));