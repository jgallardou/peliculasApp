import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

//Interfaces
import { MovieDetails } from 'src/app/interfaces/movie-details';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Cast } from 'src/app/interfaces/credit-response';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  movie: MovieDetails;
  casts: Cast[] = [];

  constructor(private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    /* const id: string = this.activatedRoute.snapshot.paramMap.get('id'); */
    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([
      this.peliculasService.getMovieDetails(id), this.peliculasService.getCast(id)
    ]).subscribe(([pelicula, casts]) => {
      if (!pelicula) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.movie = pelicula;
      this.casts = casts.filter(cast => cast.profile_path)

    });


    /*     this.peliculasService.getMovieDetails(id).subscribe(response => {
          if (!response) {
            this.router.navigateByUrl('/home');
            return;
          }
          this.movie = response;
        });
    
        this.peliculasService.getCast(id).subscribe(response => {
          this.casts = response.filter(cast => cast.profile_path)
        }); */

  }

  onBack() {
    this.location.back();
  }

}
