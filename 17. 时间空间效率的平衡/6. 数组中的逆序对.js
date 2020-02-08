/**
 *  在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
 *  输入一个数组，求出这个数组中的逆序对的总数P，并将P对 1000000007 取模的结果输出。 
 *  即输出P%1000000007
 */

// 暴力法
function InversePairs(data) {
    if (!data || data.length < 2) {
        return 0
    }
    const length = data.length
    let count = 0
    for (let i = 0; i < length; i++) {
        let number = data[i]
        for (let j = i; j < length; j++) {
            if (number > data[j]) {
                count++
            }
        }
    }
    return count % 1000000007
}

// 分治法
function InversePairs(data) {
    if (!data || data.length < 2) return 0;
    let copy = data.slice(),
        count = 0;
    count = mergeSort(data, copy, 0, data.length - 1);
    return count % 1000000007;
}

function mergeSort(data, copy, start, end) {
    if (end === start) return 0;
    let mid = (end - start) >> 1,
        left = mergeSort(copy, data, start, start + mid),
        right = mergeSort(copy, data, start + mid + 1, end),
        count = 0,
        p = start + mid,        //前一个数组的最后一个下标
        q = end,                //后一个数组的下标
        copyIndex = end;        //辅助数组下标，从最后一个算起
    while (p >= start && q >= start + mid + 1) {
        if (data[p] > data[q]) {
            count += q - start - mid;
            copy[copyIndex--] = data[p--];
        } else {
            copy[copyIndex--] = data[q--];
        }
    }
    while (p >= start) {
        copy[copyIndex--] = data[p--];
    }
    while (q >= start + mid + 1) {
        copy[copyIndex--] = data[q--];
    }
    return left + right + count;
}

console.log('InversePairs() :', InversePairs([1, 2, 3, 4, 5, 6, 7, 0]));