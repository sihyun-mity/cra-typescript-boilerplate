import { shuffle } from '@/utils';

describe('Util: shuffle', () => {
  it('shuffle numbers', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffledArr = [...arr];
    shuffle(shuffledArr);
    expect(shuffledArr).not.toEqual(arr);
  });
});
