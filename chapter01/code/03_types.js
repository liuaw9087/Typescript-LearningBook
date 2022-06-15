// // 可以使用字面量的方法来设置变量的具体类型以及
// let a: 10;
// a= 10
// // 可以使用|来连接多个类型（联合类型）
// let b : "male"| "female";
// b = "male"
// b = "female"
// // 可以使用 | 来连接多个类型
// let c : string | number ;
// c = "cat"
// c = 123
// // any 类型分为 隐形和显性any
// // d为隐性any
// let d ;
// d = 123
// d = 'abc'
// d = false
// // e为显性any
// let e :any;
// e = 123;
// e = 'abc'
// e = true
// // unkown 表示未知类型的值
// let f:unknown;
// f = 123
// f ='abc'
// // unkown类型的变量不能直接赋值 给其他变量
// f = d
// console.log(f)
// let s : string;
// s = 'helloWorld'
// if(typeof e == "string" ){
//     s = e ;
// }
// console.log(s)
// // 类型断言。可以告诉解析器变量的实际类型 
// s = e as string ;
// s =  <string>e;
var str = '1';
var str2 = str;
console.log('str2的类型为：', typeof (str2));
console.log('str2的值为：', str2);
