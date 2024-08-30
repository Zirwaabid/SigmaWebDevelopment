let random = Math.random();
let first, second, third;

//generate first name
if (random < 0.33) {
    first = "Crazy"
}
else if (random < 0.66 && random >= 0.33) {
    first = "Amazing"
} else {
    first = "Fire"
};

//generate second name
let random1 = Math.random();
if (random < 0.33) {
    second = "Engine"
}
else if (random < 0.66 && random >= 0.33) {
    second = "Foods"
} else {
    second = "Garments"
};

//generate third name
let random2 = Math.random();
if (random < 0.33) {
    third = "Bros"
}
else if (random < 0.66 && random >= 0.33) {
    third = "Limited"
} else {
    third = "Hub"
};

console.log(`${first} ${second} ${third}`)
