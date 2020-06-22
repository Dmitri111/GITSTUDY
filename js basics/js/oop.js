
let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__= soldier;

console.log(john); // выводит свойства Джона 
console.log(john.armor); // выводит свойства джона конторый взял свойства
// армор из прототипа солдер
