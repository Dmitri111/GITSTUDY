'use strict'

let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Cтатья расходов(название)?", ""),
            b = +prompt("Сумма", "");
        
        if ( typeof(a) === 'string' && typeof(a) != null && a != '' && a.length < 50 && b != '' && typeof(b) != null) {
            console.log("good");
            appData.expenses [a] = b;
        } else {
            console.log("ошибка");
            i--;
        } 
    };
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на день составляет: " + appData.moneyPerDay + " EUR");
}

detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay <= 10 ) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 10 && appData.moneyPerDay < 50) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay >= 50) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            parcent = +prompt("Под какой процент");

        appData.monthInCome = save/100/12*parcent;
        alert("Доход в месяц с вашего депозита" + appData.monthInCome);
    }
}

checkSavings();

function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = +prompt("Cумма необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}

chooseOptExpenses();