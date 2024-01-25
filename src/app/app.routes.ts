import { Routes } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';
import { CalculatorComponent } from './calculator/calculator.component';

export const routes: Routes = [
    {
        path:'converter',
        component: ConverterComponent,

    },
    {
        path: '',
        component: CalculatorComponent,
        pathMatch:'full'
    }
];
