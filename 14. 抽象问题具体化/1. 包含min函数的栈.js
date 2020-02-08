/**
 *  定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
 */

let stack = []
let minStack = []

function push(node) {
    stack.push(node)
    if(!minStack.length || node < minStack[minStack.length - 1]) {
        minStack.push(node)
    }else {
        minStack.push(minStack[minStack.length - 1])
    }
}

function pop() {
    if(!stack.length || !minStack) {
        return
    }
    minStack.pop()
    return stack.pop()
}

function top() {
    return stack[stack.length - 1]
}

function min() {
    return minStack[minStack.length - 1]
}