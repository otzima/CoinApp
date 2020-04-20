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
  object: any;
  coinArray:any[]=[];
  coinSearch:any[]=[];

  constructor(private cryptolistService: CryptolistService) { }

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
    console.log(this.coinArray);
  }

  reOrder(a ,b) { //simple reorder for the coin list
    return a.SortOrder - b.SortOrder;
  }

  filterArray(ev:any) { 
    this.coinArray = this.coinSearch;
    const val = ev.target.value;
    if(val && val.trim() != "") {
      this.coinArray = this.coinSearch.filter((item) => {
        return (item.FullName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
}
