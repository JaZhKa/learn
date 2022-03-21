// 1 Функции
// Function Declaration
// function greet(name) {
//     console.log('Привет - ', name);
// }

// function Expression
// const greet2 = function greet2(name) {
//     console.log('Привет 2 - ', name);
// };

// greet('Лиза');
// greet2('Лиза');

// console.log(typeof greet);
// console.dir(greet);

// 2 Анонимные функции
// let counter = 100;
// const interval = setInterval(function() {
//     if (counter <= 7) {
//         clearInterval(interval);
//     } else {
//         console.log(counter -= 7);
//     }
// }, 100);

// 3 Стрелочные функции
// function greet() {
//     console.log('Привет -');
// }

// const arrow = (name, age) => {
//     console.log('Привет - ', name, age);
// };

// arrow('Yakov', 26);

// const arrow2 = name => console.log('Privet -', name);

// arrow2('Yakov');

// const pow2 = num => num ** 2;

// console.log(pow2(5));

// 4 Параметры по умолчанию
// const sum = (a = 40, b = a * 2) => a + b;

// console.log(sum(41, 4));
// console.log(sum());

// function sumAll(...all) {
//     let result = 0;
//     for (let num of all) {
//         result += num;
//     }
//     return result;
// }

// const res = sumAll(1, 2, 3, 4, 5, 6, 7);
// console.log(res);

// 5 Замыкания
// function createMember(name) {
//     return function(lastName) {
//         console.log(name + lastName);
//     };
// }

// const logWithLastName = createMember('Yakov');
// console.log(logWithLastName(' Lemenkov'));
// console.log(logWithLastName(' Dmitrievsky'));