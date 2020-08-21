// Deel A
const superheroes = [
    { name: "Batman", alert_ego: "Bruce Wayne" },
    { name: "Superman", alert_ego: "Clark Kent" },
    { name: "Spiderman", alert_ego: "Peter Park" }
];

let findSpiderman = function (arr) {
    return arr.find(superhero => {
        return superhero.name == "Spiderman";

    });
};
console.log(findSpiderman(superheroes));

// Deel B

/*let array = [2, 3, 4, 5];

let doubledArrayValues = function (arr) {
    let newArray = [];
    arr.forEach(num => {
        return newArray.push(num * 2);
    });
    return newArray;
};

console.log(doubledArrayValues(array));*/

let array = [2, 3, 4, 5];

let doubledArrayValues = function (arr) {
    return arr.map(num => num * 2)

};

console.log(doubledArrayValues(array));

// Deel C

let array1 = [3, 5, 8, 11, 15];
let array2 = [2, 5, 7, 9,];

let containsNumBiggerThan10 = function (arr) {
    return arr.some(item => {
        return item > 10
    });

};
console.log(containsNumBiggerThan10(array1));
console.log(containsNumBiggerThan10(array2));

// Deel D

let theGreat7 = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];

let isItalyInTheGreat7 = function (arr) {
    return arr.includes("Italy");

};
console.log(isItalyInTheGreat7(theGreat7));

// Deel E
let itemArray = [1, 4, 3, 6, 9, 7, 11];

let tenFold = function (arr) {

    let newItemArray = [];
    arr.forEach(number => {
        return newItemArray.push(number * 10);
    });
    return newItemArray;
};

console.log(tenFold(itemArray));

// Deel F

let integersArray = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];

let isBelow100 = function (arr) {
    return arr.every(item => {
        return item < 100;
    });
};

console.log(isBelow100(integersArray));

// Deel G

let numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

let bigSum = function (arr) {
    return arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });

};

console.log(bigSum(numbers));