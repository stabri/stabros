import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../offer.model';

@Component({
  selector: 'app-singleoffer',
  templateUrl: './singleoffer.component.html',
  styleUrls: ['./singleoffer.component.css']
})
export class SingleofferComponent implements OnInit {

  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
