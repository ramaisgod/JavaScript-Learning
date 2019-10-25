console.log("welcome to tut18.")
let btn = document.getElementById('btn_form');
btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);
btn.addEventListener('mousedown', func3);

function func1(e) {
    console.log("thank you for submit");
    e.preventDefault();  // to stop default behaviour
}

function func2(e) {
    console.log("you have double clicked");
    e.preventDefault();
}

function func3(e) {
    console.log("your have moved mouse down");
    e.preventDefault();
}

document.querySelector("#inputEmail4").addEventListener('click', function () {
    console.log("you have clicked in email field");
})

document.querySelector(".container").addEventListener('mousemove', function(e){
    console.log('x='+ e.offsetX, 'y='+ e.offsetY);
    //document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 200)`;
})


