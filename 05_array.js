// const cars = ['mazda', 'ford', 'bmv', 'mersedes'];
// const people = [
//     {name: 'Yakov', budget: 5600},
//     {name: 'Liza', budget: 3700},
//     {name: 'Dasha', budget: 1700},
// ];
// const fib = [1, 1, 2, 3, 5, 8, 13];

// Function
// function aadItemToEnd() {

// }

// Method
// cars.push('reno');
// cars.unshift('volga');

// const firstCar = cars.shift();
// const lastCar = cars.pop();
// console.log(firstCar);
// console.log(lastCar);
// console.log(cars);

// console.log(cars.reverse());
// console.log(cars);

// const index = cars.indexOf('bmv');
// cars[index] = 'porsche';
// console.log(cars);

// let findPerson;
// for (const person of people) {
//     if (person.budget === 1700) {
//         findPerson = person;
//     }
// }

// console.log(findPerson);

// const index = people.findIndex(function(person) {
//     return person.budget === 3700;
// });
// const person = people.find(function(person) {
//     return person.budget === 3700;
// });
// console.log(person);
// const person = people.find(person => person.budget === 1700);
//     console.log(person);

// console.log(cars.includes('mazda'));

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase();
// });

// console.log(upperCaseCars);
// console.log(cars);

// const pow2 = num => num ** 2;
// // const sqrt = num => Math.sqrt(num);

// const pow2Fib = fib.map(pow2).map(Math.sqrt);
// console.log(pow2Fib);

// const pow2Fib = fib.map(pow2);
// const filteredNumbers = pow2Fib.filter(num => num > 20);
// console.log(pow2Fib);
// console.log(filteredNumbers);




// Задача 1
// const text = prompt('Привет, мы изучает JavaScript');
// const reverseText = text.split('').reverse().join('');

// console.log(reverseText);


const people = [
    {name: 'Yakov', budget: 5600},
    {name: 'Liza', budget: 3700},
    {name: 'Dasha', budget: 1700}
];

const allBudget = people
.filter(person => person.budget > 2000)
.reduce((acc, person) => {
    acc += person.budget;
    return acc;
}, 0);

console.log(allBudget);

// const displeyItems = allItems.filter(item => item.name.indexOf('phone') !== -1)