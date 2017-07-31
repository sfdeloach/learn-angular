import { TdFormsAssignmentPage } from './app.po';

describe('td-forms-assignment App', () => {
  let page: TdFormsAssignmentPage;

  beforeEach(() => {
    page = new TdFormsAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
