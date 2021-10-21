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
  'Отель "Rio Panoramic"',
  'Гранд Отель "Жемчужина"',
  'Отель "Дельта Невы"',
  'Mozart Hotel',
  'Pinewood Hotel Rome',
  'Pod Times Square',
  'Scandic Oslo City',
  'Strawberry Duck Moscow',
  'Хостел Круассан',
  'Дизайн-отель Чайковский',
];

const DESCRIPTION = [
  'Стандартный двухместный номер с 1 кроватью или 2 отдельными кроватями',
  'Капсула с кроватью размера «queen-size» в общем номере для мужчин и женщин',
  'Двухместный номер эконом-класса с 1 кроватью и небольшим окном',
  'Бюджетный двухместный номер с 1 кроватью',
  'Номер-студио Делюкс',
  'Small Room Shared Bathroom',
  'Апартаменты-студия с видом на море',
  'Клубный полулюкс «Элеганс» с гидромассажной ванной на открытом воздухе',
  'Люкс с 1 спальней - Вид на улицу',
  'Классический двухместный или одноместный номер',
];

const MIN_PRICE = 10000;
const MAX_PRICE = 50000;

const MIN_ROOMS = 1;
const MAX_ROOMS = 5;

const MIN_GUESTS = 1;
const MAX_GUESTS = 5;

function createNewAds(avatarID) {
  const titleIndex = getRandomInteger(0, TITLES.length - 1);

  const latValue = getRandomFloat(35.65000, 35.70000, 5);
  const lngValue = getRandomFloat(139.70000, 139.80000, 5);

  const featuresLength = getRandomInteger(0, FEATURES.length);
  const descriptionIndex = getRandomInteger(0, DESCRIPTION.length - 1);

  const photosLength = getRandomInteger(0, PHOTOS.length);
  return {
    author: { avatar: AVATARS[avatarID] },

    offer: {
      title: TITLES[titleIndex],
      address: `${latValue.toString()}, ${lngValue.toString()}`,
      price: getRandomInteger(MIN_PRICE, MAX_PRICE),
      type: TYPES[getRandomInteger(0, TYPES.length - 1)],
      rooms: getRandomInteger(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomInteger(MIN_GUESTS, MAX_GUESTS),
      checkin: CHECKINS[getRandomInteger(0, CHECKINS.length - 1)],
      checkout: CHECKOUTS[getRandomInteger(0, CHECKOUTS.length - 1)],
      features: FEATURES.slice(0, featuresLength),
      description: DESCRIPTION[descriptionIndex],
      photos: PHOTOS.slice(0, photosLength),
    },

    location: {
      lat: latValue,
      lng: lngValue,
    },
  };
}

const adsArray = [];

for (let i = 0; i < 10; i++) {
  const element = createNewAds(i);
  adsArray[i] = element;
}

let featuresLengthExample = getRandomInteger(0, FEATURES.length);
console.log(featuresLengthExample);
console.log(FEATURES.slice(0, featuresLength));
