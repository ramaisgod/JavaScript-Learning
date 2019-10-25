let emt = document.querySelector('.p-2');
console.log(emt);

emt = document.querySelector('.container');
// console.log(emt);

console.log(emt.childNodes); // print Nodelist including hidden text, comments, newline

console.log(emt.children); // print Nodelist of only elements without hidden text, comments, newline

let nodename = emt.childNodes[0].nodeName;
console.log(nodename);

let nodename2 = emt.children[1].nodeName;
console.log(nodename2);
/*
Node Type:
1 = element
2 = attribute
3 = text node
8 = comments
9 = document
10 = docType
*/
let nodetype = emt.childNodes[0].nodeType;
console.log(nodetype)
let nodetype2 = emt.children[1].nodeType
console.log(nodetype2);

let ctr = document.querySelector('div.container');
console.log(ctr);
console.log(ctr.children[0].children[0].getElementsByClassName('card-header')[0].innerText);

console.log(ctr.firstChild);
console.log(ctr.firstElementChild);

console.log(ctr.lastChild);
console.log(ctr.lastElementChild);

console.log(ctr.children);
console.log(ctr.childElementCount);

console.log(ctr.firstElementChild.parentNode);
console.log(ctr.firstElementChild.nextElementSibling);
console.log(ctr.firstElementChild.nextElementSibling.nextElementSibling);
















