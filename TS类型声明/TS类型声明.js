"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 12;
var c = true;
//如果声明和赋值同时进行那TS可以自动对变量类型进行检测
var b = 'string';
function sum(a, b) {
    return a + b;
}
//可以使用 | 来连接多个类型(联合类型 )
var d;
d = 12;
d = true;
var person;
person = 'man';
person = 'woman';
console.log(sum(123, 456));
console.log(person);
