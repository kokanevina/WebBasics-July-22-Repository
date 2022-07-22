let fnameNode=document.getElementById("fname");
let ageNode=document.getElementById("age");
let mobileNode=document.getElementById("contact");
let emailNode=document.getElementById("mail");
let passNode=document.getElementById("pass");
let c_passNode=document.getElementById("confirmpass");
let unameNode=document.getElementById("uname");
let errorNode1=document.getElementById("error1");
let errorNode2=document.getElementById("error2");
let errorNode3=document.getElementById("error3");
let errorNode4=document.getElementById("error4");
let errorNode5=document.getElementById("error5");
let errorNode6=document.getElementById("error6");
let errorNode7=document.getElementById("error7");
let array=[errorNode1,errorNode2,errorNode3,errorNode4,errorNode5,errorNode6,errorNode7];
for(let node of array){
  node.style.color="red";
}

function validate1(){
    let fname=fnameNode.value;
    let regex=new RegExp("^[A-Za-z]*$");
    errorNode1.innerHTML="";
    if(fname===''){
        errorNode1.innerHTML="<small>First name is required</small>";
        fnameNode.style.border="2px solid red";
    }
    else if(regex.test(fname)==false){
        errorNode1.innerHTML="<small>First name must have only letters</small>";
        fnameNode.style.border="2px solid red";
    }
    else{
        fnameNode.style.border="2px solid green";
    }
}
function validate2(){
    let age=ageNode.value;
    errorNode2.innerHTML="";
    if(age===''){
        errorNode2.innerHTML="<small>Age is required</small>";
        ageNode.style.border="2px solid red";
    }
}
function validate3(){
    let mobile=mobileNode.value;
    errorNode3.innerHTML="";
    if(mobile===''){
        errorNode3.innerHTML="<small>Mobile number is required</small>";
        mobileNode.style.border="2px solid red";
    }
}
function validate4(){
    let email=emailNode.value;
    errorNode4.innerHTML="";
    if(email===''){
        errorNode4.innerHTML="<small>Email is required</small>";
        emailNode.style.border="2px solid red";
    }
}
function validate5(){
    let uname=unameNode.value;
    errorNode5.innerHTML="";
    if(uname===''){
        errorNode5.innerHTML="<small>username is required</small>";
        unameNode.style.border="2px solid red";
    }
}
function validate6(){
    let pass=passNode.value;
    errorNode6.innerHTML="";
    if(pass===''){
        errorNode6.innerHTML="<small>Password is required</small>";
        passNode.style.border="2px solid red";
    }
}
function validate7(){
    let cpass=c_passNode.value;
    errorNode7.innerHTML="";
    if(cpass===''){
        errorNode7.innerHTML="<small>Password is required</small>";
        c_passNode.style.border="2px solid red";
    }
}