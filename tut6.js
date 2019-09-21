// Strings: Properties, Methods & Template Literals in JavaScript

// concat
const fname = "ram";
const lname = "prasad";
name = fname+lname; // method 1
console.log(name);

name = fname.concat(lname); // method 2
console.log(name);

// length
console.log(name.length);

// toLowerCase and toUpperCase
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// slicing string
console.log(name[0]);
console.log(name[1]);

// slicing string using charAt
console.log(name.charAt(0));
console.log(name.charAt(1));


// find index of charector using 
console.log(name.indexOf('a')); // it will print 1st index of char
console.log(name.lastIndexOf('a')); // it will print last index of char

console.log(name.indexOf('z')); // it will print -1 because char 'z' not exists in string

// endsWith
console.log(name.endsWith('d')); // it will print true
// includes
console.log(name.includes('y')); // it is just like contains it will print false
// substring: it will slice string between given char position (only positive)
console.log(name.substring(0,2)); // print char between 0 to 2  (n to n-1)
console.log(name.substring(-3)); // it will return complete string
// slice: it will slice string between given char position (positive and negative both)
console.log(name.slice(0,2)); // print char between 0 to 2  (n to n-1)
console.log(name.slice(-3)); // it will return last 3 char
// split : it will split the string as per delimater and return array 
let txt = "ram is a good boy. my god is ram";
console.log(txt.split(' '))
// replace : it will replace only 1st occurance
console.log(txt.replace('ram', 'shyam'))


// Template Literals
let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myhtml = `Hello ${fname},
                <h4> How are "you. </h4>
                Do you like '${fruit1} and ${fruit2}?`
document.body.innerHTML = document.body.innerHTML.concat(myhtml);









