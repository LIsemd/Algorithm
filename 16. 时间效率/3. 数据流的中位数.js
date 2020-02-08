/**
 *  如何得到一个数据流中的中位数？
 *  如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。
 *  如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。
 *  我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。
 */

let data=[];
function Insert(num)
{
    data.push(num);
    data.sort((a,b) => a < b)
}
// 注意 a % 2 === a & 1
function GetMedian(){
    if(data.length & 1){
        return data[(data.length-1)/2]
    }else{
        return (data[(data.length)/2-1]+data[(data.length)/2])/2;
    }
}