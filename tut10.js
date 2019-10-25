// Functions in JavaScript
//Ex-1
function greet(name, thank='Thank you'){
    msg = `Dear ${name}, Happy birthday! I hope you feel special and have a great day. You are one of the coolest people I know. ${thank}`;
    return msg;
}
name = 'Ram';
let var1 = greet(name);
console.log(greet(name));
console.log(greet('Rani', 'Thanks a lot'))

//Ex-2
function getAge(dob){
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
dob = '03/31/1988'; // date fomrat mm/dd/yyyy
console.log("You are "+ getAge(dob));


// Ex-3 : Passing function inside the objects
const myObj = {
    name: 'Ram Krishna',
    age: function(){
        return 'You are Adult';
    }
}

console.log(myObj.name);
console.log(myObj.age());

// Scope in JavaScript
/*
let/const is block level scope. for good programming, do not define let/const inside the block like below.
{
    let x = 10;       // do not do this.
    const y = 20;     // do not do this.
}
var is function level scope.
*/
//Ex-1
console.log("Example-1 of Scope")
var age = 10;
console.log(age);

function myAge(){
    var age = 20;
    return `You are ${age}`
}

console.log(myAge(), age);

//Ex-2
console.log("Example-2 of Scope")
var age = 10;
console.log(age);

function myAge(){
    age = 20;       // here age is without 'var', in this case, it will changes in global var
    return `You are ${age}`
}

console.log(myAge(), age);

//Ex-3
console.log("Example-3 of Scope")
var age = 10;
console.log(age);

function myAge(){
    let age = 20;       // here let/const is block level
    return `You are ${age}`
}

console.log(myAge(), age);

//Ex-4
console.log("Example-4 of Scope")
let age1 = 10;
console.log(age);

function myAge(){
    let age1 = 20;       // here let/const is block level
    return `You are ${age1}`
}

console.log(myAge(), age1);




