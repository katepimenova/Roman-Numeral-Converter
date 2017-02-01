import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})

export class ConverterComponent  {
  numeral;
  constructor() {
    this.numeral = {arabic: 1, roman: 'I'}
  }
  romanize(current) {
    const dict = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let currentNumber = current.arabic;
    let result = '';

    if (currentNumber >= 1 && currentNumber <= 3999) {
      _.each(dict, (arabic, roman) => {
        while ( currentNumber >= arabic ) {
          result += roman;
          currentNumber -= arabic;
        }
      });
    }

    current.roman = result;
  }
}
