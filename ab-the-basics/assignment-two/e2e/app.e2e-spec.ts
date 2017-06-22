import { AssignmentTwoPage } from './app.po';

describe('assignment-two App', () => {
  let page: AssignmentTwoPage;

  beforeEach(() => {
    page = new AssignmentTwoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
