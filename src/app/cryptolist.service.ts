import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class CryptolistService {

  constructor(private http: HttpClient) { }

  prefGetCoins(amt, cy) {
    const list = `${API_URL}top/totaltoptiervolfull?limit=${amt}&tsym=${cy}&api_key${API_KEY}`; //variable for limit(10-100) and tsym(EUR,USD etc)
    return this.http.get(list);
  }

  getAllCoins() {
    const list = `${API_URL}all/coinlist?api_key=${API_KEY}`;
    return this.http.get(list);
  }
}


