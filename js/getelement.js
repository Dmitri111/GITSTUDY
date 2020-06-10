let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneheart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

/* for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
} */

/* // Метод forEach с функцией калл бэк с аргументами (вещь, номер вещи, массив)
heart.forEach(function(item, i, hearts) { 
    item.style.backgroundColor = 'blue';
}); */

let div = document.createElement('div'), // создает елемент на странице 
    text = document.createTextNode('Ja tut Bql'); // cоздает текстовый элемент на странице 

div.classList.add('black');  // добавляет к переменной див класс Black 

/* div.innerHTML = '<h1>Hello Word</h1>'; // вставляет текс в блок  !!не безопасно!! */

div.textContent = 'Hello Word'; // вставляет текс в блок 


/* document.body.appendChild(div); // вставляет переменную на страницу в конец body */

/* wrapper.appendChild(div); // вставляет элемент на страницу использует для вставки родительский элемент в данном случаи враппер */

document.body.insertBefore(div, circle[0]); //вставляет элемент на страницу перед елементом circle[0]
document.body.removeChild(circle[1]); // удаляет из родителя циркл
wrapper.removeChild(heart[1]);// удаляет элемен из родителя враппер 
document.body.replaceChild(btn[1], circle[1]); // берет первый элемент и ставит его вместо второго элемента



console.log(div);
console.log(text);