import { Component, OnInit } from '@angular/core';
import { CryptolistService } from '../cryptolist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonPipe, CurrencyPipe } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  list: any;
  amt: number;
  cy: any;

  constructor(private cryptolistService: CryptolistService, private router: Router) {}

  ngOnInit() {
    this.cryptolistService.getCoins().subscribe(data => {
      this.list = data;
      console.log(this.list);
    });
  }

  changePref(amt, cy) {
    if(cy == null) {
      cy = "EUR";
    } if (amt == null) {
      amt = 10;
    } console.log(cy, amt);
      this.cryptolistService.prefGetCoins(amt, cy).subscribe(data => {
        this.list = data;
    });
  }

}
