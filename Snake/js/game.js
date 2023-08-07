// Получаем элемент по id 
const canvas = document.getElementById('game');
const message = document.getElementById('message');
// Задаем для canvas тип 2d
const ctx = canvas.getContext('2d');
// Передаем класс Image (позволяет работать с картинками) в ground 
const ground = new Image();
// Указываем путь к фоновой картинке
ground.src = "img/ground.png";
// Аналогично с картинкой еды
const foodImg = new Image();
foodImg.src = "img/food.png";
// Переменная с цифрой 32, будем обращаться к ней
let box = 32;
// Счет, изначально равен нулю
let score = 0;
// Создаем объект для отображения еды
let food = {
    // Указываем расположение еды по осям в случайном порядке (используем функцию Math, методы random и floor)
    // floor округляет число вниз, random возвращает псевдослучайное число с плавающей запятой
    x: Math.floor((Math.random() * 17 + 1)) * box,
    // по оси y пропускаем сразу 3-и квадрата что-бы избежать отрисовки еды вне игрового поля
    y: Math.floor((Math.random() * 15 + 3)) * box,
};
// Задаем змейку (это масcив в который мы добавляем объекты)
let snake = [];
// Задаем исходное расположение змейки
snake[0] = {
    x: 9 * box,
    y: 10 * box
};
// Прослушиваем событие keydown всего документа
document.addEventListener("keydown", direction);
// Объявили пустую переменную dir
let dir;
// Указываем при нажатии каких клавиш какое событие передавать
function direction (event) {
    // В условии прописываем проверку на взаимоисключающие действия
    if (event.keyCode == 37 && dir != "right")
        dir = "left";
    else if(event.keyCode == 38 && dir != "down")
        dir = "up";
    else if(event.keyCode == 39 && dir != "left")
        dir = "right";
    else if(event.keyCode == 40 && dir != "up")
        dir = "down";            
}
// Создаем функцию остановке игры при совпадении координат головы и хвоста
function eatTail(head, arr) {
    for(let i = 0; i < arr.length; i++) {
        if(head.x == arr[i].x && head.y == arr[i].y)
        clearInterval(game);
    }
}

// Отрисовываем объекты на игровом поле с помощью функции drawGame
function drawGame () {
    // Указфваем переменную содержащую изобрадение и координаты
    ctx.drawImage(ground, 0, 0);
    // Получаем случайные координаты от food
    ctx.drawImage(foodImg, food.x, food.y);
    // Для отрисовки змеи задаем цикл
    for(let i = 0; i < snake.length; i++) {
        // указываем цвет с помощью fillStyle (голова останется зеленой, тело будет красным)
        ctx.fillStyle = i == 0 ? "green" : "red";
        // указываем координаты змеи с шириной и высотой квадрата
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }
    // Прописываем счетчик счета
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText(score, box * 2.2, box * 1.7);
    // Указываем координаты переменных X и Y
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
   
    if (snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box,
        };
    } else {
        snake.pop();
    }
    // Завершаем игру в случае выхода из игрового поля
    if(snakeX < box || snakeX > box * 17
        || snakeY < 3 * box || snakeY > box * 17)
        clearInterval(
            game, 
            message.innerText = 'Вы вышли из игрового поля',
            message.classList.replace('message-none', 'message'));

    // Меняем координаты в зависимости от переданного dir
    if(dir == "left") snakeX -= box;
    if(dir == "right") snakeX += box;
    if(dir == "up") snakeY -= box;
    if(dir == "down") snakeY += box;
    // "Новая голова", объект содержит в себе координаты змейки
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    // Объявляем функцию eatTail, передаем координаты головы и все элементы змейки
    eatTail(newHead, snake);

    snake.unshift(newHead);
}



// С помощью setInterval задаем частоту обновления картинки (частоту вызова функции drawGame)
let game = setInterval(drawGame, 150);


