'use strict';


let money = +prompt("Ваш бюджет на месяц?"),
    date  = prompt ("Введите дату в формате YYYY-MM-DD");


let appDate = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: null,
    savings: false
}; 

 let a3 = prompt("Введите обязательную статью расходов в этом месяце"),
    a4 = prompt("Во сколько обойдется?");


appDate.expenses.a3 = a4;

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b !='' && a.length < 50) {
        console.log("done");
        appDate.expenses[a] = b;
    } else {
        console.log ("bad result");
        i--; // цикл начинается заного !
    }
};

/*     let i = 0;
    while(i < 2) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = +prompt("Во сколько обойдется?");

        if ((typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b))=== 'number' && (typeof(b)) !=null 
        && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appDate.expenses[a] = b;
        } else {
            console.log("Есть пустые значения");
        }

        i++;
    }  */

/*     let i = 0;

    do {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?");

        if ((typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b))=== 'number' && (typeof(b)) !=null 
        && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appDate.expenses[a] = b;
        } else {
            console.log("Есть пустые значения");
        }

        i++;
    } while ( i < 3); */



















/*     let i = 0;
    while (i < 2) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
        
            console.log("done");

        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

            console.log ("done");

            appData.expenses[a] = b;
        } else {
            console.log ("bad result");
            i--;
        }

        i++;
    } */

/*     appDate.moneyPerDay = appDate.budget / 30;

alert ("Ежидневный бюджет" + appDate.moneyPerDay);

if(appDate.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appDate.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
} */