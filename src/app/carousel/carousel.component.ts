import { Component, OnInit } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images: String[] = [
    '/assets/images/ms1.jpg',
    '/assets/images/ms2.jpg',
    '/assets/images/ms4.jpg',
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
