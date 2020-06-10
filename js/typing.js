// - to String 

// 1)
String(null)
console.log(typeof(String(4)));
// 2)
console.log(typeof("ww" + 1)); // cложение со строкой всега выдает тип данных строка
console.log('https://vk.com/id' + 45);

// - to Number 

//1)
console.log(typeof(Number("5")));

//2)

console.log(typeof(+"5"));

console.log(typeof(5 + +'5' ));

//3)
console.log(typeof(parseInt('15px', 10)));


let ans = +prompt("Hello?", '');


/* //что всегда превращается в false

0, '', null, undefined, NaN;
NaN - получается когда мы пытаемся поделить строку на номер */

let switcher = null;

if(switcher) {
    console.log("working");
}

switcher = 1;

if(switcher) {
    console.log("working");
}

// 2)

console.log(typeof(Boolean('5')));
//3)
console.log(typeof(!!'5'));

console.log(typeof([] + 1 + 2));


let arr = [1,2,3,4,5];

console.log('0'[1]);

let  str = 0;

console.log(typeof(!!str));

console.log(!!str);

let obj = {
    "0": 1,
    0: 2
   };
   
   console.log( obj["0"] + obj[0] );

   console.log(obj["0"]);
   console.log(obj[0]);

   let str = "hello";
   console.log(str);