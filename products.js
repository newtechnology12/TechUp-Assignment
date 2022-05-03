const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}];

// 1 . Filter and show the product that will be bought when you don't have much money I mean Cheap one
let min = item[0].price;
for(let i=0; i< item.length; i++){
if(min>item[i].price){
    min = item[i].price;
}
}

const cheapest = item.filter(cheap => cheap.price===min);

console.log(cheapest);


// 2 . Filter and show the product that will be expensive in the array

let max = item[0].price;
for(let i=0; i< item.length; i++){
if(max<item[i].price){
    max = item[i].price;
}
}

const expensive = item.filter(expensiv => expensiv.price===max);

console.log(expensive);

// 3 . Calculate the full price of all products combined
let sum = 0;
for(let i=0; i< item.length; i++){
    sum += item[i].price

    }

    console.log(sum);

// 4 . Calculate the full price of all product combined and remove product that are under the 10 dollar

let newSum = 0;
for(let i=0; i< item.length; i++){
    if(item[i].price>10){
const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}];

// 1 . Filter and show the product that will be bought when you don't have much money I mean Cheap one
let min = item[0].price;
for(let i=0; i< item.length; i++){
if(min>item[i].price){
    min = item[i].price;
}
}

const cheapest = item.filter(cheap => cheap.price===min);

console.log(cheapest);


// 2 . Filter and show the product that will be expensive in the array

let max = item[0].price;
for(let i=0; i< item.length; i++){
if(max<item[i].price){
    max = item[i].price;
}
}

const expensive = item.filter(expensiv => expensiv.price===max);

console.log(expensive);

// 3 . Calculate the full price of all products combined
let sum = 0;
for(let i=0; i< item.length; i++){
    sum += item[i].price

    }

    console.log(sum);

// 4 . Calculate the full price of all product combined and remove product that are under the 10 dollar

let newSum = 0;
for(let i=0; i< item.length; i++){
    if(item[i].price>10){
    newSum += item[i].price
    }   
    }

    console.log(newSum);
