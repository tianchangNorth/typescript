"use strict";
// function fn(a:number):number{
//     return 1
// }
/*
    在定义函数或者类时，如果遇到类型不明确就可以使用泛型
*/
//x就是一个泛型
function fn(a) {
    return a;
}
//不指定泛型，ts可以自动对类型就行推断
let result = fn(10);
//自己指定泛型
let result2 = fn('hello');
//泛型可以同时指定多个
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, "456");
//T必须是Inter的实现类
function fn3(a) {
    return a.length;
}
fn3({ length: 10 });
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('孙悟空');
