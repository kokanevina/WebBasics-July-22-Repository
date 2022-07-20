// annonnymous functions : no name
let a=67;
const cubeFun=function(num){  
        return num*num*num;
}
console.log(cubeFun(3));
const sqrFun=function(num){
    return num*num;
}
sqrFun(2);

//=>

 const addFun=(...numArray)=>{ 
    var sum=0;
    for(let ele of numArray){
        sum=sum+ele;
    }
    return sum;
}

let sum=addFun(56,78,34,56);
document.write(sum);

// if we have multiple lines of code in body the : arrow functions not preferred
// few code : arrow function
//1. if arrow function have single stmt in body then {} are optional
           //single return stmt : return keyword not allowed, // result gets returned by default
//2. if arrow function have single formal argumnt then () are optional
let cubeArrow=  num=>console.log(num*num*num);
cubeArrow(4);

let cubeArrow1=num=>num*num*num;

let cr=cubeArrow1(5);
console.log(cr);


