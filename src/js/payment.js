export default function paymentSystem(card) {
  const arrayOfDigits = Array.from(String(card), Number);

  if ((arrayOfDigits[0] === 3) && (arrayOfDigits[1] === 4 || arrayOfDigits[1] === 7)) {
    return 'amex';
  }
  if ((arrayOfDigits[0] === 3) && (arrayOfDigits[1] === 0
            || arrayOfDigits[1] === 6 || arrayOfDigits[1] === 8)) {
    return 'diners_club';
  }
  if ((arrayOfDigits[0] === 6) && (arrayOfDigits[1] === 0)) {
    return 'discover';
  }
  if ((arrayOfDigits[0] === 3) && (arrayOfDigits[1] === 1 || arrayOfDigits[1] === 5)) {
    return 'jcb';
  }
  if ((arrayOfDigits[0] === 5) && (arrayOfDigits[1] === 1
            || arrayOfDigits[1] === 2 || arrayOfDigits[1] === 3
            || arrayOfDigits[1] === 4 || arrayOfDigits[1] === 5)) {
    return 'master';
  }
  if (arrayOfDigits[0] === 4) {
    return 'visa';
  }
  if (arrayOfDigits[0] === 2) {
    return 'world';
  }
  return false;
}
