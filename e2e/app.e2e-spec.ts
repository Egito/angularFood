import { AngularImoPage } from './app.po';

describe('angular-imo App', () => {
  let page: AngularImoPage;

  beforeEach(() => {
    page = new AngularImoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
