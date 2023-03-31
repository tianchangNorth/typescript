//描述一个对象的类型
type myType = {
    name:string,
    age:number,
    // [propname:string]:any
}

//接口就是用来定义一个对象的结构 类中应该包含哪些属性和方法
interface myInterface{
    name:string,
    age:number
}

interface myInterface{
    gender:string
}

const obj:myInterface = {
    name:'张三',
    age:11,
    gender:'男'
} 

/*  接口可以在定义类的时候去限制类的结构
    接口中的所有属性都不能有实际的值
    接口只定义对象的结构而不考虑实际值
    接口中的所有方法都是抽象方法
*/
interface myInter{
    name:string
    sayHello():void
}

//定义类时可以实现一个接口
//实现接口就是使类满足接口的要求
class MyClass implements myInter{
    sayHello(): void {
        console.log('大家好');
        
    };
    name:string
    constructor(name:string){
        this.name = name
    }

}