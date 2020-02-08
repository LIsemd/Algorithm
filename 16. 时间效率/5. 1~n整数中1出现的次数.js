/**
 *  输入一个整数n，求1~n这n个整数的十进制表示中1出现的次数
 *  例如：输入12，1~12这些整数中包含1的数字有1、10、11、12
 *  1 一共出现了5次
 */

// 生成排序数组
// Array.from({length:n},(item,index)=> index+1)

// 性能测试
// console.time
// console.timeend

// function NumberOf1Between1AndN_Solution(n) {
    // 一行代码解决  但时间效率不高
    // return Array.from({length:n},(item,index)=> index+1).join('').split('1').length-1
    // return Array.from({length:n},(item,index)=> index+1).join('').match(/1/g).length
// }

function NumberOf1Between1AndN_Solution(n) {
    let counts,num;
    counts = 0;
    for(let i = 1;i <= n;i++){
        num = i;
        while(num > 0){
            if(num%10 == 1){
                counts++;
            }
            num = Math.floor(num/10);
        }
    }
    return counts;
}

// test

// console.log('object :', NumberOf1Between1AndN_Solution(120));
