import { CodealongPage } from './app.po';

describe('codealong App', () => {
  let page: CodealongPage;

  beforeEach(() => {
    page = new CodealongPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
