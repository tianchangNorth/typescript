// 元组就是固定长度的数组
let a:[string,number]
a = ['string',123]
export {};

//enum 枚举
enum gender{
    male,
    female 
}
let  i :{name:string,gender:gender}
i  = {
    name:'north',
    gender:gender.male
}
console.log(i.gender === gender.male);

//类的别名
type myType = 1|2|3|4|5
let k:myType
