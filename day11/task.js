// 1. What will be the output of the following code and why?
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 1
counter(); // 2
// explaination. the outer function returns a function or closure. because it holds the value of count which is declared of it's parent function. and on each call it refers to it's previous value.

// 2. What will be the output and why?

function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()()); // 100
// explaination: first call testClosure returns the function. second call x * x.

// Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

function dynamicButton(){
    let count = 0;

    document.getElementById("dynamic_button")?.addEventListener("click", function (){
        count ++;
        console.log("Clicked ", count, " times");
    })
}
dynamicButton();

// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier){
    return function(num) {
        console.log(num * multiplier);
    }
}

const double = createMultiplier(2);
(double(5));

// 5. What happens if a closure references an object?
// ans: ii the object remains in the memory as long as the closure exists

// 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

function counterFactory(){
    let count = 0;

    return{
        "increment": (value=1) => {
            count += value;
        },
        "decrement": (value=1) => {
            if(count<value){
                console.log("Can't decrease");
            }else{
                count -= value;
            }
        },
        "reset": () => {
            count = 0;
        },
        "currentValue": () => {
            console.log(count);
        }
    }
}

const test = counterFactory();
test.increment(); // 1
test.increment(5); // 6
test.decrement(4); // 2
test.decrement(); // 1
test.reset(); // 0
test.currentValue(); // 0