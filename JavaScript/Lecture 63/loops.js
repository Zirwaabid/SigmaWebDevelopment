let arr = [1, 2, 3, 4, 5]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}

arr.forEach((val,index,arr) => {
    console.log(val,index,arr)
});

let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
    }
};

for (const element of arr) {
    console.log(element)
}


