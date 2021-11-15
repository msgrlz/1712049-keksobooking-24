//Функция для отрисовки 1го объявления

const card = document.querySelector('#card');

function createCard(advertData) {
  // получение DOM элемента карточки
  const clonedCard = card.cloneNode(true);

  // если в объявлении есть заголовок title - отрисовываем его в блок .popup__title
  if (advertData.offer.title) {
    clonedCard.querySelector('.popup__title').textContent = advertData.offer.title;
  } else {
    // если нет - удаляем этот блок
    clonedCard.querySelector('.popup__title').remove();
  }

  // то же самое с полем address

  if (advertData.offer.address) {
    clonedCard.querySelector('.popup__text--address').textContent = advertData.offer.address;
  } else {
    clonedCard.querySelector('.popup__text--address').remove();
  }

  // то же самое с полем price

  if (advertData.offer.price) {
    clonedCard.querySelector('.popup__text--price').textContent = advertData.offer.price + " ₽/ночь";
  } else {
    clonedCard.querySelector('.popup__text--price').remove();
  }

  // то же самое с полем rooms и guests

  if (advertData.offer.rooms && advertData.offer.guests) {
    clonedCard.querySelector('.popup__text--capacity').textContent = advertData.offer.rooms + " комнаты для " + advertData.offer.guests + " гостей";
  } else {
    clonedCard.querySelector('.popup__text--capacity').remove();
  }

  // то же самое с полем checkin и checkout

  if (advertData.offer.checkin && advertData.offer.checkout) {
    clonedCard.querySelector('.popup__text--time').textContent = "Заезд после " + advertData.offer.checkin + ", выезд до " + advertData.offer.checkout;
  } else {
    clonedCard.querySelector('.popup__text--time').remove();
  }

  // то же самое с полем description

  if (advertData.offer.description) {
    clonedCard.querySelector('.popup__description').textContent = advertData.offer.description;
  } else {
    clonedCard.querySelector('.popup__description').remove();
  }

  // то же самое с полем avatar

  if (advertData.author.avatar) {
    clonedCard.querySelector('.popup__avatar').textContent = advertData.author.avatar;
  } else {
    clonedCard.querySelector('.popup__avatar').remove();
  }

  return(clonedCard);
}

export { createCard };
