//使用class定义一个类
//对象中主要包含两个部分 对象和方法
class Person {
    constructor() {
        /* 直接定义的是实例属性，需要通过对象实例访问
            cost per = new Person()
            per.name
    
            使用static开头的是静态属性(类属性)
            无需创建对象 可以直接通过类访问 Person.age
    
            readonly表示一个只读的属性
        */
        //定义实例属性
        this.name = '宿五克';
    }
    //定义方法 static开头就是静态方法
    sayhello() {
        console.log('hello everyone');
    }
}
//在属性前使用static关键字可以定义类属性 (静态属性)
Person.age = 18;
const per = new Person();
console.log(per);
console.log(per.name);
console.log(Person.age);
per.sayhello();
export {};
