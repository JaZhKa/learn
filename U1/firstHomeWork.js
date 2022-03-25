let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

for (let i = 0; i < 2; i++) {
    let exp = prompt('Введите обязательную статью расходов в этом месяце'),
        expValue = +prompt('Во сколько это обойдется');

        // if ((typeof(exp)) === 'string' && (typeof(exp)) != null && (typeof(expValue)) != null && exp != '' && expValue != '' && exp.length < 50) {
        //     appData.expenses -= expValue;
            appData.expenses[exp] = expValue;
        // }
    
}

appData.moneyDayBdget = appData.budget / 30;

alert('Ваш дневной бюджет: ' + appData.moneyDayBdget);
console.info(appData.expenses);