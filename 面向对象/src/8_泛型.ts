// function fn(a:number):number{
//     return 1
// }
/*
    在定义函数或者类时，如果遇到类型不明确就可以使用泛型
*/
//x就是一个泛型
function fn<x>(a:x):x{
    return a
}
//不指定泛型，ts可以自动对类型就行推断
let result = fn(10)
//自己指定泛型
let result2 = fn<string>('hello')

//泛型可以同时指定多个
function fn2<t,k>(a:t,b:k):t{
    console.log(b);
    return a
}

fn2<number,string>(123,"456")

interface Inter{
    length:number
}
//T必须是Inter的实现类
function fn3<T extends Inter>(a:T):number{
    return a.length
}
fn3({length:10})

class MyClass<T>{
    name:T
    constructor(name:T){
        this.name = name
    }
}
const mc = new MyClass<string>('孙悟空')