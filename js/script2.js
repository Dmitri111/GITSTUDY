'use strict';


let  money = prompt("Ваш бюджет на месяц?"),
    date  = prompt ("Введите дату в формате YYYY-MM-DD");


appDate = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: null,
    savings: false
}

let a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    a2 = prompt("Во сколько обойдется?"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце"),
    a4 = prompt("Во сколько обойдется?");

appDate.expenses.a1 = a2;
appDate.expenses.a3 = a4;

alert (appDate.budget / 30);