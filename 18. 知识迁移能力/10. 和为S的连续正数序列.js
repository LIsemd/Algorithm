/**
 *  输入一个正数S，打印出所有和为S的连续正数序列（至少含有两个数）
 *  例如：输入15，打印3个连续序列 1~5 4~6 7~8
 */

function FindContinuousSequence(sum) {
    if(sum <= 2) {
        return []
    }
    let min = 1, max = 2, currentSum = 0, res = []
    while(min <= Math.floor(sum / 2)) {
        currentSum = (min + max) * ((max - min) + 1) / 2
        if(currentSum === sum) {
            res.push(Array.from({length: max-min+1}, (value, index) => index += min))
            min ++
        }else if(currentSum > sum) {
            min ++
        }else {
            max ++
        }
    }
    return res
}

console.log('FindContinuousSequence(100) :', FindContinuousSequence(100));
