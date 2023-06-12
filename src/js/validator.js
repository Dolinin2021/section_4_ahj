export default function isValidCardNumber(card) {
  let checksum = 0;
  const cardnumbers = card.split('').map(Number);
  for (const [index, num] of cardnumbers.entries()) {
    if (index % 2 === 0) {
      const buffer = num * 2;
      if (buffer > 9) {
        checksum += buffer - 9;
      } else {
        checksum += buffer;
      }
    } else {
      checksum += num;
    }
  }
  if (checksum % 10 === 0) {
    return true;
  }
  return false;
}
