import { ReactiveAssignmentPage } from './app.po';

describe('reactive-assignment App', () => {
  let page: ReactiveAssignmentPage;

  beforeEach(() => {
    page = new ReactiveAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
