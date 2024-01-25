import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConvertServiceService {
  constructor(private http: HttpClient) {}

  getResult(curr1: string) {
    return this.http.get(
      'https://v6.exchangerate-api.com/v6/8eed76dd270bbc714ae20150/latest/' + curr1
    );
  }

  getCode(){
    return this.http.get(
      'https://v6.exchangerate-api.com/v6/8eed76dd270bbc714ae20150/latest/INR'
    );
  }
}
