import { AVATARS, TYPES, CHECKINS, CHECKOUTS, FEATURES, PHOTOS, TITLES, DESCRIPTION } from '.data.js';
import { MIN_PRICE, MAX_PRICE, MIN_ROOMS, MAX_ROOMS, MIN_GUESTS, MAX_GUESTS } from '.data.js';

import {getRandomInteger, getRandomFloat} from '.utilities.js';

const createNewAd = (avatarID) => {
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
};

export {createNewAd};
