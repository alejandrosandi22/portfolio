import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public element: HTMLDivElement;
  public views: any;

  constructor() {
    this.views = {current: 'home', next: 'projects'}
    this.element = null;
  }
}
