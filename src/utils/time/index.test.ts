import { getElapsedTime } from '@/utils';

describe('Util: elapsed time', () => {
  it('get 1 second elapsed time', () => {
    const start = new Date();
    const end = (() => {
      const date = new Date(start);
      date.setSeconds(date.getSeconds() + 1);
      return date;
    })();

    const output = getElapsedTime(start, end);
    expect(output).toEqual('1초');
  });
});
