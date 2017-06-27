import { MyFirstServiceAngPage } from './app.po';

describe('my-first-service-ang App', () => {
  let page: MyFirstServiceAngPage;

  beforeEach(() => {
    page = new MyFirstServiceAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
