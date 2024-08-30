console.log("This tutorial is about strings");
let a="Zirwa";

//how to access letters separately
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

//how to access array lenght
console.log(a.length)

//template literals
let name="Zirwa";
let friend="Anas";
console.log("Her name is "+ name+" and her friend name is "+friend+"") //difficult way
console.log(`Her name is ${name} and her friend name is ${friend}`); //easy way by using template literals

let b="Cat";
console.log(b.toUpperCase())
console.log(b.toLowerCase())

//slice
let fruit="mango";
console.log(fruit.slice(1,4))

//replace
console.log(fruit.replace("mango","orange"))

//concat
console.log(fruit.concat(name,friend,"Azra","abid"))
