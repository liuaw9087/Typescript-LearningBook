function greet() {
    return "Hello World";
}
function caller() {
    var msg = greet(); // 调用greet函数
    console.log(msg);
}
caller();
