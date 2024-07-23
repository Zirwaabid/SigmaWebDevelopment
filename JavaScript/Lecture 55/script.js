console.log("Hi I am Zirwa")

// var a = 5;
// var b = 6;
// var c = "Zirwa";
// var $c = 66;

// variables names cant start with number like var 55a

// console.log(a + b + 8 + c)

// find what is the type of variables by following way and those who are alphabets are written in commas and called strings

// console.log(typeof a, typeof b, typeof c)



// the value use in const csnt use second time so sometimes we use it to not overwrite something its error shows in console
// const a7 = 6;
// const a7 = 9;

// let is prefer over var because var is used globally but scope of let is only upto its blog eg if we use let in blog and also outside then use console in blog theb console use blog let than outside let eg

// var a=5;
let a = 5;
let b = 6;

// without blog console saw first let but when we use let ib=n blog so it prefer that let 
{
    // var a = 77;
    let a = 77;
    console.log(a)
}

// but if we use console out of blog then it shows first let but if we use var instead of let on console a shows 77 number
console.log(a)

// so we prefer let on var so that our blog varibles not interact with global variables

let x = "javascript";
let y = 22;
let z = 3.5;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

// object is use to write lot of things about someone or something
// and write it by using these codes
let o = {
    "name": "Zirwa",
    "Job code": 5560,
    "is_handsome": true,
}

console.log(o)
// add more or change by using this 
o.salary = "100crores"
console.log(o)
o.salary = "500crores"
console.log(o)

// QUIZ
let object = {
    "name": "Zunaira",
    "Phone Number":"03483412634",
    "Marks": 500,
}
console.log(object)