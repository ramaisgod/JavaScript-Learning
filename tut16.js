// Creating , Removing, Replacing elements
console.log('welcome to tut16');

// Creating Element
let myElement = document.createElement('li');

// console.log(myElement);
// Add class name, id, text, attribute etc. to created element
// myElement.className = "list-unstyled mt-3 mb-4"; 
myElement.id = "newItem1";
myElement.setAttribute('title', 'MyTitle');
//Adding text to new element - method -1
myElement.innerHTML = "<b>Database Support - new element</b>"
console.log(myElement);
//Adding text to new element - method -2
let text = document.createTextNode("My new text node");
myElement.appendChild(text);
console.log(myElement);
// selecting <ul> element which class is "list-unstyled"
let ul = document.querySelector('ul.list-unstyled'); 
// add new element to existing element 
ul.appendChild(myElement);
// console.log(ul);
let myElement2 = document.createTextNode("2nd element");
myElement.replaceWith(myElement2);

// Replacing existing element
let myUL = document.getElementById("myUL");
let myElement3 = document.createTextNode("3rd element");
console.log(myUL);
myUL.replaceChild(myElement3, document.getElementById('myli'));

// Removing element
ul.removeChild(document.getElementById('myli2'));

// get attribute
let a = ul.getAttribute('id');
console.log(a);
a = ul.getAttribute('class');
console.log(a);
a = ul.hasAttribute('href');
console.log(a);
a = ul.removeAttribute('id');
console.log(ul);

// Solved Quiz - Create Header element and a href
let myH1 = document.createElement('h4');
text = document.createTextNode("Go to CodeWithHarry");
myH1.appendChild(text);
console.log(myH1);
let pricing_header = document.querySelector('h1.display-4');
pricing_header.appendChild(myH1);
console.log(pricing_header);

let myhref = document.createElement('a');
myhref.setAttribute('href', 'https://www.codewithharry.com');
myH1.append(myhref);













