let c = 10
function fn(a:number,b:number){
    return a + b
}

let obj = {
    x:100,
    f3:function(){
        this.x
    }
}

function fn2(this:any){
    console.log(this);
    
}

let box = document.querySelector('#id')
if(box !== null){
box.addEventListener("click",function(){
    console.log('niubi 666');
    
})
}
export{}