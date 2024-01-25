import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { isNumber } from 'node:util';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  host: { ngSkipHydration: 'true' },
})
export class CalculatorComponent {
  input: string = '';
  result: string = '';
  tempData = '';

  //find last operand
  findLastOperand(){
    let lastNum ="";
    for(let i=this.input.length; i>0; i--){
      if(this.input[i] ){}
    }
  }
  

  pressNum(num: string) {
    this.input = this.input + num;
    this.tempData = this.input;
    console.log(this.input);
  }

  pressOp(op: string) {
    if (this.input == '' && op != '-') {
      alert('Enter a number');
      return;
    }
    const lastKey = this.input[this.input.length - 1];


    if(lastKey === '*' && op !== '-'){
      alert('Enter a number');
      return;
    }

    if (
      lastKey === '+' ||
      lastKey === '-' ||
      // lastKey === '*' ||
      lastKey === '/'
    ) {
      alert('Enter a number');
      return;
    }

    
    this.input = this.input + op;
    this.tempData = this.input;
    console.log(this.input);
  }

 
history:string ="";

  calcAns() {
    const lastKey = this.input[this.input.length - 1];

    if (
      lastKey === '+' ||
      lastKey === '-' ||
      lastKey === '*' ||
      lastKey === '/'
    ) {
      alert('Enter a number');
      return;
    }
    this.history += "\n"+this.input;
    this.result = eval(this.input);
    this.tempData = this.result;
    this.history += "=" + this.result;
    console.log(this.result);
    // this.tempData = this.result;
    this.input = this.result;
  }
  
  clear() {
    this.input = '';
    this.result = '';
    this.tempData = '';
  }
}
//.replace(/(\..*)\./g, '$1')