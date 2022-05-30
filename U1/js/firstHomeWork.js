let btn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value') [0],
    daybudgetValue = document.getElementsByClassName('daybudget-value') [0],
    levelValue = document.getElementsByClassName('level-value') [0],
    expensesValue = document.getElementsByClassName('expenses-value') [0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value') [0],
    incomeValue = document.getElementsByClassName('income-value') [0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value') [0],
    yearsavingsValuet = document.getElementsByClassName('yearsavings-value') [0],

    imputExpensesItem = document.getElementsByClassName('expenses-item'),

    optionalExpensesBtn = document.getElementsByTagName('button') [0],
    countBudgetBtn = document.getElementsByTagName('button') [1],

    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncomeItem = document.querySelector('.choose-income'),
    checkSavingsItem = document.querySelector('#savings'),
    chooseSumItem = document.querySelector('.choose-sum'),
    choosePercentItem = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}

// start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: true,
  startBudget: function () {
    this.startBudget = this.money;
    console.log(`Начальный бюджет: ${money}`);
  },
  detectDayBudget: function () {
    appData.moneyPerDay = +Number(appData.budget / 30).toFixed(2);
    alert('Ваш дневной бюджет: ' + appData.moneyPerDay);
  },
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let exp = prompt('Введите обязательную статью расходов в этом месяце', ''),
        expValue = +prompt('Во сколько это обойдется', '');

      if (typeof exp === 'string' && typeof exp != null && typeof expValue != null && exp != '' && expValue != '' && exp.length < 50) {
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

      appData.monthIncome = (save / 100 / 12) * percent;
      alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    function getCount() {
      for (let i = 0; i < 3; i++) {
        let opt = prompt('Введите необязательные расходы', '');
        appData.optionalExpenses[i] = opt;
      }
    }
    return getCount();
  },
  chooseIncome: function () {
    let items = prompt('Что принесет дополнительные доход? (Перечислите через запятую)', '');
    while (items == '' || items == null) {
      items = prompt('Что принесет дополнительные доход? (Перечислите через запятую)', '');
    }
    appData.income = items.split(', ');
    appData.income.push(prompt('Может что-то еще?', ''));
    appData.income.sort();
    appData.income.forEach(function (item, i) {
      console.log(`Способы доп. заработка: ${++i}: ${item}`);
    });
  },
};

for (const key in appData) {
  console.log(`Наша программа включает в себя данные: ${key}`);
}

console.group();
console.log('Ваш дневной бюджет: ' + appData.moneyPerDay);
console.log(appData);
console.groupEnd();