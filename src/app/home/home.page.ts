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

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  splash = true;
  tabBarElement: any;
  list: any;
  amt: string;
  cy: Currency = Currency.EUR;
  cySymbol: string;

  constructor(private cryptolistService: CryptolistService, 
              private coininfoService: CoininfoService, 
              private router: Router) {
              this.tabBarElement = document.querySelector('ion-tab-bar');
              }

  ngOnInit() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);

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
  }

  getPrice(rawData: string) {
    return rawData["RAW"][this.cy]["PRICE"];
  }

  coinDetail(coin) { //send data to infopage
    console.log(coin);
    this.coininfoService.selectedCoinName = coin.CoinInfo.FullName;
    this.coininfoService.selectedCySymbol = this.cySymbol;
    this.coininfoService.selectedCur = this.cy;
    this.coininfoService.selectedCoin = coin.CoinInfo.Name; 
    this.router.navigate(['/coin-info']);
  }


}
