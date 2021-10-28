import '.data.js';
import '.util.js';
import {createNewAds} from '.create-element';

const adsArray = [];

for (let i = 0; i < 10; i++) {
const element = createNewAds(i);
adsArray[i] = element;
}
