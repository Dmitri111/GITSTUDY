let btn = document.querySelectorAll('button');
let wrap = document.querySelector('.wrapper');
let link = document.querySelector('a');
/* btn[0].onclick = function() {
    alert('нажали первую кнопку'); // обработчик событий для btn[0]
};

btn[0].onclick = function() {
    alert('опять нажали первую кнопку'); // первая функция не будет работать из того что существует эта 
}; */

/* // Выполняет функции последовательно одна за другой в отличии от первого варианта

btn[0].addEventListener('click', function () {
    alert('нажали первую кнопку');
});

btn[0].addEventListener('click', function () {
    alert('опять нажали первую кнопку');
});

btn[0].addEventListener('mouseenter', function() {
    alert('наверли на первую кнопку');
}); */


/* console.log(btn[0]);

btn[0].addEventListener('click', function (event) {
    console.log(event);
    let target = event.target;
    target.style.display = 'none';
    console.log('произошло событие ' + event.type + ' на элементе ' + target);
});

wrap.addEventListener('click', function() {
    console.log('произошло событие ' + event.type + ' на элементе ' + target);
});

link.addEventListener('click', function(event) {
    event.preventDefault(); // выдает результат фалс при стандартном действии браузера
    console.log('произошло событие ' + event.type + ' на элементе ' + event.target);
});
 */
btn.forEach(function(item) {
    item.addEventListener('click', function() {
        console.log('Вышли из кнопки');
    });
})