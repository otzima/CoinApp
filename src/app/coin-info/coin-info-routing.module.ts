import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinInfoPage } from './coin-info.page';

const routes: Routes = [
  {
    path: '',
    component: CoinInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinInfoPageRoutingModule {}
