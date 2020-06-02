/* // FUNCTION DECLARATION
function foo() {
    код
}

// Создается до начала выполнения скрипта, можно вызвать перед объявлением */

// FUNCTION EXPRESSION

/* let foo = function() {
    код
}

// Создается только тогда, когда доходит поток кода, можно вызвать только после объявления */

/* // СТРЕЛОЧНЫЕ ФУНКЦИИ 

() => 

// Не имеет своего контекста (this) */

function first() {
    setTimeout( function(){
        console.log(1);
    }, 5000);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log("я учу" + lang);
    callback();
}

function done() {
    console.log("prowel urok 3");
}

learnJS("javascript", done);

/* learnJS("JavaScript", function() {
    console.log("Урок3");
}) */
