// Generate a Pyramid Pattern using Nested Loop as it is shown below:
for(let i = 1; i<=5; i++){
    result = "";
    for(let j = 0; j < i; j++){
        result +="* ";
    }
    console.log(result);
}

// Create multiplication table (using for loop)
const num = 3;

for(let i=1; i<=10;  i++){
    console.log(num, " * ", i, " = ", num*i);
}

// Find the summation of all odd numbers between 1 to 500 and print them on teh console log.

for(let i=1; i<=500; i++){
    if(i%2!==0){
        console.log(i);
    }
}

// Skipping multiples of 3

for(let i=1; i<=20; i++){
    if(i%3!==0){
        console.log(i);
    }
}

// Reverse Digits of a Number (Using while loop)
let digit = 100;
let answer = "";
while(Math.trunc(digit)){
    let ans = digit%10;
    answer+=ans;    
    digit=digit/10;
}
console.log(answer);

// for: 
// 1. used when number of iteration is known

// while:
// 1. used when number of iteration is unknown

// do-while:
// 1. same is while exception is it will iterate at least for once.