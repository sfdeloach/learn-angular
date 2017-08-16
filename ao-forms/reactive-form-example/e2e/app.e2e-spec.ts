import { ReactiveFormExamplePage } from './app.po';

describe('reactive-form-example App', () => {
  let page: ReactiveFormExamplePage;

  beforeEach(() => {
    page = new ReactiveFormExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
