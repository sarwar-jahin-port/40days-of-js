// Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.
function example() {
    console.log(a); // tdz starts from here
    console.log(b);
    console.log(c);
    var a=5; // for a ends here
    let b=10; // for b ends here
    const c=15; //for c ends here
}

// example();

// Explain Variable and Function Hoisting with Example. Post the code as your answer.

// variable hoisting
console.log(a);
console.log("I am between");
var a = 5;
console.log(a);

// function hoisting

example1();

function example1(){
    console.log("I am example1");
}