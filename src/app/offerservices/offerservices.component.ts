import { Component, OnInit } from '@angular/core';
import { Offer } from './offer.model';

@Component({
  selector: 'app-offerservices',
  templateUrl: './offerservices.component.html',
  styleUrls: ['./offerservices.component.css']
})
export class OfferservicesComponent implements OnInit {
  offers : Offer[] = [
    new Offer('Uslugi Rolnicze', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'),
    new Offer('Odsniezanie', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'),
    new Offer('Zrebka', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'),
    new Offer('Mulczowanie', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
