import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import { Router } from '@angular/router';


@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() peliculas: Movie[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onMovieClick(idMovie: string) {
    this.router.navigate(['pelicula', idMovie]);
  }

}
