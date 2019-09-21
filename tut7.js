// Arrays and Objects In JavaScript

// define array
const marks = [34, 45, 12, 65, 46];
const fruits = ['Orange', 'Apple', 'Banana'];
console.log(marks);
console.log(fruits);
console.log(fruits[0]);
fruits[0] = 'Ram';
console.log(fruits);

// define array
const arr = new Array(43, 67, 98, 'Orange');
console.log(arr);
console.log(Array.isArray(arr));

// indexOf
let i = marks.indexOf(65);
console.log(i);

// mutating or modifying arrays
marks.push(99); // it will add element at end of the array
console.log(marks);
marks.unshift(100); // it will add element at begining of the array
console.log(marks);

marks.pop(); // it will remove last element of array
console.log(marks);
marks.shift(); // it will remove first element of array
console.log(marks);

marks.splice(2, 3); // it will remove 3 element starting from index 2
console.log(marks);

marks.reverse(); // it will arrange array elements in reverse order
console.log(marks);

// concat array
let a = [11, 12, 13, 14, 15];
const b = [22, 23, 24, 25, 26];
a.concat(b); // it will not change in original array a 
console.log(a);
a = a.concat(b); // it will update in original array a 
console.log(a);

// array object
let myObj = {
    'name': 'Ram Krishna',
    'company': 'TCS',
    'empid': 3443434,
    'staff_id': [67676, 878787, 443433, 323540]
}

console.log(myObj);
console.log(myObj.empid);
console.log(myObj.staff_id);













