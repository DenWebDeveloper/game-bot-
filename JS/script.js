"use strct";
// Блок переменных

let random; // Переменная просто для проверки какое будет рандомное число.
let number;


// Блок объявления функций

let getRandomNum = function (num) {

    random = Math.floor(Math.random() * Math.floor(num));

    // console.log(random); // Проверка в консоли какое рандомное число выпало.

    return  random;
};

let isNum = function(n) {

    return !isNaN (parseFloat(n)) && isFinite (n);
};

const start = function () {

    number = getRandomNum(100);
    
    const game = function () {

        // Пользователь вводит число от 1-100
        const num = prompt('"Угадай число от 1 до 100" (Для выхода оставьте строку пустой)'); 


        //Проверка на то, что ничего не было введено.
        if (num === null) {

            alert('До свидания');

            return;
        }

        // Проверка на то, что введенное пользователем является точно числом.
        if (isNum(num)) {

            const realNum = +num;

            // console.log(typeof realNum);

            // Проверка на то, что введенное пользователем число больше чем загаданное число.
            if (realNum > number) {

                alert('Загаданное число меньше');

                game();
                // Проверка на то, что введенное пользователем число меньше чем загаданное число.
            } else if (realNum < number) {

                alert('Загаданное число больше');

                game();
            } else {

                if (confirm('Вы угадали! Сыграем ещё?')) {

                    start();
                } else {
                    alert('До свидания');
                    return;
                }
            }

        } else {

            alert('Будьте внимательне,вы ввели не число');

            game();
        }
    };
    game();
};

start();