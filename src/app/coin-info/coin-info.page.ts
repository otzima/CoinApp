import { Component, OnInit, ViewChild } from '@angular/core';
import { CoininfoService } from '../coininfo.service';
import { Chart } from 'chart.js';

enum Currency {
  EUR = "EUR",
  USD = "USD",
  RUB = "RUB",
  SEK = "SEK"
}

@Component({
  selector: 'app-coin-info',
  templateUrl: './coin-info.page.html',
  styleUrls: ['./coin-info.page.scss'],
})
export class CoinInfoPage implements OnInit {
  @ViewChild('barChart', { static: true }) barChart;

  data: any;
  fSYM: any; //id of the selected coin (btc, eth, doge etc)
  cySymbol: any; //symbol of the selected conversion currency
  bars: any; //chart
  colorArray: any; //chart
  days: any; //amount of days for creating the chart
  datelist: string; //list of dates for creating the chart
  prices: number; //historical prices
  coindata: any; //data from the api
  cy: Currency = Currency.EUR; //currency (EUR/USD/RUB/SEK)
  CoinName: string; //Name of the coin "Bitcoin"
  Image: string; //image of the selected coin
  Price: string; //price

  
  constructor(private coininfoService: CoininfoService) { }

  ngOnInit() {
    this.days = 6;
    this.cySymbol = this.coininfoService.selectedCySymbol;
    this.cy = this.coininfoService.selectedCur;
    this.CoinName = this.coininfoService.selectedCoinName;
    this.fSYM = this.coininfoService.selectedCoin;
    this.coininfoService.getCoinInfo(this.fSYM, this.cy).subscribe(data => {
      this.coindata = data;
      this.Image = this.coindata.RAW[this.fSYM][this.cy]["IMAGEURL"];
      this.Price = this.coindata.RAW[this.fSYM][this.cy]["PRICE"];
    });
    this.createBarChart(this.datelist, this.prices);
    this.getTimeline(this.days);
  }

  createBarChart(datelist, prices) {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: datelist, //variable
        datasets: [{
          label: 'Historical Price', //variable
          data: prices,
          backgroundColor: 'rgb(0, 0, 0, 0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  getTimeline(days) {
    let datelist = [];
    let prices = [];
    
    this.coininfoService.getHistoday(this.fSYM, days, this.cy).subscribe(data => {
      this.data = data;
        for (let i = 0; i < this.data.Data.Data.length; i++) {
          datelist.push(new Date(this.data.Data.Data[i].time*1000).toLocaleDateString()); //pushes information from the api to a js array
          prices.push(this.data.Data.Data[i].close);
          this.createBarChart(datelist, prices);
          console.log(datelist);
        }
    }); 
  }  

  changeConvCurrency(cy) {
    this.coininfoService.getCoinInfo(this.fSYM, cy).subscribe(data => {
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
    this.coindata = data;
    this.Price = this.coindata.RAW[this.fSYM][this.cy]["PRICE"];
    this.getTimeline(this.days);
    }); 
  }
}
