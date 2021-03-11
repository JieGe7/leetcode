function numberVal(n) {
    console.log("二进制====" + n.toString(2))
    var count = 0;
    while (n != 0) {
        if ((n & 1) == 1) {
            count++;
        }
        n = n >>> 1
    }
    return count
}
console.log(numberVal(0))
// console.log(1111 & 11)
//&此为AND运算-js中的位运算符
//&运算是两边都有1时则返回1
//示例中的console.log(1111 & 11)=3
//因为  1111 与 11相比较后1111会移一位
//即： 1111&11   其中1111的后两位有11此时返回一个1
//然后  1111向右移动一位并抛弃
//则会变成  111&11  此时  111后两位含有11此时返回一个1，紧接着移位
// 11 & 11 ——> 1 & 11 不满足则不返回