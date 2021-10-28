const getRandomInteger = (min, max) => {
  if (min >= max) {
    return null;
  }
  if (min < 0 || max < 0) {
    return null;
  }
  const randomInteger = min + Math.random() * (max + 1 - min);
  return Math.floor(randomInteger);
};

getRandomInteger(1, 3);

const getRandomFloat = (min, max, decimal) => {
  if (min < 0 || max < 0) {
    return null;
  }
  if (max <= min) {
    return null;
  }
  const randomFloat = min + Math.random() * (max - min);
  const fixedRandomFloat = Number(randomFloat.toFixed(decimal));
  return fixedRandomFloat;
};

getRandomFloat(1, 4, 2);

export {getRandomInteger, getRandomFloat};
