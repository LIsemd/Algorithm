function binarySearch(arr, value) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        const mid = min + Math.ceil((max - min) / 2);
        if (arr[mid] === value) {
            return mid;
        } else if (arr[mid] > value) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return 'Not Found';
}

// test
const arr = [1, 2, 3];
console.log(binarySearch(arr, 2));