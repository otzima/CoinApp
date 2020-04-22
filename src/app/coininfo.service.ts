import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class CoininfoService {
  
  selectedCoin: string;
  selectedCur: any;
  selectedCySymbol: any;
  selectedCoinName: string;

  constructor(private http: HttpClient) { }

  getCoinInfo(fSYM, cy): Observable<any> {
    const coindata = `${API_URL}pricemultifull?fsyms=${fSYM}&tsyms=${cy}&api_key${API_KEY}`; 
    //console.log(coindata);
    return this.http.get(coindata);
  }

  getHistoday(fSYM, days, cy): Observable<any> {
    const data = `${API_URL}v2/histoday?fsym=${fSYM}&tsym=${cy}&limit=${days}&api_key${API_KEY}`
    return this.http.get(data);
  }
}



