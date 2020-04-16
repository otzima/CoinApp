import { Component, OnInit } from '@angular/core';
import { CryptolistService } from '../cryptolist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


 
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  list: any;
  coinArray: any;
  object: any;

  constructor(private cryptolistService: CryptolistService) { }

  ngOnInit() {
    this.coinArray = [];
    this.cryptolistService.getAllCoins().subscribe(data => {
      const objectNames = Object.getOwnPropertyNames(data['Data']);

      objectNames.forEach(el => {
        this.object = data['Data'][el];
        //console.log(this.object);
        this.coinArray.push(this.object);
      }); return this.coinArray.sort(this.reOrder);
    });
    console.log(this.coinArray);
  }

  reOrder(a ,b) {
    return a.SortOrder - b.SortOrder;
  }

}
