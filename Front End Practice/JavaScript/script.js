// console.log("Hello there!");
// // alert("Hello!")

// Variables
// let b;
// var c;
// const a = 10;
// const b = 20;
// const c = 30;
// const d = " text";
// const e = "Hello "
// // const d = a + b + c;
// //
// // console.log(d);
// const sum = a + b - c;
// console.log(e + a + sum + a + d);


function alertMessage() {
    alert("Hey there!");
    console.log("Alert Message YEAH!!!!!");
}

const myButton = document.getElementById("alertMessage");

myButton.addEventListener("click", function(){
    console.log("This is an alert button from event listener!");
})

