import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CoinInfoPageRoutingModule } from './coin-info-routing.module';

import { CoinInfoPage } from './coin-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CoinInfoPage
      }
    ])
  ],
  declarations: [CoinInfoPage]
})
export class CoinInfoPageModule { }
