/*
Functions in Javascript
*/

/* function greet(user){
   return `hello ${user}`;
}
let s = greet("Mathi");
console.log(s); */

// function expression

/* let add = function(num1,num2){
    return num1 + num2;
}

// we can treat add like a function
let result = add(10,10);
console.log(result); */

/* function add(num1,num2,num3){
    return num1+ num2+ num3;

}

let result = add(5,6,10,5);
console.log(result); */


/* let greet = function(){
    return "hello !!";
}
console.log(greet());
//  arrow function

let greets = ()=>{
    return 1;
} */ // arrow function -> we can reduce the code.
/* 
function mean behaviour and we assign it in a variable.

*/

let addnum = (num1,num2)=> num1 + num2;


/* let sum = addnum;
let result = sum(3,4);
console.log(result);
let greet = ()=> "hello";
let x = greet();
console.log(x); */ 
//--------------------

let laptop = {
     cpu:'i51',
     ram:'16',
     brand:'HP',

     greet: function(){
      console.log(this.cpu);
     }
}
// laptop.greet();// it is not defined since it is inside 

let laptop1 = {
    cpu:'i74',
    ram:'8',
    brand:'Dell',

    greet: function(){
     console.log(this.cpu);
    }
}

//compare.
if(laptop.cpu > laptop1.cpu){
    console.log(laptop);
}else{
    console.log(laptop1);

}

function getFastLaptop(lap1,lap2){
  if(lap1.cpu > lap2.cpu){
    console.log(laptop);
}else{
    console.log(laptop1);

}
}
///----------------nested functions
/* 
function sayhi(fn,ln){
    function getfullname(){
        return fn + " " + ln;
    }
    alert
}

function makeCounter(){
    let count = 0;

    return function(){
        return count++;
    }
}

let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1
alert(counter()); // 2
 */
/// ways to create IIFE
(function(){
    alert("Parentheses around the function");
})();

// 
(function(){
    alert("Parenthesis around the whole thing ");
})
