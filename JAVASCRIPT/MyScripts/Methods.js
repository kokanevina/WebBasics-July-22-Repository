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

// forEach: internal loop

let array=[67000,78000,45000,67000,98000,89000,78000];
console.log(array);

function callBack(ele,index,ar){
    console.log("callback called");
    console.log(ele+" "+index+" "+ar);
}

array.forEach(callBack);
array.forEach(function(ele,index,ar){
    console.log("callback called");
    console.log(ele+" "+index+" "+ar);
});

array.forEach(function(ele){
    console.log(ele);
});
array.forEach((ele,index,ar)=>{
    console.log("callback called");
    console.log(ele+" "+index+" "+ar);
});

array.forEach(e=>console.log(e));

// map : visit e->new e -> store in array
//in the end it will return u that new array
array=[67000,78000,45000,67000,98000,89000,78000];
//[69000,80000,47000,69000,100000,91000,80000]

function myLogic(array){
    let temp=[];
   for(let ele of array){
        ele=ele+2000;
        temp.push(ele);
   }
    return temp;
}
let resultarray=myLogic(array);
console.log(array);
console.log(resultarray);

let resar=array.map(e=>e+2000);
console.log(resar);