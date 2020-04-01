import { Component, OnInit, ViewChild } from '@angular/core';
import { CoininfoService } from '../coininfo.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-coin-info',
  templateUrl: './coin-info.page.html',
  styleUrls: ['./coin-info.page.scss'],
})
export class CoinInfoPage implements OnInit {
  @ViewChild('barChart', { static: true }) barChart;

  data: any;
  coin: any;
  cy: any;
  cySymbol: any;
  bars: any;
  colorArray: any;
  days: any;
  datelist: string;
  prices: number;
  
  constructor(private coininfoService: CoininfoService) { }

  ngOnInit() {
    this.days = "6";
    this.cySymbol = this.coininfoService.selectedCySymbol;
    this.cy = this.coininfoService.selectedCur;
    this.coin = this.coininfoService.selectedCoin;
    this.createBarChart(this.datelist, this.prices);
    this.getTimeline(this.days);
    //console.log(this.coin);
    //console.log(this.cy, this.cySymbol);
  }

  getPrice(rawData: string) { //unnecessary looping? fix
    return rawData[this.cy]["PRICE"];
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
    let fSYM = this.coin.CoinInfo.Name;
    
    this.coininfoService.getHistoday(fSYM, days, this.cy).subscribe(data => {
      this.data = data;
        for (let i = 0; i < this.data.Data.Data.length; i++) {
          datelist.push(new Date(this.data.Data.Data[i].time*1000).toLocaleDateString()); //pushes information from the api to a js array
          prices.push(this.data.Data.Data[i].close);
          this.createBarChart(datelist, prices);
          console.log(datelist);
        }
    }); 
  }
  
 
}
