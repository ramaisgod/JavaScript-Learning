// For, While & Do while Loops

let a = 10;
a += 1; // this will add 1 in a
console.log(a);
a++;  // this will also add 1 in a
console.log(a);

// For loop
console.log("Example of For Loop");
for(let x=0; x<10; x++){
    console.log(x);
}

// While loop : this loop will run only when condition is true otherwise loop will not run
console.log("Example of While Loop");
let i = 5;
while(i<10){
    console.log(i+1);
    i+=1;
}

// Do While loop : this loop will must run at least once when condition either true or false
console.log("Example of Do While Loop");
let c = 0;
do {
    console.log(c+1);
    c += 1;
} while(c<10);

// Ex-1
console.log("Example-1 of Do While Loop");
let d = 0;
do {
    console.log(d+1);
    if (d===5){
        break;
    }
    d += 1;
} while(d<10);

// Ex-2
console.log("Example-2 of Do While Loop");
let j = 0;
do {
    if (j===5){
        j +=1;
        continue;    
    }
    console.log(j+1);
    j += 1;
} while(j<10);

// For loop on array element
console.log("Example of Loop on array");
let arr = [12, 45, 324, 98];
// Method-1
arr.forEach(function(element) {
    console.log(element);
});
// Method-3
console.log("Example of Loop on array with details");
arr.forEach(function(element, index, array) {
    console.log(element, index, array);
});
// Method-3
console.log("Example of Loop on array");
for(let k=0; k < arr.length; k++){
    console.log(arr[k]);
}

// For loop on objects
console.log("Example of loop on objects");
let myObj = {
    name: "Ram Krishna",
    age: 32,
    role: 'Python Developer'
}

for(let key in myObj){
    // console.log(myObj[key]);
    console.log(`${key} is ${myObj[key]}`);
}
