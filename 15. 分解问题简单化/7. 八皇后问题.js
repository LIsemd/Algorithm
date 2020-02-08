function solveNQueens(num) {
    const res = [];
    const backtrack = (num, preBlock = [], row = 0) => {
        if(row === num) {
            res.push(preBlock.map(item => '0'.repeat(item) + '1' + '0'.repeat(num - item - 1)));
            return;
        }
        for(let i = 0; i < num; i++) {
            if (!preBlock.some((p, q) => p === i || p - i === row - q || p - i === q - row)) {
                preBlock.push(i);
                backtrack(num, preBlock, row + 1);
                preBlock.pop();
            }
        }
    }
    backtrack(num)
    return res;
}

console.log('solveNQueens(8) :', solveNQueens(8).length);