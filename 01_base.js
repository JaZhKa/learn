// 1 Переменные
// const firstName = 'Yakov';
// const age = 26; //number
// const isProgrammer = true; //boolean

// const _ = 'private';
// const $ = 'some value';

// const if = 'maket' //err
// const withNum5 = '5';
// const 5withNum = 5 //err

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человака: ' + age);
// alert('Имя человека: ' + firstName + ', а возраст человака: ' + age);

// const lastname = prompt('Введите фамилию');
// alert (firstName + ' ' + lastname)

// 3 Операторы
// let currentYear = 2022;
// const brithYear = 1995;

// //const age = currentYear + brithYear;

// const a = 10;
// const b = 5;

// let c = 32;
// c = c + a;
// c = c - a;
// c = c * a;
// c = c / a;

// c += a;
// c -= a;
// c *= a;
// c /= a;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(++currentYear);
// console.log(--currentYear);
// console.log(c);

// 4 Типы данных
//  const isProgrammer = true;
//  const name = 'Yakov';
//  const age = 26;
//  let x;

//  console.log(typeof isProgrammer);
//  console.log(typeof name);
//  console.log(typeof age);
//  console.log(typeof x);
//  console.log(null);

// 5 Приоритет операторов
// const fullAge = 26;
// const brithYear = 1995;
// const currentYear = 2022;

// const isFullAge = currentYear - brithYear >= fullAge; //26 >= 27
// console.log(isFullAge);

// 6 Условные операторы
// const couersStatus = 'pending'; //ready, fail, pending

// if (couersStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить');
// } else if (couersStatus === 'pending') {
//     console.log('Курс находиться на процессе разработки');
// } else{
//     console.log('Курс не получился');
// }

// const isReady = true;

// if (isReady){
//     console.log('Все готово!');
// } else {
//     console.log('Еще не готово!')
// }

// Тернароне выражение
// isReady ? console.log('Все готово!') : console.log('Еще не готово!');

// const num1 = 42;
// const num2 = '42';

// console.log(num1 === num2);

// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8 Функции

// function calculateAge(year) {
//     return 2022 - year;
// }

// console.log(calculateAge(year = 1995));
// console.log(calculateAge(year = 2021));
// console.log(calculateAge(year = 1996));

// function logInfoAbout(name, year) {
//     const age = calculateAge(year);
    
//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age);
//     }else {
//         console.log('Это уже будущее!');
//     }
// }

// logInfoAbout(name = 'Яков', year = 1995);
// logInfoAbout(name = 'Лиза', year = 2000);
// logInfoAbout(name = 'Лиза', year = 2023);

// 9 Массивы
// const cars = ['Мазда', 'Хонда', 'Форд'];
// const cars = new Array(items = 'Мазда', 'Хонда', 'Форд');

// console.log(cars.length);

// console.log(cars[1]);
// console.log(cars[0]);
// console.log(cars[3]);

// cars[0] = 'BNW';
// cars[3] = 'Mazda';
// cars[cars.length] = 'Nissan';
// console.log(cars);

// 10 Циклы
// const cars = ['Мазда', 'Хонда', 'Форд', 'BNW'];

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i];
//     console.log(car);
// }

// for (let car of cars) {
//     console.log(car);
// }

// 10 Объекты
// const person = {
//     firstName: 'Yakov',
//     lastName: 'Lemenkov',
//     year: 1995,
//     languages: ['Ru', 'En', 'De'],
//     hasWife: true,
//     greet: function() {
//         console.log('greet from person');
//     }
// };

// console.log(person.firstName);
// console.log(person['lastName']);
// const key = ('year');
// console.log(person[key]);
// person.hasWife = false;
// console.log(person);
// person.isProgrammer = true;
// person.greet();