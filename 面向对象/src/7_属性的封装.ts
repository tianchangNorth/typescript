class Person{
    //ts可以在属性前添加属性修饰符
    /* 
        public 修饰的属性可以在任意位置修改
        private 私有属性 只有在类内部可以修改（访问）
            通过在类中添加方法使得私有属性可以被外部访问
        readonly 只读属性
    */
    private _name:string
    private _age:number

    constructor(name:string,age:number){
        this._name = name
        this._age = age
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
    get name(){
        return this._name
    }
}

const per = new Person('许晨阳',45)

//属性中的数据可以被任意修改可能会导致对象中的数据十分不安全
// per.age = -58
// per.name = 'jiuye'

// console.log(per.getName());
// per.setName('猪八戒')
// console.log(per.getName());
// per.setAge(-35)
console.log(per);


