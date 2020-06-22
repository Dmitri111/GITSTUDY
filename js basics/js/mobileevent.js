'use strict'
//touchstart когда нажимаем на экран 
// tochmove когда нажали на экран и водим
// touchend когда отрываешь палец 
// touchenter когда палец заходит на какой то элемент 
// touchleave когда палец покинул пределы элемента 
// touchcancel когда палец не регестрирует внутри браузера


window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

    box.addEventListener('touchstart', function(e){
        e.preventDefault();

        console.log('RedBox : touchstart');
        console.log(e.touches); // регестрация всех пальцев которые коснулись объекта
        console.log(e.changedTouches);// 
        console.log(e.targetTouches);// регестрация пальцев которые коснулись в какойто элемент
    });

    box.addEventListener('touchmove', function(e){
        e.preventDefault();

        console.log('RedBox : touchmove');
    });

    box.addEventListener('touchend', function(e){
        e.preventDefault();

        console.log('RedBox : touchend');
    });
});