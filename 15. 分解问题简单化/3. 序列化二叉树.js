/**
 *  请实现两个函数，分别用来序列化和反序列化二叉树
 *  二叉树的序列化是指：
 *  把一棵二叉树按照某种遍历方式的结果以某种格式保存为字符串，从而使得内存中建立起来的二叉树可以持久保存。
 *  序列化可以基于先序、中序、后序、层序的二叉树遍历方式来进行修改，
 *  序列化的结果是一个字符串，序列化时通过某种符号表示空节点（#），以 ！表示一个结点值的结束（value!）。
 *  二叉树的反序列化是指：根据某种遍历顺序得到的序列化字符串结果str，重构二叉树。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
let arr = []

function Serialize(pRoot) {
    if (pRoot != null) { //深度优先遍历
        arr.push(pRoot.val);
        Serialize(pRoot.left);
        Serialize(pRoot.right);
    } else {
        arr.push('a'); //把a当做叶子节点       
    }
}

function Deserialize() {
    let root = null;
    if (arr.length < 0) {
        return null
    }; //接上一种情况，当arr里没有元素的时候
    let node = arr.shift();
    if (typeof node == 'number') {
        root = new TreeNode(node); //将摘下来的node传给一个树节点
        root.left = Deserialize();
        root.right = Deserialize();
    }
    return root;
}