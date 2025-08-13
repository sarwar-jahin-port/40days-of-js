// 1. What will be the output of the following code and why?
let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();
// output: TDZ, reference error

// 2. What is the mistake in the code below?

let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);
// here total can be manopulated as it's global.
// best practice;

function add(total, num){
    return total+=num;
}

let total = 0;
add(total, 5);
add(total, 10);

// 3. Create a function with a nested function and log a variable from the parent function.

function parent(){
    let a = 5;
    function child(){
        console.log(a);
    }
    child();
}
parent();

// Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function test(){
    for(let i=0; i<5; i++){
        console.log(i);
    }
    console.log(i); // will get reference error;
}
test();

// 5. Write a function that tries to access a variable declared inside another function.
function func1(){
    let a = 5;
    console.log(a);
}
function func2(){
    console.log(a);
}
func1();
func2();

// 6. What will be the output and why?
console.log(a);
let a = 10;

// output: reference error. because a is loged before it's declaration.

// 7. Where is the age variable accessible?
function showAge() {
    let age = 25;
    console.log(age); // accessible here. only inside showAge
}

console.log(age);

// 8. What will be the output and explain the output?
let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message); // Hi
    }

    inner();
}

outer();

// because js always search in it's current scope first. then search at the nearest scope 

// 9. What will be the output and why?
let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x); // Inner
    }

    inner();
}

outer();
// because js always search in it's current scope first. then search at the nearest scope 

// 10. What will be the output and why?
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce(); // -1
reduce(); // -2