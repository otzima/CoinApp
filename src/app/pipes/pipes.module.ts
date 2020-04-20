import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';  //our pipe which we generate

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterPipe],
  exports: [FilterPipe]
})
export class PipesModule { }