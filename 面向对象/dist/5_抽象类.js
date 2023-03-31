"use strict";
//abstract 开头的类是抽象类 不能用来创建对象
//专门用来被继承的类
//抽象类中可以创建抽象方法
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Cat extends Animal {
    sayHello() {
        console.log('喵喵喵');
    }
}
class Dog extends Animal {
    //如果子类中写了构造函数 必须对父类中的构造函数进行调用
    constructor(name, age) {
        super(name); //调用父类的构造函数
        this.age = age;
    }
    sayHello() {
        //在类的方法中super就表示当前类的父类
        // super.sayHello()     
        console.log('wang wang wang');
    }
}
const dog = new Dog('旺财', 45);
dog.sayHello();
