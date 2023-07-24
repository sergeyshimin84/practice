// Получаем элемент по id 
const canvas = document.getElementById('game');
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
// Отрисовываем объекты на игровом поле с помощью функции drawGame
drawGame = () => {
    // Указфваем переменную содержащую изобрадение и координаты
    ctx.drawImage(ground, 0, 0);
    // Получаем случайные координаты от food
    ctx.drawImage(foodImg, food.x, food.y);
    // Для отрисовки змеи задаем цикл
    for(let i = 0; i < snake.length; i++) {
        // указываем цвет с помощью fillStyle
        ctx.fillStyle = "red";
        // указываем координаты змеи с шириной и высотой квадрата
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

}

// С помощью setInterval задаем частоту обновления картинки (частоту вызова функции drawGame)
let game = setInterval(drawGame, 100);


