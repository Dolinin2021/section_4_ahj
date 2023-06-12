import isValidCardNumber from '../validator';

test('valid card number', () => {
  const result = isValidCardNumber('30569309025904');
  expect(result).toBe(true);
});

test('invalid card number', () => {
  const result = isValidCardNumber('12345');
  expect(result).toBe(false);
});
