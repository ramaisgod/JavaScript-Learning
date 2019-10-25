// Understanding DOM & Creating a Website Layout
let a = window.document;
console.log(a);

// a = document.all;
// Array.from(a).forEach(function(element) {
//     console.log(element);  
// })

a = document.body;
console.log(a);

a = document.links;
console.log(a);

// look on all links on website
a = document.links;
Array.from(a).forEach(function(element) {
    console.log(element.href);
})

