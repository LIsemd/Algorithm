/**
 *  在一个数组中除了一个数字只出现一次之外，其他数字都出现了3次，请找出那个数字
 */

function FindNumsAppearOnce(array) {
    if(!array || !array.length) {
        return null
    }
    for(let i=0; i<array.length; i++) {
        if(array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
            return array[i]
        }
    }
    return null
}


// test
console.time('FindNumsAppearOnce')
console.log('FindNumsAppearOnce :', FindNumsAppearOnce([1,3,3,3,4,4,4,1,1,2,6,2,2]));
console.timeEnd('FindNumsAppearOnce')
