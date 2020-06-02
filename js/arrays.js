//let arr = [1, 2, 7, 4, 5];

/* arr.pop(); // удаляет последние значение из массива
arr.push("5"); // добавляет значение в конец массива
arr.shift(); // удаляет перевое значение из массива
arr.unshift("1"); // добавляет значение в начало массива */

//arr[99] = 99; добавляет в массив по ключем 99 значение 99 !!грубая ошибка
//console.log(arr.length); выведет число ключей с 95 пустыми строчками

/* for (let i= 0; i < arr.length; i++) {
    console.log(arr[i]);
} //выводит значения массивов   */

/* arr.forEach(function(item, i, mass){
    console.log(i + ": " + item + "(массив " + mass + ")");
}); // выводит через функцию CallBack массив со значениеями ключ + значение */


//let mass = [1,3,4,5,6,7,8];

/* for (let key in mass) {
    console.log(key);
} // выводи ключи массива важным тут является in  */

/* for (let key of mass) {
    console.log(key);
} // выводит значение из массива важным является of  */

/* let ans = prompt("", ""), // берем данные от пользователя в переменную
    arr = []; // делаем массив 

arr = ans.split(','); // заполняем массив данными которые идут через запятую

console.log(arr); */

/* let arr = ["add","dsds",'dasd','dasdsa'],
    //i = arr.join(', '); // делает из массива строку резделителем является запятая
    //i = arr.sort(); // сортирует все по алфавиту, с цифрами сортирует по первой цифре
    i = arr.sort(compareNum); // сортирует цифры по порядку с помощью функции CallBack
    function compareNum(a,b) { // функция СallBack
        return a-b;
    }

    console.log(typeof(i)); 
    console.log(i); */