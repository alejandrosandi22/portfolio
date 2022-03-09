import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public isActive: boolean;

  constructor() { 
    this.isActive = false;
  }

  ngOnInit(): void {
  }

  setToggle() {
    if (!this.isActive) this.isActive = true;
    else this.isActive = false;
  }

}
