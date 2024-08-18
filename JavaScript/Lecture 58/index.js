function nice(name) {
    console.log(" " + name + " is very nice")
    console.log(" " + name + " is very good girl")
    console.log(" " + name + " is very humble")
    console.log(" " + name + "is very polite")
}
nice("Zirwa")
nice("Alishba")

function sum(a, b, c = 4) {
    return a + b + c
}
result1 = sum(3, 43)
result2 = sum(50, 4)
result3 = sum(30, 8,1)
console.log("the sum of these numbers is:", result1)
console.log("the sum of these numbers is:", result2)
console.log("the sum of these numbers is:", result3)

// we can also write function in this way 

const func1 = (x) => {
    console.log("hi i am an arrow function:", x)
}
func1(30);
func1(7);
func1(9);