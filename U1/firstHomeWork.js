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


let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true
};

appData.startBudget = appData.budget;

function detectDayBudget() {
    for (let i = 0; i < 2; i++) {
        let exp = prompt('Введите обязательную статью расходов в этом месяце', ''),
            expValue = +prompt('Во сколько это обойдется', '');

        if ((typeof (exp)) === 'string' && (typeof (exp)) != null && (typeof (expValue)) != null && exp != '' && expValue != '' && exp.length < 50) {
            appData.expenses[exp] = expValue;
            appData.budget -= expValue;

        } else {
            alert('Введите обязательные расходы');
            i -= 1;
        }
    }
}

detectDayBudget();

appData.moneyPerDay = Number.parseInt(appData.budget / 30);

function detectLevel() {
    if (appData.moneyPerDay <= 10) {
        console.log('Низкий доход!');
    } else if (appData.moneyPerDay >= 200) {
        console.log('Высокий доход!');
    } else {
        console.log('Средний доход!');
    }
}

detectLevel();

function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');

        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    let counter = 0,
        optExp;

    function getCount() {
        for (i = 0; i < 3; i++) {
            counter++;
            optExp = prompt('Введите необязательные расходы', '');
            appData.optionalExpenses[counter] = optExp;
        }
    }
    return getCount();
}

chooseOptExpenses();

console.log('Изначальный бюджет: ' + appData.startBudget);
alert('Ваш дневной бюджет: ' + appData.moneyPerDay);
console.log('Ваш дневной бюджет: ' + appData.moneyPerDay);
console.log('------------------------------------------------------------------------');
console.log(appData);