// odd or even
const number = 5;
const result = number%2 === 0 ? console.log("Even") : console.log("Odd");

// Do you have a driving license
const age = 24;
const isElligible = age >=18 ? "Elligible" : "Not elligible";
console.log(isElligible);

// Calculate CTC with a Bonus
const salary = 12300;
const bonus = ((salary*12) * 20) / 100;
const ctc = (salary * 12) + bonus;
console.log(ctc);

// Write a program for the traffic light simulation
const color = "GREEN";
const line = color === "RED" ? "STOP" : color === "GREEN" ? "GO" : "SYSTEM ERROR";
console.log(line);

// Create an electricity bill calculator
const perDayConsumptionUnits = 3;
const perUnitCost = 150;
const monthlyBill = (perDayConsumptionUnits * perUnitCost * 30)
const discountAmount = ((monthlyBill * 12) * 20)/ 100;
const annualPayment = (monthlyBill * 12) - discountAmount;
console.log("Monthly Bill: ", monthlyBill);
console.log("Annual discounted amount: ", annualPayment);

// Leap year checker
const year = 2023;
let flag = false;
const checker1 = (year % 4) === 0;
const checker2 = (year % 100)===0;
const checker3 = (year % 400) === 0;

if(checker1){
    flag=true;
    if(checker2){
        flag=false;
        if(checker3){
            flag=true;
        }else{
            flag=false;
        }
    }else{
        flag=true;
    }
}else{
    flag=false;
}
console.log(flag);

// max of three numbers
const num1 = 1;
const num2 = 5;
const num3 = -7;

if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }else{
        console.log(num3);
    }
}else{
    if(num2>num3){
        console.log(num2)
    }else{
        console.log(num3);
    }
}

// bitwise doubling
const count = 5;

// 5/2 = 2 (1)
// 2/2 = 1 (0)
// 101 -> <<  1010

const ans = count << 1;
console.log(ans);