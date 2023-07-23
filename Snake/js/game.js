// Получаем элемент по id 
const canvas = document.getElementById('game');
// Задаем для canvas тип 2d
const ctx = canvas.getContext('2d');
// Передаем класс Image (позволяет работать с картинками) в ground 
const ground = new Image();
// Указываем путь к фоновой картинке
ground.src = "img/ground.png";
// Аналогично с картинкой еды
const food = new Image();
food.src = "img/food.png";
// Переменная с цифрой 32, будем обращаться к ней
let box = 32;
// Счет, изначально равен нулю
let score = 0;
// Функция отображения основного поля
function drawGame() {
    // Указфваем переменную содержащую изобрадение и координаты
    ctx.drawImage(ground, 0, 0)
}
// С помощью setInterval задаем частоту обновления картинки (частоту вызова функции drawGame)
let game = setInterval(drawGame, 100);


