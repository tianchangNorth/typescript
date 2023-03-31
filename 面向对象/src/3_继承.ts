//定义一个animal类
class Animal{
    name:string
    age:number
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    run(){
        console.log(`${this.name}在跑`);
        
    }
}

//使dog类继承animal类 animal类为父类 dog为子类  子类将会继承父类所有的属性和方法
//子类中如果添加了和父类相同的方法 那么则会覆盖父类中的方法 这种形式称为方法的重写
class Dog extends Animal{
    sayHello() {
        console.log('汪汪汪');
    }
}
//使cat类继承animal类
class Cat extends Animal {
    sayHello() {
        console.log('喵喵喵');
    }
}

const dog1 = new Dog('旺财', 15);
console.log(dog1);
dog1.sayHello();

const cat1 = new Cat('小花',15)
console.log(cat1);
cat1.sayHello();

cat1.run()
dog1.run()
export{}