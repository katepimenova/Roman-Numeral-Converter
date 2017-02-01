import { RomanNumeralConverterPage } from './app.po';

describe('roman-numeral-converter App', function() {
  let page: RomanNumeralConverterPage;

  beforeEach(() => {
    page = new RomanNumeralConverterPage();
  });

  it('should display message saying Roman Numeral Converter', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Roman Numeral Converter');
  });
});
