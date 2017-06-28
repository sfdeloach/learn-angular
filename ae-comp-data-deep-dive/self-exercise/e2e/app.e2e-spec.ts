import { EmptyAngularProjectPage } from './app.po';

describe('empty-angular-project App', () => {
  let page: EmptyAngularProjectPage;

  beforeEach(() => {
    page = new EmptyAngularProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
