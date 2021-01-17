import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credit-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  @Input() casts: Cast[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.casts);
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

}
