// find factorial of 6 using 2 methods

// 1-- by using reduce method
let a=6;
function factorial(number) {
    let arr=Array.from(Array(number+1).keys());
    let c=arr.slice(1,).reduce((a,b)=>a*b)
    return c;
}


// 2-bt for loop 
function facFor(number) {
    let fac=1;
    for (let index = 1; index <= number; index++) {
      fac=fac*index 
    }
    return fac
}
console.log(factorial(a));
console.log(facFor(a))