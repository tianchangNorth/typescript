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

//unknow未知类型 类型安全的any
//unknow 类型的变量不能赋值给其它变量
let h:unknown
h = 10
h = true
let i:number

//类型断言 告诉解析器变量的实际类型
h = 'hello'
let j:string
j = h as string
j = <string>h
console.log(sum(123, 456));
console.log(person);

//void 表示为空，就表示没有返回值的函数
function fn():void {
}

//never 表示永远不会返回结果  一般用于报错
function fn2():never{
    throw new Error("报错!!!    ");
    
}

export {};
