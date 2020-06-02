// Объект 

let options = {
    widthh: 1024,
    height: 1024,
    name: "test"
};

// Объект задается через let object = {свойства объекта(через запятую)}; 

console.log(options.name); // вызов значения из объекта (название.названиесвойства)

options.bool = false; // передача свойства в объект
options.colors = { 
    border: "black",
    background: "red"
}

// передача объекта в объект 

delete options.bool; // удаление свойства в объекте

console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + ' Имеет значение' + options[key]);
}

// Цикл возвращет свойста и их значение 

console.log(Object.keys(options).length);

// Обджек кейс говорит что мы будем работать с ключами объекта 
// Выводи сколько в объекте находится свойст