// Функция, возвращающая случайное целое число из
// переданного диапазона включительно.

function getRandomInteger(min, max) {
  // случайное число от min до (max+1)
  if (min >= max) {
    return null;
  }
  if (min < 0) {
    return null;
  }
  if (max < 0) {
    return null;
  }

  const randomInteger = min + Math.random() * (max + 1 - min);
  return Math.floor(randomInteger);
}

getRandomInteger(1, 3);

// Источник: https://learn.javascript.ru/task/random-int-min-max


//Функция, возвращающая случайное число с плавающей
// точкой из переданного диапазона включительно.

function getRandomFloat(min, max, decimal) {
  if (min < 0 || max < 0) {
    return null;
  }
  if (max <= min) {
    return null;
  }
  const randomFloat = min + Math.random() * (max - min);
  const fixedRandomFloat = Number(randomFloat.toFixed(decimal));
  return fixedRandomFloat;
}

getRandomFloat(1, 4, 2);

// Источник:https://learn.javascript.ru/number
