// how to add square of arr in newarr

// difficult method
let arr = [1, 2, 3, 4, 5];
let newarr = [];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr.push(element ** 2)
}
console.log(newarr);

//----->map
//convenient and easy method
let newArr = arr.map((e, index, array) => {
    return e ** 2
})
console.log(newArr);

// ----->filter 
const greaterThanThree = (e) => {
    if (e > 3) {
        return true
    }
    return false
}
console.log(arr.filter(greaterThanThree));

// ------>reduce 

const red = (a, b) => {
    return a + b
}
console.log(arr.reduce(red))

