import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public element: HTMLDivElement;
  public views: any;
  public projects: any;
  public loading: boolean;

  constructor() {
    this.views = {current: 'home', next: 'projects'}
    this.element = null;
    this.projects = [];
    this.loading = false;
  }
}
