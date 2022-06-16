let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value') [0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value') [0],
    levelValue = document.getElementsByClassName('level-value') [0],
    expensesValue = document.getElementsByClassName('expenses-value') [0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value') [0],
    incomeValue = document.getElementsByClassName('income-value') [0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value') [0],
    yearsavingsValuet = document.getElementsByClassName('yearsavings-value') [0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button') [0],
    imputExpensesItem = document.getElementsByClassName('expenses-item'),
    optionalExpensesBtn = document.getElementsByClassName('optionalexpenses-btn') [0],
    countBudgetBtn = document.getElementsByTagName('button') [2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

const arrBtn = [expensesBtn, optionalExpensesBtn, countBudgetBtn];
arrBtn.forEach(i => i.disabled = true);

const getPercent = function() {
  if(appData.savings == true) {
    let sum = +chooseSum.value,
        percent = +choosePercent.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValuet.textContent = appData.yearIncome.toFixed(1);
    }
};

startBtn.addEventListener('click', function() {
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  money = +prompt('Ваш бюджет на месяц?', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
  
  arrBtn.forEach(i => i.disabled = false);
});

expensesBtn.addEventListener('click', function() {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let exp = expensesItem[i].value,
        expValue = expensesItem[++i].value;

    if (typeof exp === 'string' && typeof exp != null && typeof expValue != null && exp != '' && expValue != '' && exp.length < 50) {
      appData.expenses[exp] = expValue;
      sum += +expValue;
    } else {
      i -= 1;
    }
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function() {

  if (appData.budget != undefined){

  appData.moneyPerDay = +Number((appData.budget - expensesValue.textContent) / 30).toFixed(2);
  dayBudgetValue.textContent = appData.moneyPerDay;

  if (appData.moneyPerDay < 10) {
    levelValue.textContent = 'Низкий доход!';
  } else if (appData.moneyPerDay > 10 && appData.moneyPerDay < 100) {
    levelValue.textContent = 'Средний доход!';
  } else if (appData.moneyPerDay > 100) {
    levelValue.textContent = 'Высокий доход!';
  } else {
    levelValue.textContent = 'Произошла ошибка';
  }
  } else {
  dayBudgetValue.textContent = 'Произошла ошибка!';
      }
    });

incomeItem.addEventListener('change', function() {
  let items = incomeItem.value;
  appData.income = items.split(',');
  incomeValue.textContent = appData.income;
  });

checkSavings.addEventListener('click', function() {
  if(appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

chooseSum.addEventListener('input', getPercent);

choosePercent.addEventListener('input', getPercent);
    

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};