/* new RegExp('pattern' 'flags');

/pattern/ */

//let ans = prompt('Введите ваша имя');

//let reg = /n/;

//let reg = /n/i; // все ровно бальшие или маленькие символы ищет любое значение
//let reg = /n/g;
//вывести(строка.метод(регулярное выражение));
//console.log(ans.search(reg)); // выводит первое совпавшее 
//console.log(ans.match(reg)); // выврдит массив с данными 
//console.log(ans.test(reg)); // выводит труи или фалсе 

//классы символов

// \d // ищет цифры
// \w // ищет симовлы
// \s // ищет пробелы
// \D не цифра
// \W не буква
// \S не пробел

/* let ans = '9awd894a9awdawdawd489awda494';
let reg = /\d/m;
console.log(ans.match(reg)); */

let str = 'My name is ? R2D2';
console.log(str.match(/\w\d\w\d/i)); // поиск первой буквы\цифоы\буквы\цифры
console.log(str.match(/\?/i)); // обратный слеш для поиска сивола


// i flag регистра

// g flag глобальности

// m flag многострочности 

