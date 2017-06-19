import { AaGetStartPage } from './app.po';

describe('aa-get-start App', () => {
  let page: AaGetStartPage;

  beforeEach(() => {
    page = new AaGetStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
