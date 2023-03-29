//使用{}来指定对象中包含哪些属性
//在属性名后边加？表示可选属性
let a:{name:string,age?:number}
a ={name:'scy'}

let b:object 
b ={age:10}
b ={age:10,name:'111'}
b = function(){}
b = []

//[propName:string]:any 表示任意类型的属性
let c:{name:string,[propName:string]:any}
c = {name:'111',age:123,sex:'男'}

//设置函数结构的类型声明
let d:(a:number,b:number)=>number
d = function(n1,n2){
    return n1 + n2
}

//string[]表示字符串里都是字符串
let e:String[]
e = ['asas','asas','hello']

//number[] == Array<number>
let f:Array<number>
f = [1,2,32]
export {};