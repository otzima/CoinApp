import { Component, OnInit } from '@angular/core';
import { CryptolistService } from '../cryptolist.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  list: any;

  constructor(private cryptolistService: CryptolistService) { }

  ngOnInit() {
    let array = [];
    this.cryptolistService.getAllCoins().subscribe(data => {
      this.list = data;
      console.log(this.list.Data);
        for(let i = 0; i < this.list.Data.length; i++) {
          array.push(this.list.Data[i]);
          
        } console.log(array);
    });
  }

}
