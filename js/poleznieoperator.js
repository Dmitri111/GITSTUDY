let one = "646464684";
if (isNaN(one)) {
    console.log("nenomer");
    console.log(typeof(one));
} else {
    console.log("nomer");
    console.log(typeof(one));
}
// isNan - проверяет переменну на наличие цифр выдает тру если цифры фалсе если буквы

let stroka = "dasdkaspdkpaskd";
console.log(stroka.length);
//length - выдает колличество символов в строке

let twelve = "12.2px";
//round - округляет введенные данные до целых чисел, при условии что не введены буквы
//parseInt возвращает целое число преобразует в число
//parseFloat возвращает десятичное число преобразует в число */
console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve)); 