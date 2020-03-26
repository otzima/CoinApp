import { Component, OnInit } from '@angular/core';
import { CoininfoService } from '../coininfo.service';

@Component({
  selector: 'app-coin-info',
  templateUrl: './coin-info.page.html',
  styleUrls: ['./coin-info.page.scss'],
})
export class CoinInfoPage implements OnInit {

  coin: any;
  cy: any;
  cySymbol: any;
  
  constructor(private coininfoService: CoininfoService) { }

  ngOnInit() {
    this.cySymbol = this.coininfoService.selectedCySymbol;
    this.cy = this.coininfoService.selectedCur;
    this.coin = this.coininfoService.selectedCoin;
    console.log(this.coin);
    console.log(this.cy, this.cySymbol);
  }

  getPrice(rawData: string) { //unnecessary looping? fix
    //console.log(this.cy);
    return rawData[this.cy]["PRICE"];
  }
  

}
