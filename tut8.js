// If Else Conditionals & Switches in JavaScript
// = is assignment operator
// == is comparision operator. it will compare only 'value' not 'type'
// === is comparision operator. it will compare both 'value' and 'type'

let age = 18;
// Ex-1
if (age < 18){
    console.log("Not Eligible. Your are under 18.");
}
else if (age == 18){            // here == is will compare only 'value' not 'type'
    console.log("You are 18");
}
else{
    console.log("Your are Eligible.");
}

// Ex-2
age = 60;
if (age === '60'){    // here === is will compare both 'value' and 'type'
    console.log("You are senior citizen at age 60. Type of age is string.");
}
else if(age === 60){
    console.log("You are senior citizen at age 60. Type of age is number.")
}
else{
    console.log("Age is not valid.");
}

// Ex-3
age = 55;
if (age !== '55'){       // here !== means 'value' and 'type' both not match  
    console.log("Age is not valid");
}
else{
    console.log("Age is valid");
}

// Check if variable exists or not
// let myVar = 332;
if (typeof myVar !== 'undefined'){
    console.log("myVar variable is defined");
}
else{
    console.log("myVar variable is not defined");
}

// Ex-4
let isEmployee = false;
if (isEmployee){
    console.log("You are employee.");
}
else{
    console.log("You are not employee.")
}
// Ex-5 with and condition
isVoterCard = true;
age = 18;
if (isVoterCard && age>=18){
    console.log("You can vote");
}
else{
    console.log("You can not vote");
}
// Ex-6 with or condition
isVoterCard = false;
age = 18;
if (isVoterCard || age>18){
    console.log("You can vote");
}
else{
    console.log("You can not vote");
}

// how to use Ternary Operator
age = 61
console.log(age>18? "You are eligible": "You are not eligible");
let msg = age <= 18 ? "Child" : age > 60 ? "Senior Citizen" : age > 18 ? "Adult" : "Invalid";
console.log(msg);

// Switches 
age = 180;
switch (age){
    case 17:
        console.log("You are 17");
        break;
    case 18:
        console.log("You are 18");
        break;
    case 65:
        console.log("You are 65");
        break;
    default:
        console.log("Invalid age");
        break;
}


