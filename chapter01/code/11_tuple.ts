/* var val: string | number
val = 12
console.log("数字为 " + val)
val = "Runoob"
console.log("字符串为 " + val) */
/* function disp(name: string | string[]) {
    if (typeof name == "string") {
        console.log(name)
    } else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i])
        }
    }
}
disp("Runoob")
console.log("输出数组....")
disp(["Runoob", "Google", "Taobao", "Facebook"]) */
/* var arr: number[] | string[];
var i: number;
arr = [1, 2, 4]
console.log("**数字数组**")

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr = ["Runoob", "Google", "Taobao"]
console.log("**字符串数组**")

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
} */
interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}

var customer: IPerson = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: (): string => { return "Hi there" }
}

console.log("Customer 对象 ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var employee: IPerson = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: (): string => { return "Hello!!!" }
}

console.log("Employee  对象 ")
console.log(employee.firstName)
console.log(employee.lastName)