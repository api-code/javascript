// 1.ways to print in js
// console.log("hello user");
// alert("somthing wrong");
// document.write("this is document write");

// 2. js console API
// console.log("hello user");
// alert("somthing wrong");
// document.write("this is document write");
// console.warn("this is waringing");
// console.error("this is an error");


//3. javascript variable
// variables are container to store data values
var num1=34;
var num2=56;
// console.log(num1+num2);

// 4. data types in js
// number
var num1 = 56;
// string
var str1="this is a string";

// objects
var marks={
  ravi:34,
  raju:38,
  kajol:39,
  ajay:49
}
// console.log(marks);

// booleans
var a=true;
var b = false;

// undefined
// var und=undefined; or belove
var und;
// console.log(und);

//  Arrays
var arr=[1,2,"api",4,5];
// console.log(arr);


// operators
var a=100;
var b=10;

// 1. Arithmatic operators - + - * /
// console.log("the value of a + b is ",a+b);
// console.log("the value of a - b is ",a-b);
// console.log("the value of a * b is ",a*b);
// console.log("the value of a / b is ",a/b);

// 2. assignment operator
var c= b;
c+=2; //c = c+2;
c-=2; //c=c-2
c*=2;  //c=c*2
c/=2; //c=c/2;

//3. comparison op
var x= 30;
var y=4;
// console.log(x==y); //return false
// console.log(x>=y); //return true
// console.log(x<=y); //return false

// 4.logical op
// And &&
// console.log(true && true); //true
// console.log(true && false); //false
// console.log(false && false); //false
// Or ||
// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || false); //false
// Not !
// console.log(!true); //false
// console.log(!false); //true

// functions

function avg(a,b){
  c = (a+b)/2;
  return c;
}
c=avg(4,6);


// array iteration
var arr=[2,9,6,4,10];
for(var i=0;i<arr.length;i++){
  console.log(arr[i]);
}arr.forEach(function(element) {
  console.log(element);
})