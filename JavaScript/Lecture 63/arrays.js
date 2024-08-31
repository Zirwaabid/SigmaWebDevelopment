let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0])
console.log(arr[2])
console.log(arr[3])
console.log(arr.length)

//array is mutable
arr[1] = 555;
console.log(arr, typeof arr);

// arrays methods
console.log(arr.toString())
console.log(arr.join(" and "));
arr.pop(); //remove last letter
console.log(arr);
arr.push(3); //add new word in end
console.log(arr);
arr.shift(); //remove first letter
console.log(arr);
arr.unshift("Zirwa")
console.log(arr); //add new word in start
delete arr[4]
console.log(arr)

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
console.log(arr1.concat(arr2))

// sort (arrange alphabetically)
let num = [4, 3, 1]
console.log(num.sort())
console.log(num.splice(1, 2, 5, 6))
console.log(num)
