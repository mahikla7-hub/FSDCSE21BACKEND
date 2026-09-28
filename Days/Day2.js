//Synchronous and asynchronous programming
//Synchronous programming: code is executed line by line, on 
/*console.log("java script");
function hello(){
    console.log("hello, World!");
}
hello()
console.log ("this is synchronous programming");
const hello = () => {
    setTimeout (() => {
        console.log("hello, world");
    }, 2000);
}
hello();
console.log("This is a asynchronous programming");

function add(n1,n2,callback ){
    console.log(n1+ n2);
    callback();
}
let a=10;
let b=20;
add(a,b,sayHi);
add(a,b,hello);

function sayHi(){
    console.log("This is called Callback function");
}
function hello(){
    console.log("Hello,World!");
}*/
//create a function display(callback) that print "Welcome to ABES, then call callback which print learning "FSD in CSE 21"

function display(callback) {
  console.log("Welcome to ABES");
  callback(); 
}
function learningDetails() {
  console.log("learning FSD in CSE 21");
}

display(learningDetails);