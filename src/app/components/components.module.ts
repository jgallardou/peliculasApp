import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
//Componentes
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { NavbarComponent } from './navbar/navbar.component';

//Module Pipe
import { PipesModule } from '../pipes/pipes.module';

import { RatingModule } from 'ng-starrating';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';



@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, PeliculasPosterGridComponent, CastSlideshowComponent],
  exports: [NavbarComponent, SlideshowComponent, PeliculasPosterGridComponent, CastSlideshowComponent],
  imports: [CommonModule, RouterModule, RatingModule, PipesModule, FormsModule]
})
export class ComponentsModule { }
