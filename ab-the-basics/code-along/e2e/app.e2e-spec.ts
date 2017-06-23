import { AbTheBasicsPage } from './app.po';

describe('ab-the-basics App', () => {
  let page: AbTheBasicsPage;

  beforeEach(() => {
    page = new AbTheBasicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
