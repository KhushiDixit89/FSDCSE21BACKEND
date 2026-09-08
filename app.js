//function in js:block of data
//syntax:
//function fname(){
//}
//fname();
function add(num1, num2) {
    console.log(num1+num2);
    return num1+num2;
}
add(2,1);
//arrow function 
//variable in js:container to store data
//syntax: ()=>{}
    const sub=()=>{
        console.log("arrow function")
    }
sub();
const ad=(num1, num2)=>{
    return num1+num2;
}
console.log(ad(3,5));
function addnum(num1,  num2){
    console.log(arguments);
}
addnum(24, 25, 26 ,27)
//node.js:runtime environment to run js code outside the browser
