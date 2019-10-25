// Manipulating Websites Using JS Window Object
// DOM : Document Object Module

let a = window; // 'window' is a global object in Java script
// console.log(a);
// console.log(window.alert('Hello Ram'));
// console.log(alert('Hello Ram'));

// Ask for input on prompt
// let name = prompt("Enter your name: ");
// console.log(name);

// Display a dialog box to confirm message
// let i = confirm("Are you sure to delete ?");
// console.log(i);

// document object
a = window.document;

a = window.innerHeight;
a = innerWidth;
a = scrollX;
a = scrollY;
a = location;
/*  Run below code on 
To reload:
location.reload()
To get location of website:
location.href
To go other website:
location.href = '//facebook.com'
*/ 
a = location.toString();  // get website address as string
a = window.history; // to see the browsing history
// history.go(-1) // it will go previous one page just like back button and forward button
// history.go(-2) // it will go previous two page
console.log(a);
