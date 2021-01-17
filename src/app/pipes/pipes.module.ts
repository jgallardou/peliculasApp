import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostersPipe } from './posters.pipe';



@NgModule({
  declarations: [PostersPipe],
  imports: [
    CommonModule
  ],
  exports:[PostersPipe]
})
export class PipesModule { }
