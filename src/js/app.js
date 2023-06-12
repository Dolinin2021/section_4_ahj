import paymentSystem from './payment';
import isValidCardNumber from './validator';

const btn = document.querySelector('.btn-success');
const input = document.querySelector('.col-md-6');

input.addEventListener('input', (event) => {
  const name = paymentSystem(event.target.value);
  if (name) {
    const card = document.querySelector(`.${name}`);
    const cardsList = document.querySelectorAll('.card');
    for (const item of cardsList) {
      if (item.className !== card.className) {
        item.classList.add('cdisabled');
      } else {
        item.classList.remove('cdisabled');
      }
    }
  }
});

btn.addEventListener('click', () => {
  const valid = isValidCardNumber(input.value);
  if (valid) {
    alert('Номер карты является валидным');
  } else {
    alert('Вы ввели неправильный номер.\n'
        + 'Попробуйте ещё раз');
  }
});
