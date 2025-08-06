// What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
// output: It's a normal day.

// Build an ATM cash withdrawal system
const withdraw = 1000;

if(withdraw % 100 === 0){
    console.log("Withdrawal successful");
}else{
    console.log("Invalid amount");
}

// Build a calculator with switch-case
const op1 = 5;
const op2 = 10;
const operator = '+';

switch(operator){
    case '+':
        console.log(op1 + op2);
        break;
    case '-':
        console.log(op1 - op2);
        break;
    case '*':
        console.log(op1 * op2);
        break;
    case '/':
        console.log(op1 / op2);
        break;
    default:
        console.log("Invalid operation");
}

// Pay for your movie ticket
const personAge = 24;

if(personAge < 18){
    console.log("Ticket price: $3");
}else if(personAge >=18 && personAge <=60){
    console.log("Ticket price: $10");
}else if(personAge > 60){
    console.log("Ticket price: $8");
}else{
    console.log("Aliens are not allowed");
}

// Horoscope sign checker
const MOB = "january";

switch(MOB){
    case 'january':
        console.log("Capricorn");
        break;
    case 'february':
        console.log("Aquarius");
        break;
    case 'march':
        console.log("Pisces");
        break;
    case 'april':
        console.log("Aries");
        break;
    case 'may':
        console.log("Taurus");
        break;
    case 'june':
        console.log("Gemini");
        break;
    case 'july':
        console.log("Cancer");
        break;
    case 'august':
        console.log("Leo");
        break;
    case 'september':
        console.log("Virgo");
        break;
    case 'october':
        console.log("Libra");
        break;
    case 'november':
        console.log("Scorpio");
        break;
    case 'december':
        console.log("Sagittarius");
        break;
    default:
        console.log("Exception found");
}

// Which Triangle?
const side1 = 10;
const side2 = 10;
const side3 = 10;

if((side1 === side2) && (side2===side3)){
    console.log("Equilateral Triangle");
}else if((side1 === side2) || (side2===side3) || (side1 === side3)){
    console.log("Isosceles Triangle");
}else{
    console.log("Scalene Triangle");
}