//while | do... while
// let money = +prompt('Ваш бюджет на месяц?', ''),
//     time = prompt('Введите дату в формате YYYY-MM-DD', '');

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     saving: false
// };

// appData.startBudget = appData.budget;

// let n = 0;

// while (n < 2) {
//     n++;
//     let exp = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         expValue = +prompt('Во сколько это обойдется', '');

//     if ((typeof (exp)) === 'string' && (typeof (exp)) != null && (typeof (expValue)) != null && exp != '' && expValue != '' && exp.length < 50) {
//         appData.expenses[exp] = expValue;
//         appData.budget -= expValue;

//     } else {
//         alert('Введите обязательные расходы');
//         n--;
//     }
// }

// appData.moneyPerDay = appData.budget / 30;

// if (appData.moneyPerDay <= 10) {
//     console.log('Низкий доход!');
// } else if (appData.moneyPerDay >= 200) {
//     console.log('Высокий доход!');
// } else {
//     console.log('Средний доход!');
// }

// console.log('Изначальный бюджет: ' + appData.startBudget);
// alert('Ваш дневной бюджет: ' + appData.moneyPerDay);
// console.log('Ваш дневной бюджет: ' + appData.moneyPerDay);
// console.log('------------------------------------------------------------------------');
// console.log(appData);




// let money = +prompt('Ваш бюджет на месяц?', ''),
//     time = prompt('Введите дату в формате YYYY-MM-DD', '');

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     saving: false
// };

// appData.startBudget = appData.budget;

// let n = 0;

//  do {
//     n++;
//     let exp = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         expValue = +prompt('Во сколько это обойдется', '');

//     if ((typeof (exp)) === 'string' && (typeof (exp)) != null && (typeof (expValue)) != null && exp != '' && expValue != '' && exp.length < 50) {
//         appData.expenses[exp] = expValue;
//         appData.budget -= expValue;

//     } else {
//         alert('Введите обязательные расходы');
//         n--;
//     }
// }
// while (n < 2);

// appData.moneyPerDay = appData.budget / 30;

// if (appData.moneyPerDay <= 10) {
//     console.log('Низкий доход!');
// } else if (appData.moneyPerDay >= 200) {
//     console.log('Высокий доход!');
// } else {
//     console.log('Средний доход!');
// }

// console.log('Изначальный бюджет: ' + appData.startBudget);
// alert('Ваш дневной бюджет: ' + appData.moneyPerDay);
// console.log('Ваш дневной бюджет: ' + appData.moneyPerDay);
// console.log('------------------------------------------------------------------------');
// console.log(appData);
