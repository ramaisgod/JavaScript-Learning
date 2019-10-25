//Local & Session storage in JavaScript 
console.log("welcome to tut20");

console.log(localStorage);


// set key value pair to local storage
localStorage.setItem('name', 'Ram Krishna');
localStorage.setItem('city', 'Goa');

// clear local storage
//localStorage.clear();

// delete item from local stroage
//localStorage.removeItem("myArray");

// retrieve item from local storage
var name = localStorage.getItem('name');
console.log(name);

// how to store array in local stroage
let myArray = ['Ram', 'Goa', '2019-12-31']
localStorage.setItem("data", JSON.stringify(myArray));

let data = localStorage.getItem('data');
console.log(JSON.parse(data));


// set item in Session storage
sessionStorage.setItem('sName', 'Ram');
sessionStorage.setItem('sCity', 'Mumbai');

// delete item from session stroage
//sessionStorage.removeItem('sName');

// get item from session storage
let sCity = sessionStorage.getItem('sCity');
console.log(sCity);

// how to store array in local stroage
let sMyArray = ['Jai Ram', 'Mumbai', '2020-12-31']
sessionStorage.setItem("data", JSON.stringify(sMyArray));

let sData = sessionStorage.getItem('data');
console.log(JSON.parse(sData));










