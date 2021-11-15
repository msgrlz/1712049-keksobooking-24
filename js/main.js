
import '.data.js';
import '.utilities.js';
import { createNewAd } from '.create-ads';
import { createCard } from '.markup-generation';

const adsArray = [];

for (let i = 0; i < 10; i++) {
  const element = createNewAd(i);
  adsArray[i] = element;
}

createCard(adsArray[0]);
