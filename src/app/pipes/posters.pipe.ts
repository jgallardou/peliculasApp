import { isNull } from '@angular/compiler/src/output/output_ast';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posters'
})
export class PostersPipe implements PipeTransform {

  transform(poster: string): string {

    if (poster) {
      return `http://image.tmdb.org/t/p/w500${poster}`
    } else {
      return "./assets/notImage.png";
    }
  }

}
