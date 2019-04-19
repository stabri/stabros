import { Component, OnInit } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images: String[] = [
    '../../assets/images/MF7722S_Muck-Spreader_MF6715S_FL.4621_FR_0717-2241_137301.jpg',
    '../../assets/images/MF7722S_Muck-Spreader_MF6715S_FL.4621_FR_0717-2241_137301.jpg',
    '../../assets/images/MF7722S_Muck-Spreader_MF6715S_FL.4621_FR_0717-2241_137301.jpg',
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
