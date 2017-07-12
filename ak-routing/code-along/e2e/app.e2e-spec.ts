import { CodeAlongPage } from './app.po';

describe('code-along App', () => {
  let page: CodeAlongPage;

  beforeEach(() => {
    page = new CodeAlongPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
