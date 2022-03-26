let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

for (let i = 0; i < 2; i++) {
    let exp = prompt('Введите обязательную статью расходов в этом месяце', ''),
        expValue = +prompt('Во сколько это обойдется', '');

        if ((typeof(exp)) === 'string' && (typeof(exp)) != null && (typeof(expValue)) != null && exp != '' && expValue != '' && exp.length < 50) {
            appData.expenses[exp] = expValue;
            appData.budget -= expValue;
        } else {
            alert('Введите корректные значения');
        }
    }

alert('Ваш дневной бюджет: ' + (appData.budget / 30));
console.log(appData);
console.log('Ваш дневной бюджет: ' + (appData.budget / 30));