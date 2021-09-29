// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// Источник: https://learn.javascript.ru/task/random-int-min-max


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function random(min, max) {
  return min + Math.random() * (max - min);
}

// Источник:https://learn.javascript.ru/number
