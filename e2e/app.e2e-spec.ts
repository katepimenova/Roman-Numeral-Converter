import { RomanNumeralConverterPage } from './app.po';

describe('roman-numeral-converter App', function() {
  let page: RomanNumeralConverterPage;

  beforeEach(() => {
    page = new RomanNumeralConverterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
