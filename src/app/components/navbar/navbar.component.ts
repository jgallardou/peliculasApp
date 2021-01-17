import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  terminoPelicula: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarPelicula(terminoBusqueda: string) {
    if (terminoBusqueda.trim().length != 0) {
      this.router.navigate(['/buscar', terminoBusqueda])
    }
  }

}
