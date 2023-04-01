const obj = {
    name: '张三',
    age: 11,
    gender: '男'
};
//定义类时可以实现一个接口
//实现接口就是使类满足接口的要求
class MyClass {
    sayHello() {
        console.log('大家好');
    }
    ;
    constructor(name) {
        this.name = name;
    }
}
export {};
