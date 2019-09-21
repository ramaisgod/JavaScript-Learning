// Type Conversion

// Ex-1
let i;
i = 32;
console.log(i, (typeof i));

i = String(32);
console.log(i, (typeof i));

// Ex-2
booleanVar = true;
console.log(booleanVar, (typeof booleanVar));

booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

// Ex-3
let date = new Date();
console.log(date, (typeof date));

let date2 = String(new Date());
console.log(date2, (typeof date2));

//Ex-4
let arr = [54, 76, 32, 98, 9];
console.log(arr, (typeof arr));
console.log("Length of array ", arr.length, (typeof arr));

let arr1 = String([54, 76, 32, 98, 9]);
console.log(arr1, (typeof arr1));
console.log("Length of string ", arr1.length, (typeof arr1));

// Type conversion to string using toString:
// Ex-5
let myVar = 5;
console.log(myVar.toString());

//Ex-6
let date3 = new Date();
d = date3.toString()
console.log(d, (typeof d));

// Converting to number:

//Ex-7
let x = "32";
x1 = Number(x);
console.log(x1, (typeof x1));

//Ex-7
let y = "32a";
y1 = Number(y);
console.log(y1, (typeof y1)); // it will return NaN (not a number)

//Ex-8
let isStaff = true; // Remember true = 1 , false = 0
console.log(isStaff, (typeof isStaff));
console.log(Number(isStaff), (typeof isStaff));

// convert to number using parseInt (parseInt will remove decimal part of number)
let num1 = '78.95';
console.log(num1, typeof(num1));
num2 = parseInt(num1);
console.log(num2, typeof(num2));

// convert to number using parseFloat (parseFloat will show decimal part of number)
num3 = parseFloat(num1);
console.log(num3, typeof(num3));

// set decimal place using toFixex (toFixed is used to set decimal place with numbers)
age = 46
console.log(age, typeof(age));
console.log(age.toFixed(), typeof(age)); // no decimal place
console.log(age.toFixed(2), typeof(age)); // give 2 decimal place


// Type Coercion
let val1 = "234"; // string
let val2 = 56; // number
console.log(val1+val2); // it will concatenate 23456

console.log(Number(val1)+val2); // it will sum 290
