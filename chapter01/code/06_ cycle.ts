/* var num:number = 5;
var i:number ;
var factorial = 1;

for (i = num;i>=1;i--){
    factorial *= i;
}
console.log(factorial) */
// for in 循环...
/* var j:any;
var n:any = "a b c "
for(j in n){
    console.log(n[j])
}
 */
// for…of 、forEach、every 和 some 循环
// TypeScript for...of 循环
/* let someArray = [1,"string",false]
for(let entry of someArray){
    console.log(entry);//1， string ,false
}
 */
// forEach循环
/* let list = [4, 5, 6];
list.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log(val ,idx,array)
});

 */
// every循环
/* let list = [4, 5, 6];
list.every((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    return true; // Continues
    console.log(val,idx,array)
    // Return false will quit the iteration
}); */
// While循环
/* var num:number = 5; 
var factorial:number = 1; 
 
while(num >=1) { 
    factorial = factorial * num; 
    num--; 
} 
console.log("5 的阶乘为："+factorial); */
// do..while循环
// do..while循环是先执行代码块，执行完代码块之后再进行条件判断
/* var n:number = 10;
do { 
    console.log(n); 
    n--; 
} while(n>=0);
 */
// break语法
// break语句如果出现在一个循环内，则循环立刻停止
/* var i:number = 1 
while(i<=10) { 
    if (i % 5 == 0) {   
        console.log ("在 1~10 之间第一个被 5 整除的数为 : "+i) 
        break     // 找到一个后退出循环
    } 
    i++ 
}  // 输出 5 然后程序执行结束 */
// continue语法
// var num:number = 0
// var count:number = 0;
 
// for(num=0;num<=20;num++) {
//     if (num % 2==0) {
//         continue
//     }
//     count++
// }
// console.log ("0 ~20 之间的奇数个数为: "+count)    //输出10个偶数








