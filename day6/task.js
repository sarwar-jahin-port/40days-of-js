// 1. Write a Function to Convert Celsius to Fahrenheit
function converter (cel) {
    return (cel * 9/5)  + 32;
}

// 2. Create a Function to Find the Maximum of Two Numbers
function findMax (a, b) {
    return Math.max(a, b);
}

// 3. Function to Check if a String is a Palindrome

function checkPalindrome (text) {
    const reversed = text.toLowerCase().split("").reverse().join("");
    return reversed === text;
}

// 4. Write a Function to Find Factorial of a Number
function factorial (n) {
    if(n===0 || n ===1){
        return 1;
    }

    return n * factorial(n-1);
} 

// 5. Write a function to Count Vowels in a String

function countVowels(text){
    const splited = text.toLowerCase().split("");
    let count=0;
    for(let l in splited){
        if(l==='a' || l === 'e' || l==='i' || l==='o' || l==='u'){
            count++;
        }
    }
    return count;
}

// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence

function Capitalized(text){
    const splited = text.split(" ");
    let result = "";
    for(let word of splited){
        let update = word.charAt(0).toUpperCase() + word.substring(1);
        result+=update + " ";
    }
    return result;
} 

// 7. Use an IIFE to Print “Hello, JavaScript!”
(function(){
    console.log("Hello, JavaScript!");
})()

// Create a Simple Callback Function
const sumandMultiply = true;

function multiply(a, b){
    return a * b;
}
function calculate(a, b, multiply){
    if(sumandMultiply){
        return a + b + multiply(a, b);
    }
    return a + b;
}

// 9. Create Call Stack Execution Diagram for this flowfunction f1() {}
function f2() {
    f1();
}
f2();

// f2 in -> f1 in -> f1 out -> f2 out

// 10. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
//  f2 in -> f2 out 
//  f3 in -> f1 in -> f1 out -> f3 out
//  f1 in -> f1 out