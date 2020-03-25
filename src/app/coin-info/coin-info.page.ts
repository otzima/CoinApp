import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-info',
  templateUrl: './coin-info.page.html',
  styleUrls: ['./coin-info.page.scss'],
})
export class CoinInfoPage implements OnInit {

  constructor() { }

  d: number; //day
  m: number; //month
  y: number; //year

    
  
  ngOnInit() {
    
   
      var yes = parseInt((new Date('2019.10.10').getTime() / 1000).toFixed(0))
      console.log(yes);
     
  }
  

}
