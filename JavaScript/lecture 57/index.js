const { Console } = require("console");
const { markAsUntransferable } = require("worker_threads");

console.log("Lecture about loops")
let a=1;

// for loop
for (let i = 0; i < 30 ; i++) {
    console.log(a+i)
    
}
// Quiz
let grace=1;
for (let age = 0; age < 7; age++) {
    console.log(grace+age)
    
}


let obj={
    name:"Zirwa",
    role:"programmer",
    age:19,
}
// for in loop 
for (const key in obj) { {
        const element = obj[key];
        console.log(key,element)
        
    }
}
// Quiz
let object={
    class:6,
    "student name":"Amna",
    marks:10,
}
for (const key in object) { 
        const element = object[key];
        console.log(key,element)
}

// for of loop
for (const c of "Zirwa") {
    console.log(c)
    
}
// quiz
for (const character of "ALLAH") {
    console.log(character)
}

// while loop
let c=0;
while (c<6) {
    console.log(c)
    c++;
}
// quiz
let d=2;
while (d<5) {
    console.log(d);
    d++;
    
}

// do while loop
let i=5;
do {
    console.log(i);
    i++;
} while (i<5);
// quiz
let b=5;
do {
    console.log(b);
     b++;
} while ((b<10) );