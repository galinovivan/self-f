import { SelfPage } from './app.po';

describe('self App', () => {
  let page: SelfPage;

  beforeEach(() => {
    page = new SelfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
