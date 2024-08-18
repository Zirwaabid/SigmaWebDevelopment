let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");
let random = Math.random();
console.log(random);

let obj = {
    "+": "-",
    "*": "+",
    "+": "-",
    "-": "/",
    "/": "**",
}

if (random > 0.1) {
    //perform correct operation
    console.log(`the result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} 

else {
//perform wrong operation
c=obj[c]
alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}