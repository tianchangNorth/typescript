"use strict";
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    /*
        getter方法用来读取属性
        setter方法用来设置属性
    */
    //定义方法 获取name
    // getName(){
    //     return this.name
    // }
    //定义方法 来设置name属性
    // setName(value:string){
    //     this.name = value
    // }
    // setAge(value:number){
    //     if(value >= 0){
    //         this.age = value
    //     }
    // }
    //ts中设施getter方法的方式
    get name() {
        return this._name;
    }
}
const per = new Person('许晨阳', 45);
//属性中的数据可以被任意修改可能会导致对象中的数据十分不安全
// per.age = -58
// per.name = 'jiuye'
// console.log(per.getName());
// per.setName('猪八戒')
// console.log(per.getName());
// per.setAge(-35)
console.log(per);
