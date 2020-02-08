/**
 *  统计一个数字在排序数组中出现的次数。
 */

function GetNumberOfK(data, k) {
    if(!data || k === null) {
        return 0
    }
    let count = 0, length = data.length
    for(let i=0; i<length; i++) {
        if(data[i] === k) {
            count ++
        }
    }
    return count
}


// function GetNumberOfK(data, k) {
//     if(!data || k === null) {
//         return 0
//     }
//     let start = -1, end = -1, length = data.length
//     for(let i=0; i<length; i++) {
//         if(data[i] === k) {
//             start = i
//             break
//         }
//     }
//     if(start === -1) {
//         return 0
//     }
//     for(let i= length-1; i>=start; i--) {
//         if(data[i] === k) {
//             end = i
//             break
//         }
//     }
//     return end - start + 1
// }

// test
const arr = [1, 2, 3];
console.log(GetNumberOfK(arr, 2));