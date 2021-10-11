// Функция, возвращающая случайное целое число из
// переданного диапазона включительно.

function getRandomInteger(min, max) {
  // случайное число от min до (max+1)
  if (min >= max) {
    return null;
  }
  if (min < 0 || max < 0) {
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


const AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/..',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/..',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/..',
];

const TITLES = [
  'string 1',
  'string 2',
  'Отель "Дельта Невы"',
  'string 4',
  'string 5',
  'string 6',
  'string 7',
  'string 8',
  'string 9',
  'string 10',
];

let titleIndex = getRandomInteger(0, TITLES.length - 1);

let latValue = getRandomFloat(35.65000, 35.70000, 5);
let lngValue = getRandomFloat(139.70000, 139.80000, 5);

let featuresLength = getRandomInteger(0, FEATURES.length);

function createNewAds(avatarID) {
  return {
    author: { avatar: AVATARS[avatarID] },

    offer: {
      title: TITLES[titleIndex],
      address: `${latValue.toString()}, ${lngValue.toString()}`,
      price: getRandomInteger(10000, 50000),
      type: TYPES[getRandomInteger(0, TYPES.length - 1)],
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(1, 5),
      checkin: CHECKINS[getRandomInteger(0, CHECKINS.length - 1)],
      checkout: CHECKOUTS[getRandomInteger(0, CHECKOUTS.length - 1)],
      features: FEATURES.slice(0, featuresLength),
      description: 'Стандартный двухместный номер с 1 кроватью или 2 отдельными кроватями',
    },

    location: {
      lat: latValue,
      lng: lngValue,
    },
  };
}

let adsArray = [];

for (let i = 0; i < 10; i++) {
  titleIndex = getRandomInteger(0, TITLES.length - 1);

  latValue = getRandomFloat(35.65000, 35.70000, 5);
  lngValue = getRandomFloat(139.70000, 139.80000, 5);

  featuresLength = getRandomInteger(0, FEATURES.length);
  const element = createNewAds(i);
  adsArray[i] = element;
}

console.log(adsArray);


function generateObject(avatarID) {
  const randomPhotoIndex = getRandomInteger(0, PHOTOS.length);
  const location = newLocation();
  return {
    author: newAuthor(avatarID),
    offer: newOffer(location),
    photos: PHOTOS[randomPhotoIndex],
    location: location,
  };
}
