//function in js:block of code
//syntax :
//function fname(){
//}
//fname();
function add(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}
add(2, 1);
//arrow function
//variable in js:container to store data
//var, let, const
//syntax:()=>{}
const sub = () => {
    console.log("arrow function")
}
sub();
const ad = (num1, num2) => {
    return num1 + num2;
}
console.log(ad(2, 5));
function addnum(num1 , num2){
    console.log(arguments);
}
addnum(24,25,26,27)
//node.js:runtime environment to run js code outside the browser
