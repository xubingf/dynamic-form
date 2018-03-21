import { FormTest3Page } from './app.po';

describe('form-test3 App', function() {
  let page: FormTest3Page;

  beforeEach(() => {
    page = new FormTest3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
