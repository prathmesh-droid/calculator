import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConvertServiceService } from './convert-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css',
  host: { ngSkipHydration: 'true' },
})
export class ConverterComponent implements OnInit{
  // [x: string]: any;
  inp1 = '';
  inp2 = '';
  result = '';

  convert(inp1: string, inp2: string) {
    //cel to feh
    if (inp1 != '' && inp2 === '') {
      // °F = (9/5 × °C) + 32
      this.result = eval(((9 / 5) * parseFloat(this.inp1) + 32).toString());
      console.log(this.result);
      this.inp2 = this.result;
      this.inp1 = '';
      this.inp2 = '';
    }

    if (inp1 === '' && inp2 != '') {
      //(32°F − 32) × 5/9 = 0°C
      this.result = eval(((parseFloat(this.inp2) - 32) / 1.8).toString());
      console.log(this.result);
      this.inp1 = this.result;
      this.inp1 = '';
      this.inp2 = '';
    }
  }

  curr1 = '';
  curr2 = '';
  inpVal = '';
  answer = '';
  exchangeRate: any;
  constructor(private httpService: ConvertServiceService) {}
  
  arr = [];

  ngOnInit(): void {
    this.httpService.getCode().subscribe((code: any) => {
      (code) => code.json;
      this.arr = Object.keys(code.conversion_rates);
    });
  }

  getCurr() {
    const baseCurr = this.curr1;
    this.httpService.getResult(baseCurr).subscribe((data: any) => {
      (data) => data.json;
      console.log('Response data', data.conversion_rates[this.curr2]);

      this.answer = (
        parseFloat(this.inpVal) * data.conversion_rates[this.curr2]
      ).toString();
    });
  }
}
