let a: number = 12;
let c: boolean = true;
//如果声明和赋值同时进行那TS可以自动对变量类型进行检测
let b = "string";

function sum(a: number, b: number): number {
  return a + b;
}
//可以使用 | 来连接多个类型(联合类型 )
let d: number | boolean;
d = 12;
d = true;
let person: "man" | "woman";
person = "man";
person = "woman";

let f: object;
f = { a: 1 };

//any任意数据类型
let g: any;
g = 152;
g = "string";
console.log(sum(123, 456));
console.log(person);

export {};
