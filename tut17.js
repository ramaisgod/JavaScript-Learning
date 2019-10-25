// Events & Event Object In JavaScript
console.log("Welcome to tut17")

document.getElementById('headingId1').addEventListener('click', function(e) {
    console.log("You have clicked on Pricing");
    console.log(e);
    let myVar = e.target
    console.log(myVar);
    myVar = e.target.className
    console.log(myVar);
    myVar = e.target.classList;
    console.log(myVar);
    myVar = Array.from(e.target.classList);
    console.log(myVar);
    myVar = e.target.id;
    console.log(myVar);
    myVar = e.offsetX;
    console.log(myVar);
    myVar = e.offsetY;
    console.log(myVar);
    myVar = e.clientX;
    console.log(myVar);
    myVar = e.clientY;
    console.log(myVar);
    // location.href = '//codewithharry.com';
})


let myName = document.getElementById('myName').value;

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("id_of_page2").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", myName, true);
    xhttp.send();
  }



