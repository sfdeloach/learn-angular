import { CourseProjectPage } from './app.po';

describe('course-project App', () => {
  let page: CourseProjectPage;

  beforeEach(() => {
    page = new CourseProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
