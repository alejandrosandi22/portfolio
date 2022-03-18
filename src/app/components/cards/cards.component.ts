import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {

  public projects: any;

  constructor(private rest: RestService, private app: AppService) {
   }

  ngOnInit(): void {
    this.loadProjects();
  }

  public loadProjects() {
    this.rest.get(`https://portfolio-alejandrosandi.herokuapp.com/`)
    .subscribe(res => {
      this.projects = res;
      this.app.projects = res;
    })
  }

}
