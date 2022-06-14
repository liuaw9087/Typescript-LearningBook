// 声明一个变量 a，同时指定它的类型为number
// var a;
// a 的类型设置为了number，在以后的使用过程中a的值只能是数字
var b = 20;
a = 10;

function sum(a, b) {
    return a + b;
}
var c = sum(a, b);
console.log('a+ b 的结果为:', c);