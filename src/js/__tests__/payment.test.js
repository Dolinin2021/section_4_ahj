import paymentSystem from '../validator';

test('valid card number', () => {
  const result = paymentSystem('5555555555554444');
  expect(result).toEqual(true);
});

test('invalid card number', () => {
  const result = paymentSystem('12345');
  expect(result).toBe(false);
});
