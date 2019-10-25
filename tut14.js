/*
Element selector 
1. Single element selector
2. Multi element selector
*/
let element = document.getElementById("a1");
console.log(element);
// element = element.className;
// console.log(element);

// element = element.childNodes;
// console.log(element);
// element = element.parentNode;
// console.log(element);
// element.style.color = 'red';
// element.innerText = 'ramaisgod';
// element.innerHTML = '<b>ramaisgod</b>';
// console.log(element.innerHTML);

// single element selector
let sel = document.querySelector('#a1');  // select using id
// console.log(sel);

let sel1 = document.querySelector('.book');  // get 1st element of the class. select using class name
// console.log(sel1);

sel = document.querySelector('h1')
// console.log(sel);

sel = document.querySelector('div')
// console.log(sel);
sel.style.color='green';

// single element selector
let myElement = document.getElementsByClassName('container');
console.log(myElement);
let el2 = myElement[0].getElementsByClassName('fruit');
console.log(el2);


let divEle = document.getElementsByClassName('container');

// Array.from(divEle).forEach(element => {
// console.log(element);
// element.style.color='blue';
// })

for (let index = 0; index < divEle.length; index++) {
    const element = divEle[index];
    console.log(element);
    element.style.color='cyan';
}













