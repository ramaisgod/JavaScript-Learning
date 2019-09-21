// Data types in Java Script
/* Primitive data type  - stack   - like static
    string
    numbers
    boolean
    null
    undefined
    symbol
*/

/* Reference data type  - heap   - like dynamic
    arrays
    object literals
    functions
    dates
*/

// Primitive data type:
// string
var name = 'Ram'
console.log("My name is " + name);
console.log("data type of name is " + typeof name);
// numbers
let age = 32.5;
console.log("my age is " + age);
console.log("data type of age is " + typeof age);
// boolean
let isDriver = true;
console.log("data type is " + typeof isDriver);
// null
let x = null;
console.log("data type is " + typeof x);  // data type result is object but it is Primitive data dype
// undefined
let y = undefined;
console.log("data type is " + typeof y);

// Reference data type:
// array
let arr = [2, 4, 6, 7, true, 'ram']
console.log("data type is " + (typeof arr));

// object leterals
let marks = {
    ram: 78,
    'rohan kumar': 34,
    melrose: 38
}
console.log(marks);
console.log("data type is " + (typeof marks));

// functions

function myfunc() {
    
}
console.log("data type is " + (typeof myfunc));

// date

let date = new Date();
console.log(date);
console.log("data type of date is " + (typeof date));  // data type of date is object
