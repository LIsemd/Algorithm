/**
 *  输入数字n，按顺序打印出从1到最大的n位十进制数。
 *  比如输入3，则打印出1、2、3一直到999
 */

function increase(arr) {
    let length = arr.length,
        over = 0; // 记录前一位相加后的进位数
    for (let i = length - 1; i >= 0; --i) {
        // 进位
        arr[i] += over;
        // 最低位递增
        if(i === length - 1) {
            arr[i] ++
        }
        if (arr[i] > 9) {
            // 如果第n位进位，说明超出了n位最大数字
            if (i === 0) {
                return true;
            }
            arr[i] -= 10;
            over = 1;
        } else {
            // 不产生进位则退出循环
            break;
        }
    }
    return false;
}

function printMaxDigits(n) {
    if(n <= 0) {
        return;
    }
    let arr = new Array(n).fill(0);
    // 打印直至最大值
    while (!increase(arr)) {
        let str = arr.join('').replace(/^(0+)/g, '')
        console.log(str)
    }
}



// test
const n = 1
printMaxDigits(n)