import { AssignmentThreePage } from './app.po';

describe('assignment-three App', () => {
  let page: AssignmentThreePage;

  beforeEach(() => {
    page = new AssignmentThreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
