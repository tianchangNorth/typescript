class Dog {
    //构造函数 会在对象创建时调用
    constructor(name, age) {
        //this 在实例方法中表示当前实例
        //当前实例就是当前新建的实例
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.name);
    }
}
const dog = new Dog("小黑", 4);
const dog2 = new Dog('小白', 6);
console.log(dog);
console.log(dog2);
dog2.bark();
export {};
