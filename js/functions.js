// Функция 
// Название функции начинается с глагола (параметрый)
/* let num = 30; // глобально заданная переменная, может измениться на переменную в функции когда функция выполняется если она не заданна через let

function showFirstMessage (text) { 
    alert(text);
    //num = 10; // локальная переменная, задается внутри функции и видна будет только внутри функции
    let num = 20;
    console.log(num);

}

// замыкание функции это когда функция сначало ищет переменную внутри себя а потом уже глобально

showFirstMessage("left");
console.log(num); */

// Это function decoretion = функция создается еще до начала объявления в коде 
/* function calc(a, b) {
    return (a + b); // возвращает результат функции
}

console.log(calc(4, 4));
console.log(calc(6, 4)); */

//function expresion = функция задается после объявления в коде  

/* let calc = function(a,b) {
    return(a + b);
}

let calc = (a,b) => a+b; // современый вид функции через стрелку 

console.log(calc(4, 4));
console.log(calc(6, 4));



function returnVar() {
    let num = 50;
    return num;
}

let anotherNum = returnVar();

console.log(anotherNum); */

// свойства это вспомогательные значения
// для строк
/* let str = "tEst";
console.log(str.length);
// методы это вспомогательные функции значения
//для строк
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

// для чисел 

let twelve = "12.2px";
//console.log(Math.round(twelve));
console.log(parseInt(twelve));// возвращает целое число преобразует в число
console.log(parseFloat(twelve)); // возвращает десятичное число преобразует в число */


/* let teen = parseInt("10smadk"); */
/* let teen = parseInt("10dasasdasdd");

console.log( (typeof(teen)) ); */

