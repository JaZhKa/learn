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
    saving: true,
    detectDayBudget: function () {
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
    },
    detectLevel: function () {
        if (appData.moneyPerDay <= 10) {
            console.log('Низкий доход!');
        } else if (appData.moneyPerDay >= 200) {
            console.log('Высокий доход!');
        } else {
            console.log('Средний доход!');
        }
    },
    checkSavings: function () {
        if (appData.saving == true) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        let counter = 0,
            optExp;

        function getCount() {
            for (let i = 0; i < 3; i++) {
                counter++;
                optExp = prompt('Введите необязательные расходы', '');
                appData.optionalExpenses[counter] = optExp;
            }
        }
        return getCount();
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительные доход? (Перечислите через запятую)', '');
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();
    }
};

appData.startBudget = appData.budget;

appData.moneyPerDay = Number.parseInt(appData.budget / 30);

alert('Ваш дневной бюджет: ' + appData.moneyPerDay);
console.group();
console.log('Изначальный бюджет: ' + appData.startBudget);
console.log('Ваш дневной бюджет: ' + appData.moneyPerDay);
console.log(appData);
console.groupEnd();