import { AssignmentPage } from './app.po';

describe('assignment App', () => {
  let page: AssignmentPage;

  beforeEach(() => {
    page = new AssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
