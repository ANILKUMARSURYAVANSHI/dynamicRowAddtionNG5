import { NewrowPage } from './app.po';

describe('newrow App', () => {
  let page: NewrowPage;

  beforeEach(() => {
    page = new NewrowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
