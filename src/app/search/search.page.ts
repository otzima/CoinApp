import { Component, OnInit } from '@angular/core';
import { CryptolistService } from '../cryptolist.service';
import { CoininfoService } from '../coininfo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  list: any;
  object: any;
  cySymbol: string;
  coin: any;
  coinArray:any[]=[];
  coinSearch:any[]=[];

  constructor(private cryptolistService: CryptolistService, private coininfoService: CoininfoService, private router: Router) { }

  ngOnInit() {
    this.cryptolistService.getAllCoins().subscribe(data => { //get the list from the api
      const objectNames = Object.getOwnPropertyNames(data['Data']);
        objectNames.forEach(el => {
          this.object = data['Data'][el];
          this.coinArray.push(this.object);
        }); 
      this.coinSearch = this.coinArray;
      return this.coinArray.sort(this.reOrder);
      });
  }

  reOrder(a ,b) { //simple reorder for the coin list
    return a.SortOrder - b.SortOrder;
  }

  filterArray(ev:any) { 
    this.coinArray = this.coinSearch;
    const val = ev.target.value;
    if(val && val.trim() != "") {
      this.coinArray = this.coinSearch.filter((coin) => {
        return (coin.FullName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } console.log(this.coinArray);
  }

  coinDetail(coin) { //send data to infopage
    this.coininfoService.selectedCySymbol = "€";
    this.coininfoService.selectedCur = "EUR";
    this.coininfoService.selectedCoinName = coin.CoinName; //Name of the coin, "Bitcoin"
    this.coininfoService.selectedCoin = coin.Name; //Shortening of the name, "BTC"
    this.router.navigate(['/coin-info']);
  }
}
