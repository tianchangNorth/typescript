class Animal{
    name:string
    constructor(name:string){
        this.name = name
    }

    sayHello(){
        console.log('动物叫');
        
    }
}

class Dog extends Animal{
    age:number;
    //如果子类中写了构造函数 必须对父类中的构造函数进行调用
    constructor(name:string,age:number){
        super(name);  //调用父类的构造函数
        this.age = age
    }
    sayHello(){
        //在类的方法中super就表示当前类的父类
        // super.sayHello()     
        console.log('wang wang wang');
        
    }
}
const dog = new Dog('旺财',45)
dog.sayHello()
export{}