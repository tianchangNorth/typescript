//abstract 开头的类是抽象类 不能用来创建对象
//专门用来被继承的类
//抽象类中可以创建抽象方法
abstract class Animal{
    name:string
    constructor(name:string){
        this.name = name
    }

    //抽象方法 没有方法体 只能定义在抽象类中 子类必须对抽象方法进行重写
    abstract sayHello():void
}

class Cat extends Animal{
    sayHello(): void {
        console.log('喵喵喵');
        
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
export{ }