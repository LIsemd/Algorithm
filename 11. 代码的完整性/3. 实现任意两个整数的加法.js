/**
 *  定义一个函数，实现任意两个整数的加法，不考虑负数
 */
function sum(a, b)
{
	let arr1 = String(a).split('');
    let arr2 = String(b).split('');
    let over = 0, result = '';
    while(arr1.length || arr2.length || over){
        let temp = parseInt(arr1.pop() || 0) + parseInt(arr2.pop() || 0) + over;
        result = temp % 10 + result;
        over = Math.floor(temp / 10);
    }
	return result;
}

const a = 888888888888882
const b = 88888888888888

console.log('sum(a, b) :', sum(a, b));