/* function greet(): string {
    return "Hello World"
}
function caller() {
    var msg = greet() // 调用greet函数
    console.log(msg)
}
caller() */

// 函数定义
/* function greet() {
    return "Hello World";
}
function caller() {
    var msg = greet(); // 调用 greet() 函数 
    console.log(msg);
}
// 调用函数
caller(); */
/* function add(x: number, y: number): number {
    return x + y;
}
console.log(add(1, 2)) */

/* function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}


let result3 = buildName("Bob", "Adams");         // 正确
console.log(result3) */

/* function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // 正确
// let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
let result3 = buildName("Bob", "Adams");  // 正确
console.log(result1, result3) */
/* function calculate_discount(price: number, rate: number = 0.50) {
    var discount = price * rate;
    console.log("计算结果: ", discount);
}
calculate_discount(1000)
calculate_discount(1000, 0.30)
 */
/* function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie"); */
/* function addNumbers(...nums: number[]) {
    var i;
    var sum: number = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("和为：", sum)
}
addNumbers(1, 2, 3)
addNumbers(10, 10, 10, 10, 10) */
/* var msg = function () {
    return "hello world";
}
console.log(msg()) */
/* var res = function (a: number, b: number) {
    return a * b;
};
console.log(res(12, 2)) */
/* (function () {
    var x = "Hello!!";
    console.log(x)
})() */
/* var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x); */
/* function factorial(number) {
    if (number <= 0) {         // 停止执行
        return 1;
    } else {
        return (number * factorial(number - 1));     // 调用自身
    }
};
console.log(factorial(6));      // 输出 720 */
/* var foo = (x: number) => {
    x = 10 + x
    console.log(x)
}
foo(100) */
/* var func = (x) => {
    if (typeof x == "number") {
        console.log(x + " 是一个数字")
    } else if (typeof x == "string") {
        console.log(x + " 是一个字符串")
    }
}
func(12)
func("Tom") */
