import { scroll } from '@/utils';

describe('Util: scroll', () => {
  it('lock scroll', () => {
    scroll.lock();
    expect(document.body).toHaveStyle({ overflow: 'hidden', position: 'fixed', top: '-0px', width: '100%' });
  });

  it('unlock scroll', () => {
    scroll.unlock();
    expect(document.body).not.toHaveStyle({ overflow: 'hidden', position: 'fixed', top: '-0px', width: '100%' });
  });
});
