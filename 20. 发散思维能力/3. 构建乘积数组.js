/**
 *  给定一个数组 A[0,1,...,n-1] ,请构建一个数组 B[0,1,...,n-1],
 *  其中 B 中的元素 B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
 */

function multiply(array) {
    if (!array) {
        return false;
    }
    const arr = [];
    for (let i = 0; i < array.length; i++) {
        let tempArr = array.filter((value, index) => index !== i);
        let temp = 1;
        tempArr.map(value => temp *= value);
        arr.push(temp);
    }
    return arr;
}

// test

console.log('multiply :', multiply([0,1,2,3,4]));