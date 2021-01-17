import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';

import Swiper from 'swiper';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() carteleras: Movie[];
  mySwiper: Swiper;

  constructor() {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,

    })

  }

  onSlideNext() {
    this.mySwiper.slideNext();
  }

  onSlidePrev() {
    this.mySwiper.slidePrev();
  }

}
