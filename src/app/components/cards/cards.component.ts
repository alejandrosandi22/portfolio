import { Component, OnInit } from '@angular/core';
import rest from '../../services/rest.js';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public projects: any;

  constructor() {
    this.projects = rest;
   }

  ngOnInit(): void {
  }

}
