import { Component, OnInit } from '@angular/core';
import { CryptolistService } from '../cryptolist.service';
import { CoininfoService } from '../coininfo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonPipe, CurrencyPipe } from '@angular/common';

enum Currency {
  EUR = "EUR",
  USD = "USD",
  RUB = "RUB",
  SEK = "SEK"
}

//test
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  list: any;
  amt: string;
  cy: Currency = Currency.EUR;
  cySymbol: string;

  constructor(private cryptolistService: CryptolistService, private coininfoService: CoininfoService, private router: Router) {}

  ngOnInit() {
    this.amt = "10";
    this.changePref(this.amt, this.cy);
  }

  changePref(amt, cy) {
      this.cryptolistService.prefGetCoins(amt, cy).subscribe(data => {
      if (cy == Currency.EUR) { //changes the symbol depending on selected currency
      this.cySymbol = "€";
      } else if (cy == Currency.USD) {
      this.cySymbol = "$";
      } else if (cy == Currency.RUB) {
      this.cySymbol = "₽";
      } else if (cy == Currency.SEK) {
      this.cySymbol = "kr";
      }
      this.cy = cy;
      this.list = data;
    }); 
    console.log(cy, amt, this.cySymbol);
  }

  getPrice(rawData: string) {
    return rawData[this.cy]["PRICE"];
  }

  coinDetail(coin) { //send data to infopage
    console.log(coin);
    this.coininfoService.selectedCySymbol = this.cySymbol;
    this.coininfoService.selectedCur = this.cy;
    this.coininfoService.selectedCoin = coin; 
    this.router.navigate(['/coin-info']);
  }
}
