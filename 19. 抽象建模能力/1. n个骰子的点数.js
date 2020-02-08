/**
 *  把n个骰子扔在地上，所有骰子朝上一面的点数之和为s，输入n，打印出所有可能的值出现的概率
 */

const MAX_VALUE = 6; // 每个骰子的最大点数

function printProbability(number) {
    if (number < 1) {
        return
    }
    const probabilities = [
        new Array(MAX_VALUE * number + 1).fill(0),
        new Array(MAX_VALUE * number + 1).fill(0)
    ];
    let flag = 0
    // 第一次掷骰子，出现的和只有 MAX_VALUE 种情况，每种和的次数为 1
    for (let i = 1; i <= MAX_VALUE; i++) {
        probabilities[flag][i] = 1
    }
    // 之后是从第 2 ~ number 次掷骰子
    for (let k = 2; k <= number; k++) {
        // 第k次掷骰子，那么最小值就是k
        // 不可能出现比k小的情况
        for (let i = 0; i < k; i++) {
            probabilities[1 - flag][i] = 0
        }
        // 可能出现的和的范围就是 [k, MAX_VALUE * k]
        // 此时和为i的出现次数，就是上次循环中骰子点数和为
        // i - 1, i - 2, ..., i - 6 的次数总和
        for (let i = k; i <= MAX_VALUE * k; i++) {
            probabilities[1 - flag][i] = 0
            // 这里的j是指：本骰子掷出的结果
            for (let j = 1; j < i && j <= MAX_VALUE; j++) {
                probabilities[1 - flag][i] += probabilities[flag][i - j]
            }
        }
        flag = 1 - flag
    }
    // 全部情况的总数
    const total = Math.pow(MAX_VALUE, number)
    for (let i = number; i <= MAX_VALUE * number; i++) {
        console.log(`sum is ${i}, ratio is ${probabilities[flag][i] / total}`)
    }
}

/**
 * 测试代码
 * 6个骰子，所有和出现的可能性
 */
printProbability(6);