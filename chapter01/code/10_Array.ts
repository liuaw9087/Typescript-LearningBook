/* var sites: string[];
sites = ["Google", "Runoob", "Taobao"]
console.log(sites[0]);
console.log(sites[1]); */
/* var nums: number[] = [1, 2, 3, 4]
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]); */
/* var arr_names: number[] = new Array(4)

for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2
    console.log(arr_names[i])
} */
/* var sites: string[] = new Array("Google", "Runoob", "Taobao", "Facebook")

for (var i = 0; i < sites.length; i++) {
    console.log(sites[i])
} */
/* var arr: number[] = [12, 13]
var [x, y] = arr // 将数组的两个元素赋值给变量 x 和 y
console.log(x)
console.log(y) */
/* var j: any;
var nums: number[] = [1001, 1002, 1003, 1004]

for (j in nums) {
    console.log(nums[j])
} */
/* var multi: number[][] = [[1, 2, 3], [23, 24, 25]]
console.log(multi[0][0])
console.log(multi[0][1])
console.log(multi[0][2])
console.log(multi[1][0])
console.log(multi[1][1])
console.log(multi[1][2]) */
/* var sites: string[] = new Array("Google", "Runoob", "Taobao", "Facebook")

function disp(arr_sites: string[]) {
    for (var i = 0; i < arr_sites.length; i++) {
        console.log(arr_sites[i])
    }
}
disp(sites); */
/* function disp(): string[] {
    return new Array("Google", "Runoob", "Taobao", "Facebook");
}

var sites: string[] = disp()
for (var i in sites) {
    console.log(sites[i])
} */
/* let nameSiteMapping = new Map();

// 设置 Map 对象
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);

// 获取键对应的值
console.log(nameSiteMapping.get("Runoob"));     // 2

// 判断 Map 中是否包含键对应的值
console.log(nameSiteMapping.has("Taobao"));       // true
console.log(nameSiteMapping.has("Zhihu"));        // false

// 返回 Map 对象键/值对的数量
console.log(nameSiteMapping.size);                // 3

// 删除 Runoob
console.log(nameSiteMapping.delete("Runoob"));    // true
console.log(nameSiteMapping);
// 移除 Map 对象的所有键/值对
nameSiteMapping.clear();             // 清除 Map
console.log(nameSiteMapping); */
/* let nameSiteMapping = new Map();

// 设置 Map 对象
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);

// 获取键对应的值
console.log(nameSiteMapping.get("Runoob"));     // 2

// 判断 Map 中是否包含键对应的值
console.log(nameSiteMapping.has("Taobao"));       // true
console.log(nameSiteMapping.has("Zhihu"));        // false

// 返回 Map 对象键/值对的数量
console.log(nameSiteMapping.size);                // 3

// 删除 Runoob
console.log(nameSiteMapping.delete("Runoob"));    // true
console.log(nameSiteMapping);
// 移除 Map 对象的所有键/值对
nameSiteMapping.clear();             // 清除 Map
console.log(nameSiteMapping); */
/* let nameSiteMapping = new Map();

nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);

// 迭代 Map 中的 key
for (let key of nameSiteMapping.keys()) {
    console.log(key);
}

// 迭代 Map 中的 value
for (let value of nameSiteMapping.values()) {
    console.log(value);
}

// 迭代 Map 中的 key => value
for (let entry of nameSiteMapping.entries()) {
    console.log(entry[0], entry[1]);
}

// 使用对象解析
for (let [key, value] of nameSiteMapping) {
    console.log(key, value);
} */

/* var mytuple = [10, "Runoob"]; // 创建元组
console.log(mytuple[0])
console.log(mytuple[1])
 */
/* var mytuple = [10, "Hello", "World", "typeScript"];
console.log("添加前元素个数：" + mytuple.length)    // 返回元组的大小

mytuple.push(12)                                    // 添加到元组中
console.log("添加后元素个数：" + mytuple.length)
console.log("删除前元素个数：" + mytuple.length)
console.log(mytuple.pop() + " 元素从元组中删除") // 删除并返回删除的元素

console.log("删除后元素个数：" + mytuple.length) */
/* var mytuple = [10, "Runoob", "Taobao", "Google"]; // 创建一个元组
console.log("元组的第一个元素为：" + mytuple[0])

// 更新元组元素
mytuple[0] = 121
console.log("元组中的第一个元素更新为：" + mytuple[0]) */
/* var a = [10, "Runoob"]
var [b, c] = a
console.log(b)
console.log(c) */
