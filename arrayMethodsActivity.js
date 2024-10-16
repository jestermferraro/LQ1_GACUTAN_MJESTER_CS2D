let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];

console.log(arr1.concat(arr2));
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);
fruits.pop()
console.log(fruits);


let array2 = [1, 2, 3];
array2.shift();
console.log(array2);
fruits.sort();

console.log(fruits);
console.log(fruits.slice(0,4));
let months = ["February", "April", "May"];
months.splice(1, 0, "March");

console.log(months);
months.splice(1, 3);
console.log(months);