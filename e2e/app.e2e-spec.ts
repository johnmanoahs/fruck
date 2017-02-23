import { FruckPage } from './app.po';

describe('fruck App', function() {
  let page: FruckPage;

  beforeEach(() => {
    page = new FruckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
