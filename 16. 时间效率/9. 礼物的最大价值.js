/**
 *  在一个 m * n 的棋盘的每一格都放有一个礼物，每个礼物都一定价值。
 *  你可以从棋盘的左上角开始拿礼物，并每次向右或者向下移动一格，直到右下角
 *  计算你最多能拿到多少价值的礼物
 */

function getMaxValue(matrix) {
    if(!matrix) {
        return 0
    }
    const m = matrix.length-1
    const n = matrix[0].length-1
    if(!m || !n) {
        return 0
    }
    let i = 0, j = 0, value = 0
    while(i < m && j < n) {
        value += matrix[i][j]
        matrix[i+1][j] > matrix[i][j+1] ? i++ : j++
    }
    while(i < m) {
        value += matrix[i++][j]
    }
    while(j < n) {
        value += matrix[i][j++]
    }
    value+=matrix[m][n]
    return value
}
const values = [[1,10,3,8],[12,2,9,6],[5,7,4,11],[3,7,16,5]]
console.log('getMaxValue :', getMaxValue(values));