
import '.data.js';
import '.utilities.js';
import { createNewAd } from '.create-ads';

const adsArray = [];

for (let i = 0; i < 10; i++) {

  const element = createNewAd(i);

  adsArray[i] = element;
}
